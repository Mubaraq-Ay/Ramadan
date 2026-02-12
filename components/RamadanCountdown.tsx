"use client";

import * as React from "react";
import {
  getRamadanStartDate,
  getCountdownParts,
  isRamadan,
  getRamadanDayNumber,
} from "@/lib/ramadan-dates";

const pad = (n: number) => String(n).padStart(2, "0");

export function RamadanCountdown() {
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const start = getRamadanStartDate(now);
  const inRamadan = isRamadan(now);

  if (inRamadan) {
    return (
      <p className="text-sm text-muted-foreground">
        Ramadan is ongoing — <span className="font-medium text-foreground">Day {getRamadanDayNumber(now)}</span>
      </p>
    );
  }

  const { days, hours, minutes, seconds } = getCountdownParts(start, now);

  return (
    <div className="text-sm text-muted-foreground">
      <p>
        Ramadan starts on: <span className="font-medium text-foreground">{start.toDateString()}</span>
      </p>
      <p className="mt-1">
        Countdown:{" "}
        <span className="font-medium text-foreground">
          {days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
        </span>
      </p>
    </div>
  );
}
