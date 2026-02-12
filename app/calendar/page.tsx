"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getRamadanStartDate, getRamadanDayNumber, isRamadan } from "@/lib/ramadan-dates";
import { LAYLATUL_QADR_NIGHTS, RAMADAN_TOTAL_DAYS } from "@/lib/ramadan-config";

type CalendarCell = {
  day: number;
  gregorian: Date;
};

const DAY_MS = 1000 * 60 * 60 * 24;

function midnight(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isOddNight(day: number) {
  return (LAYLATUL_QADR_NIGHTS as readonly number[]).includes(day);
}

export default function CalendarPage() {
  const [now, setNow] = useState(() => new Date());
  const [showLastTenNights, setShowLastTenNights] = useState(false);

  // Update once per minute (enough for day/progress changes)
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const inRamadan = isRamadan(now);
  const ramadanStart = getRamadanStartDate(now);

  const currentDay = inRamadan ? getRamadanDayNumber(now) : 0;

  const calendarData: CalendarCell[] = useMemo(() => {
    const startMid = midnight(ramadanStart).getTime();
    return Array.from({ length: RAMADAN_TOTAL_DAYS }, (_, i) => {
      const day = i + 1;
      const gregorian = new Date(startMid + i * DAY_MS);
      return { day, gregorian };
    });
  }, [ramadanStart]);

  const progressPercent = inRamadan
    ? Math.min(100, Math.max(0, (currentDay / RAMADAN_TOTAL_DAYS) * 100))
    : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">
          Ramadan Calendar
        </h1>
        <p className="text-gray-600">Track your daily progress through Ramadan</p>
      </div>

      <Separator className="mb-8" />

      {/* Status / Progress */}
      <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 animate-in fade-in slide-in-from-bottom-3 duration-500">
        {inRamadan ? (
          <>
            <p className="text-sm font-medium text-gray-900">
              Ramadan Progress: Day {currentDay} of {RAMADAN_TOTAL_DAYS}
            </p>
            <div className="w-full bg-gray-300 rounded-full h-3 mt-2">
              <div
                className="bg-black h-3 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-gray-900">
              Ramadan hasn’t started yet (or has ended).
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Calendar below is generated from the calculated Ramadan start date:
              {" "}
              <span className="font-medium text-black">{ramadanStart.toDateString()}</span>
            </p>
          </>
        )}
      </div>

      {/* Toggle */}
      <div className="mb-6">
        <Button
          variant={showLastTenNights ? "default" : "outline"}
          size="sm"
          onClick={() => setShowLastTenNights(!showLastTenNights)}
          className={`${
            showLastTenNights
              ? "bg-black text-white hover:bg-gray-800"
              : "border-gray-300 text-black hover:bg-gray-100"
          }`}
        >
          {showLastTenNights ? "Hide Last 10 Nights" : "Highlight Last 10 Nights"}
        </Button>
      </div>

      <Separator className="mb-8" />

      {/* Calendar Grid */}
      <div
        className="animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: "100ms" }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
          {calendarData.map((dayData) => {
            const isToday = inRamadan && dayData.day === currentDay;
            const isLastTenNights = dayData.day >= 21;
            const oddNight = isOddNight(dayData.day);

            const shouldHighlight = isToday || (showLastTenNights && isLastTenNights);

            return (
              <div
                key={dayData.day}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${
                  isToday
                    ? "border-black bg-black text-white font-bold"
                    : shouldHighlight
                    ? "border-gray-300 bg-gray-100 text-black"
                    : "border-gray-200 bg-white text-gray-700 hover:border-black"
                }`}
                title={dayData.gregorian.toDateString()}
              >
                <div className="text-base sm:text-lg font-medium">{dayData.day}</div>

                {/* show date lightly (optional but nice) */}
                <div className={`text-[10px] sm:text-xs mt-0.5 ${isToday ? "text-gray-200" : "text-gray-500"}`}>
                  {dayData.gregorian.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                </div>

                {isToday && <div className="text-[10px] sm:text-xs mt-0.5">today</div>}

                {oddNight && showLastTenNights && !isToday && (
                  <div className="text-[10px] sm:text-xs mt-0.5">blessed</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="text-sm text-gray-600 text-center space-y-2">
        <p>
          Black cell = today · Light gray = last 10 nights · “blessed” = odd nights (21, 23, 25, 27, 29)
        </p>
      </div>
    </div>
  );
}
