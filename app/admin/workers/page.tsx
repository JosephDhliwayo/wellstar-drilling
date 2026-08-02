import Link from "next/link";
import { asc } from "drizzle-orm";
import { getDb } from "@/db";
import { workers } from "@/db/schema";
import { formatCents } from "@/lib/money";
import { createWorker, setWorkerActive } from "./actions";

export const dynamic = "force-dynamic";

export default async function WorkersPage() {
  const allWorkers = await getDb()
    .select()
    .from(workers)
    .orderBy(asc(workers.name));

  const active = allWorkers.filter((w) => w.active);
  const inactive = allWorkers.filter((w) => !w.active);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-primary-dark text-xl font-bold">Workers</h1>
        <p className="text-sm text-gray-500">
          Manage workers and their fixed monthly salary.
        </p>
      </div>

      <form
        action={createWorker}
        className="flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Name</label>
          <input
            name="name"
            required
            className="rounded border px-3 py-1.5 text-sm"
            placeholder="Worker name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Monthly salary
          </label>
          <input
            name="monthlySalary"
            type="number"
            step="0.01"
            min="0"
            required
            className="w-32 rounded border px-3 py-1.5 text-sm"
            placeholder="0.00"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-dark"
        >
          Add worker
        </button>
      </form>

      <WorkerTable title="Active" list={active} />
      {inactive.length > 0 && <WorkerTable title="Inactive" list={inactive} />}
    </div>
  );
}

function WorkerTable({
  title,
  list,
}: {
  title: string;
  list: (typeof workers.$inferSelect)[];
}) {
  return (
    <div>
      <h2 className="mb-2 text-sm font-semibold text-gray-600">{title}</h2>
      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Monthly salary</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {list.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-4 text-gray-400">
                  No workers.
                </td>
              </tr>
            )}
            {list.map((w) => (
              <tr key={w.id} className="border-t">
                <td className="px-4 py-2">
                  <Link
                    href={`/admin/workers/${w.id}`}
                    className="text-primary hover:underline"
                  >
                    {w.name}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  {formatCents(w.monthlySalaryCents)}
                </td>
                <td className="px-4 py-2 text-right">
                  <form action={setWorkerActive}>
                    <input type="hidden" name="id" value={w.id} />
                    <input
                      type="hidden"
                      name="active"
                      value={(!w.active).toString()}
                    />
                    <button
                      type="submit"
                      className="text-xs text-gray-500 hover:underline"
                    >
                      {w.active ? "Deactivate" : "Reactivate"}
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
