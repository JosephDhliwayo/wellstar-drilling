import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { workers } from "@/db/schema";
import { centsToInputValue } from "@/lib/money";
import { updateWorker } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditWorkerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [worker] = await getDb()
    .select()
    .from(workers)
    .where(eq(workers.id, Number(id)));

  if (!worker) notFound();

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-primary-dark text-xl font-bold">Edit worker</h1>
      <form action={updateWorker} className="space-y-4 rounded-lg border bg-white p-4">
        <input type="hidden" name="id" value={worker.id} />
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">Name</label>
          <input
            name="name"
            defaultValue={worker.name}
            required
            className="rounded border px-3 py-1.5 text-sm"
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
            defaultValue={centsToInputValue(worker.monthlySalaryCents)}
            required
            className="w-32 rounded border px-3 py-1.5 text-sm"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-primary px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-dark"
        >
          Save
        </button>
      </form>
    </div>
  );
}
