import { toHijri, toGregorian } from "hijri-converter"; //  
const DAY_MS = 1000 * 60 * 60 * 24;

function midnight(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function getRamadanStartDate(today = new Date()): Date {
  const gY = today.getFullYear();
  const gM = today.getMonth() + 1;  
  const gD = today.getDate();

  const h = toHijri(gY, gM, gD); // { hy, hm, hd, ... }

  // Start of Ramadan for current Hijri year
  const ramadanStartThisHijriYear = toGregorian(h.hy, 9, 1); // month 9 = Ramadan
  const startThis = new Date(
    ramadanStartThisHijriYear.gy,
    ramadanStartThisHijriYear.gm - 1,
    ramadanStartThisHijriYear.gd
  );

  // If today is before this year's Ramadan start → use this year's start,
  // else → use next Hijri year's Ramadan start.
  if (midnight(today).getTime() < midnight(startThis).getTime()) {
    return startThis;
  }

  const ramadanStartNextHijriYear = toGregorian(h.hy + 1, 9, 1);
  return new Date(
    ramadanStartNextHijriYear.gy,
    ramadanStartNextHijriYear.gm - 1,
    ramadanStartNextHijriYear.gd
  );
}

export function getRamadanDayNumber(today = new Date()): number {
  const start = getRamadanStartDate(today);
  const diffDays = Math.floor(
    (midnight(today).getTime() - midnight(start).getTime()) / DAY_MS
  );
  return diffDays + 1; // Day 1 on start date
}

export function isRamadan(today = new Date()): boolean {
  const day = getRamadanDayNumber(today);
  return day >= 1 && day <= 30;
}

export function getCountdownParts(target: Date, now = new Date()) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / DAY_MS);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}
