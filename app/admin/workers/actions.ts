"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { workers } from "@/db/schema";
import { dollarsToCents } from "@/lib/money";

export async function createWorker(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const salary = String(formData.get("monthlySalary") ?? "");
  if (!name || !salary) return;

  await getDb()
    .insert(workers)
    .values({ name, monthlySalaryCents: dollarsToCents(salary) });

  revalidatePath("/admin/workers");
  revalidatePath("/admin");
}

export async function updateWorker(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = String(formData.get("name") ?? "").trim();
  const salary = String(formData.get("monthlySalary") ?? "");
  if (!id || !name || !salary) return;

  await getDb()
    .update(workers)
    .set({ name, monthlySalaryCents: dollarsToCents(salary), updatedAt: new Date() })
    .where(eq(workers.id, id));

  revalidatePath("/admin/workers");
  revalidatePath("/admin");
}

export async function setWorkerActive(formData: FormData) {
  const id = Number(formData.get("id"));
  const active = formData.get("active") === "true";
  if (!id) return;

  await getDb()
    .update(workers)
    .set({ active, updatedAt: new Date() })
    .where(eq(workers.id, id));

  revalidatePath("/admin/workers");
  revalidatePath("/admin");
}
