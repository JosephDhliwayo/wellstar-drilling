export function centsToInputValue(cents: number): string {
  return (cents / 100).toFixed(2);
}

export function dollarsToCents(dollars: string | number): number {
  const value = typeof dollars === "string" ? parseFloat(dollars) : dollars;
  if (!Number.isFinite(value)) return 0;
  return Math.round(value * 100);
}

export function formatCents(cents: number): string {
  return `$${(cents / 100).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function currentPeriod(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
}

export function periodLabel(period: string): string {
  const [year, month] = period.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
}
