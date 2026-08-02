import Link from "next/link";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { workers, expenses } from "@/db/schema";
import { formatCents, currentPeriod, periodLabel } from "@/lib/money";
import { ensurePeriodRows, getPeriodPayments } from "./payroll/data";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const period = currentPeriod();
  const month = period.slice(0, 7);

  await ensurePeriodRows(period);
  const payments = await getPeriodPayments(period);

  const activeWorkers = await getDb()
    .select()
    .from(workers)
    .where(eq(workers.active, true));

  const payrollTotalCents = payments.reduce((s, p) => s + p.amountCents, 0);
  const paidCents = payments
    .filter((p) => p.isPaid)
    .reduce((s, p) => s + p.amountCents, 0);
  const unpaidCents = payrollTotalCents - paidCents;

  const allExpenses = await getDb().select().from(expenses);
  const monthExpenses = allExpenses.filter((e) =>
    e.expenseDate.startsWith(month),
  );
  const expensesTotalCents = monthExpenses.reduce(
    (s, e) => s + e.amountCents,
    0,
  );

  const byCategory = new Map<string, number>();
  for (const e of monthExpenses) {
    byCategory.set(
      e.category,
      (byCategory.get(e.category) ?? 0) + e.amountCents,
    );
  }

  const combinedOutflowCents = payrollTotalCents + expensesTotalCents;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-primary-dark text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">{periodLabel(period)}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          label="Active workers"
          value={String(activeWorkers.length)}
          href="/admin/workers"
        />
        <Card
          label="Payroll this period"
          value={formatCents(payrollTotalCents)}
          href="/admin/payroll"
        />
        <Card label="Paid" value={formatCents(paidCents)} />
        <Card label="Unpaid" value={formatCents(unpaidCents)} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-xs font-medium uppercase text-gray-500">
            Expenses this month
          </div>
          <div className="mt-1 text-2xl font-semibold">
            {formatCents(expensesTotalCents)}
          </div>
          <div className="mt-3 space-y-1 text-sm">
            {[...byCategory.entries()].map(([cat, cents]) => (
              <div key={cat} className="flex justify-between text-gray-600">
                <span>{cat}</span>
                <span>{formatCents(cents)}</span>
              </div>
            ))}
            {byCategory.size === 0 && (
              <div className="text-gray-400">No expenses logged yet.</div>
            )}
          </div>
          <Link
            href="/admin/expenses"
            className="mt-3 inline-block text-xs text-primary hover:underline"
          >
            View all expenses →
          </Link>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <div className="text-xs font-medium uppercase text-gray-500">
            Combined outflow this period
          </div>
          <div className="mt-1 text-2xl font-semibold">
            {formatCents(combinedOutflowCents)}
          </div>
          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Payroll</span>
              <span>{formatCents(payrollTotalCents)}</span>
            </div>
            <div className="flex justify-between">
              <span>Expenses</span>
              <span>{formatCents(expensesTotalCents)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="hover:border-accent rounded-lg border bg-white p-4 transition-colors">
      <div className="text-xs font-medium uppercase text-gray-500">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}
