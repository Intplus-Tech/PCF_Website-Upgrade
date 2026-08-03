function toLocalISO(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseLocalDate(iso: string): Date {
  if (!iso) return new Date(NaN);
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function nextWeekday(from: Date, weekday: number): Date {
  const result = new Date(from);
  result.setHours(0, 0, 0, 0);
  const diff = (weekday - result.getDay() + 7) % 7;
  result.setDate(result.getDate() + diff);
  return result;
}

function nextSecondOrFourthSunday(from: Date): Date {
  const start = new Date(from);
  start.setHours(0, 0, 0, 0);
  for (let i = 0; i < 70; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d.getDay() === 0) {
      const sundayNumber = Math.ceil(d.getDate() / 7);
      if (sundayNumber === 2 || sundayNumber === 4) {
        return d;
      }
    }
  }
  return start;
}

export function getNextOccurrence(
  recurrence: string,
  weekday: string | undefined,
  fixedDate: string | undefined,
): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (recurrence === "oneTime") {
    return fixedDate ?? "";
  }
  if (recurrence === "secondFourthSunday") {
    return toLocalISO(nextSecondOrFourthSunday(today));
  }
  if (recurrence === "weekly") {
    const wd = weekday ? parseInt(weekday, 10) : 0;
    return toLocalISO(nextWeekday(today, wd));
  }
  return fixedDate ?? "";
}