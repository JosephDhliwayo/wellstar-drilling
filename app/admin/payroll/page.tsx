import { formatCents, currentPeriod, periodLabel } from "@/lib/money";
import { ensurePeriodRows, getPeriodPayments, getYearTotalForWorker } from "./data";
import { markPaid, markUnpaid } from "./actions";

export const dynamic = "force-dynamic";

export default async function PayrollPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string }>;
}) {
  const { period: periodParam } = await searchParams;
  const period = periodParam ? `${periodParam}-01` : currentPeriod();
  const year = Number(period.slice(0, 4));

  await ensurePeriodRows(period);
  const payments = await getPeriodPayments(period);

  const rows = await Promise.all(
    payments.map(async (p) => ({
      ...p,
      ytdCents: await getYearTotalForWorker(p.workerId, year),
    })),
  );

  const totalCents = rows.reduce((sum, r) => sum + r.amountCents, 0);
  const paidCents = rows
    .filter((r) => r.isPaid)
    .reduce((sum, r) => sum + r.amountCents, 0);
  const outstandingCents = totalCents - paidCents;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-primary-dark text-xl font-bold">Payroll</h1>
          <p className="text-sm text-gray-500">{periodLabel(period)}</p>
        </div>
        <form className="flex items-end gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-600">
              Period
            </label>
            <input
              type="month"
              name="period"
              defaultValue={period.slice(0, 7)}
              className="rounded border px-3 py-1.5 text-sm"
            />
          </div>
          <button
            type="submit"
            className="rounded border px-3 py-1.5 text-sm hover:bg-gray-100"
          >
            View
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SummaryCard label="Total payroll" value={formatCents(totalCents)} />
        <SummaryCard label="Paid" value={formatCents(paidCents)} />
        <SummaryCard
          label="Outstanding"
          value={formatCents(outstandingCents)}
        />
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2">Worker</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">YTD ({year})</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-gray-400">
                  No active workers.
                </td>
              </tr>
            )}
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-2">{r.workerName}</td>
                <td className="px-4 py-2">{formatCents(r.amountCents)}</td>
                <td className="px-4 py-2">{formatCents(r.ytdCents)}</td>
                <td className="px-4 py-2">
                  {r.isPaid ? (
                    <span className="text-green-700">
                      Paid {r.paidDate}
                    </span>
                  ) : (
                    <span className="text-amber-700">Unpaid</span>
                  )}
                </td>
                <td className="px-4 py-2 text-right">
                  {r.isPaid ? (
                    <form action={markUnpaid}>
                      <input type="hidden" name="id" value={r.id} />
                      <button
                        type="submit"
                        className="text-xs text-gray-500 hover:underline"
                      >
                        Mark unpaid
                      </button>
                    </form>
                  ) : (
                    <form
                      action={markPaid}
                      className="flex items-center justify-end gap-2"
                    >
                      <input type="hidden" name="id" value={r.id} />
                      <input
                        type="date"
                        name="paidDate"
                        required
                        defaultValue={new Date().toISOString().slice(0, 10)}
                        className="rounded border px-2 py-1 text-xs"
                      />
                      <button
                        type="submit"
                        className="text-xs text-primary hover:underline"
                      >
                        Mark paid
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="text-xs font-medium uppercase text-gray-500">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}
