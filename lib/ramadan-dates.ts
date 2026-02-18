import { toHijri, toGregorian } from "hijri-converter";

const DAY_MS = 1000 * 60 * 60 * 24;

function midnight(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function toDate(g: { gy: number; gm: number; gd: number }) {
  // gm is 1-based from converter
  return new Date(g.gy, g.gm - 1, g.gd);
}

/**
 * Returns the start date of the Ramadan that contains `today`,
 * OR the upcoming Ramadan start if we're outside Ramadan.
 */
export function getRamadanStartDate(today = new Date()): Date {
  const gY = today.getFullYear();
  const gM = today.getMonth() + 1; // 1..12
  const gD = today.getDate();

  const h = toHijri(gY, gM, gD); // { hy, hm, hd, ... }

  // Candidate A: Ramadan start in the current Hijri year
  const startA = toDate(toGregorian(h.hy, 9, 1)); // 9 = Ramadan
  const endA = addDays(startA, 30); // end boundary (exclusive)

  const t = midnight(today).getTime();
  const aStart = midnight(startA).getTime();
  const aEnd = midnight(endA).getTime();

  // If today is within Ramadan window for current Hijri year, return that start
  if (t >= aStart && t < aEnd) return startA;

  // Candidate B: Ramadan start in the previous Hijri year (edge-case safe)
  const startPrev = toDate(toGregorian(h.hy - 1, 9, 1));
  const endPrev = addDays(startPrev, 30);
  const pStart = midnight(startPrev).getTime();
  const pEnd = midnight(endPrev).getTime();

  if (t >= pStart && t < pEnd) return startPrev;

  // Otherwise, we're outside Ramadan:
  // return the next upcoming Ramadan start date
  if (t < aStart) return startA;

  // today is after startA (and not inside it), so next Ramadan is h.hy + 1
  return toDate(toGregorian(h.hy + 1, 9, 1));
}

export function getRamadanDayNumber(today = new Date()): number {
  const start = getRamadanStartDate(today);
  const diffDays = Math.floor(
    (midnight(today).getTime() - midnight(start).getTime()) / DAY_MS
  );
  // Clamp to 1..30 for safety (prevents negative numbers showing anywhere)
  return Math.min(30, Math.max(1, diffDays + 1));
}

export function isRamadan(today = new Date()): boolean {
  const start = getRamadanStartDate(today);
  const t = midnight(today).getTime();
  const s = midnight(start).getTime();
  const e = midnight(addDays(start, 30)).getTime();
  return t >= s && t < e;
}

export function getCountdownParts(target: Date, now = new Date()) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / DAY_MS);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}
