"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { payrollPayments } from "@/db/schema";

export async function markPaid(formData: FormData) {
  const id = Number(formData.get("id"));
  const paidDate = String(formData.get("paidDate") ?? "");
  if (!id || !paidDate) return;

  await getDb()
    .update(payrollPayments)
    .set({ isPaid: true, paidDate, updatedAt: new Date() })
    .where(eq(payrollPayments.id, id));

  revalidatePath("/admin/payroll");
  revalidatePath("/admin");
}

export async function markUnpaid(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;

  await getDb()
    .update(payrollPayments)
    .set({ isPaid: false, paidDate: null, updatedAt: new Date() })
    .where(eq(payrollPayments.id, id));

  revalidatePath("/admin/payroll");
  revalidatePath("/admin");
}
