const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseMonthYear(token: string): Date | null {
  const parts = token.trim().split(/\s+/);
  if (parts.length !== 2) return null;
  const month = MONTH_INDEX[parts[0].slice(0, 3).toLowerCase()];
  const year = parseInt(parts[1], 10);
  if (month === undefined || Number.isNaN(year)) return null;
  return new Date(year, month, 1);
}

export type ParsedPeriod = {
  start: Date;
  end: Date | null;
};

export function parsePeriod(period: string): ParsedPeriod | null {
  const [startStr, endStr] = period.split(/\s*[–—\-]\s*/);
  if (!startStr || !endStr) return null;
  const start = parseMonthYear(startStr);
  if (!start) return null;
  const end =
    endStr.trim().toLowerCase() === "present" ? null : parseMonthYear(endStr);
  return { start, end };
}

export function formatDuration(period: string, now: Date = new Date()): string {
  const parsed = parsePeriod(period);
  if (!parsed) return "";
  const target = parsed.end ?? now;
  const totalMonths =
    (target.getFullYear() - parsed.start.getFullYear()) * 12 +
    (target.getMonth() - parsed.start.getMonth()) +
    1;
  if (totalMonths <= 0) return "";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearLabel = years === 1 ? "yr" : "yrs";
  const monthLabel = months === 1 ? "mo" : "mos";
  if (years === 0) return `${months} ${monthLabel}`;
  if (months === 0) return `${years} ${yearLabel}`;
  return `${years} ${yearLabel} ${months} ${monthLabel}`;
}
