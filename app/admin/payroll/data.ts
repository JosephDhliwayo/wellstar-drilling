import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { payrollPayments, workers } from "@/db/schema";

export async function ensurePeriodRows(period: string) {
  const db = getDb();
  const activeWorkers = await db
    .select()
    .from(workers)
    .where(eq(workers.active, true));

  for (const worker of activeWorkers) {
    await db
      .insert(payrollPayments)
      .values({
        workerId: worker.id,
        period,
        amountCents: worker.monthlySalaryCents,
      })
      .onConflictDoNothing({
        target: [payrollPayments.workerId, payrollPayments.period],
      });
  }
}

export async function getPeriodPayments(period: string) {
  const db = getDb();
  return db
    .select({
      id: payrollPayments.id,
      workerId: payrollPayments.workerId,
      workerName: workers.name,
      amountCents: payrollPayments.amountCents,
      isPaid: payrollPayments.isPaid,
      paidDate: payrollPayments.paidDate,
    })
    .from(payrollPayments)
    .innerJoin(workers, eq(workers.id, payrollPayments.workerId))
    .where(eq(payrollPayments.period, period))
    .orderBy(workers.name);
}

export async function getYearTotalForWorker(workerId: number, year: number) {
  const db = getDb();
  const rows = await db
    .select({ amountCents: payrollPayments.amountCents, period: payrollPayments.period })
    .from(payrollPayments)
    .where(eq(payrollPayments.workerId, workerId));

  return rows
    .filter((r) => r.period.startsWith(`${year}-`))
    .reduce((sum, r) => sum + r.amountCents, 0);
}
