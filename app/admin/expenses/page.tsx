import { desc } from "drizzle-orm";
import { getDb } from "@/db";
import { expenses } from "@/db/schema";
import { formatCents } from "@/lib/money";
import { createExpense, deleteExpense } from "./actions";

export const dynamic = "force-dynamic";

export default async function ExpensesPage({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; category?: string }>;
}) {
  const { month, category } = await searchParams;

  const all = await getDb()
    .select()
    .from(expenses)
    .orderBy(desc(expenses.expenseDate));

  const categories = Array.from(new Set(all.map((e) => e.category))).sort();

  const filtered = all.filter((e) => {
    if (month && !e.expenseDate.startsWith(month)) return false;
    if (category && e.category !== category) return false;
    return true;
  });

  const totalCents = filtered.reduce((sum, e) => sum + e.amountCents, 0);

  const byCategory = new Map<string, number>();
  for (const e of filtered) {
    byCategory.set(e.category, (byCategory.get(e.category) ?? 0) + e.amountCents);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-primary-dark text-xl font-bold">Expenses</h1>
        <p className="text-sm text-gray-500">Log and review business expenses.</p>
      </div>

      <form
        action={createExpense}
        className="flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Date</label>
          <input
            type="date"
            name="expenseDate"
            required
            defaultValue={new Date().toISOString().slice(0, 10)}
            className="rounded border px-3 py-1.5 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Category</label>
          <input
            name="category"
            required
            list="expense-categories"
            className="w-36 rounded border px-3 py-1.5 text-sm"
            placeholder="e.g. Fuel"
          />
          <datalist id="expense-categories">
            {categories.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Description
          </label>
          <input
            name="description"
            required
            className="w-full rounded border px-3 py-1.5 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Amount</label>
          <input
            name="amount"
            type="number"
            step="0.01"
            min="0"
            required
            className="w-28 rounded border px-3 py-1.5 text-sm"
            placeholder="0.00"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-dark"
        >
          Add expense
        </button>
      </form>

      <form className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Month</label>
          <input
            type="month"
            name="month"
            defaultValue={month}
            className="rounded border px-3 py-1.5 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Category</label>
          <select
            name="category"
            defaultValue={category ?? ""}
            className="rounded border px-3 py-1.5 text-sm"
          >
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded border px-3 py-1.5 text-sm hover:bg-gray-100"
        >
          Filter
        </button>
      </form>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-xs font-medium uppercase text-gray-500">
            Total (filtered)
          </div>
          <div className="mt-1 text-2xl font-semibold">
            {formatCents(totalCents)}
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="mb-2 text-xs font-medium uppercase text-gray-500">
            By category
          </div>
          <div className="space-y-1 text-sm">
            {[...byCategory.entries()].map(([cat, cents]) => (
              <div key={cat} className="flex justify-between">
                <span>{cat}</span>
                <span>{formatCents(cents)}</span>
              </div>
            ))}
            {byCategory.size === 0 && (
              <div className="text-gray-400">No expenses.</div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-gray-400">
                  No expenses.
                </td>
              </tr>
            )}
            {filtered.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="px-4 py-2">{e.expenseDate}</td>
                <td className="px-4 py-2">{e.category}</td>
                <td className="px-4 py-2">{e.description}</td>
                <td className="px-4 py-2">{formatCents(e.amountCents)}</td>
                <td className="px-4 py-2 text-right">
                  <form action={deleteExpense}>
                    <input type="hidden" name="id" value={e.id} />
                    <button
                      type="submit"
                      className="text-xs text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
