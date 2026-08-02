"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { expenses } from "@/db/schema";
import { dollarsToCents } from "@/lib/money";

export async function createExpense(formData: FormData) {
  const expenseDate = String(formData.get("expenseDate") ?? "");
  const category = String(formData.get("category") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const amount = String(formData.get("amount") ?? "");
  if (!expenseDate || !category || !description || !amount) return;

  await getDb().insert(expenses).values({
    expenseDate,
    category,
    description,
    amountCents: dollarsToCents(amount),
  });

  revalidatePath("/admin/expenses");
  revalidatePath("/admin");
}

export async function deleteExpense(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;

  await getDb().delete(expenses).where(eq(expenses.id, id));

  revalidatePath("/admin/expenses");
  revalidatePath("/admin");
}
