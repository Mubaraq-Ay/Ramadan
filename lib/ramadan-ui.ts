const DAY_MS = 1000 * 60 * 60 * 24;

export function getCountdownParts(target: Date, now = new Date()) {
  const diff = target.getTime() - now.getTime();
  const total = Math.max(diff, 0);

  const days = Math.floor(total / DAY_MS);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { days, hours, minutes, seconds };
}
