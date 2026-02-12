"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { shareOnWhatsApp } from "@/lib/utils-custom";

import {
  getRamadanDayNumber,
  isRamadan,
  getRamadanStartDate,
} from "@/lib/ramadan-dates";
import { getCountdownParts } from "../../lib/ramadan-ui";
import {
  NIGHT_START_HOUR,
  LAYLATUL_QADR_NIGHTS,
} from "../../lib/ramadan-config";

const pad = (n: number) => String(n).padStart(2, "0");

function getNightTargetDate(ramadanStart: Date, dayNumber: number) {
  const d = new Date(ramadanStart);
  d.setDate(ramadanStart.getDate() + (dayNumber - 1));
  d.setHours(NIGHT_START_HOUR, 0, 0, 0); // 6:00pm local time
  return d;
}

function isOddNight(day: number) {
  return (LAYLATUL_QADR_NIGHTS as readonly number[]).includes(day);
}

export default function LaylatulQadrPage() {
  const [now, setNow] = useState(() => new Date());

  // Nights 21–30
  const nights = useMemo(() => [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], []);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const inRamadan = isRamadan(now);

  // If not Ramadan, keep page but show message (no fake numbers)
  if (!inRamadan) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">
            Laylatul Qadr
          </h1>
          <p className="text-gray-600">The Night of Power · Nights 21–30</p>
        </div>

        <Separator className="mb-8" />

        <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-sm text-gray-700 leading-relaxed">
            This page becomes active during Ramadan. When Ramadan starts, you’ll
            see a countdown to the next odd night (21, 23, 25, 27, 29), your
            current Ramadan night, and the odd nights highlighted.
          </p>
        </div>
      </div>
    );
  }

  const ramadanStart = getRamadanStartDate(now);
  const currentDay = getRamadanDayNumber(now); // 1..30 during Ramadan

  // Night logic: after 6pm, you're entering the night of the current day.
  // Before 6pm, you're still in the night of (currentDay - 1).
  const afterNightStart =
    now.getHours() > NIGHT_START_HOUR ||
    (now.getHours() === NIGHT_START_HOUR && now.getMinutes() >= 0);

  const currentNight = afterNightStart ? currentDay : Math.max(1, currentDay - 1);

  // Next odd night >= currentNight
  const nextOdd =
    (LAYLATUL_QADR_NIGHTS as readonly number[]).find((d) => d >= currentNight) ??
    null;

  // Countdown target: the next odd night's start time (6pm)
  const nextOddNightTarget = nextOdd
    ? getNightTargetDate(ramadanStart, nextOdd)
    : null;

  const countdown = nextOddNightTarget
    ? getCountdownParts(nextOddNightTarget, now)
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">
          Laylatul Qadr
        </h1>
        <p className="text-gray-600">The Night of Power · Nights 21–30</p>
      </div>

      <Separator className="mb-8" />

      {/* Countdown Timer */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <h2 className="text-sm font-medium text-gray-900 mb-2">
          Countdown to the next odd night (6:00 PM)
        </h2>

        <p className="text-xs text-gray-600 mb-4">
          Current night:{" "}
          <span className="font-medium text-black">Night {currentNight}</span>
          {nextOdd ? (
            <>
              {" "}
              · Next odd night:{" "}
              <span className="font-medium text-black">Night {nextOdd}</span>
            </>
          ) : null}
        </p>

        {countdown ? (
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl font-medium text-black">
                {countdown.days}
              </div>
              <p className="text-xs text-gray-600 mt-1">Days</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium text-black">
                {pad(countdown.hours)}
              </div>
              <p className="text-xs text-gray-600 mt-1">Hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium text-black">
                {pad(countdown.minutes)}
              </div>
              <p className="text-xs text-gray-600 mt-1">Minutes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium text-black">
                {pad(countdown.seconds)}
              </div>
              <p className="text-xs text-gray-600 mt-1">Seconds</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            You’ve passed the odd nights (21, 23, 25, 27, 29). Keep striving in
            the remaining nights.
          </p>
        )}
      </div>

      {/* Description */}
      <div
        className="mb-8 p-4 border border-gray-200 rounded-lg animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: "100ms" }}
      >
        <p className="text-sm text-gray-700 leading-relaxed">
          Laylatul Qadr is the most blessed night of Ramadan. The Qur’an was
          first revealed on this night. It is better than a thousand months. The
          exact night is unknown, but it is sought in the odd nights of the last
          ten nights.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Nights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {nights.map((night, i) => {
          const odd = isOddNight(night);
          const isCurrent = night === currentNight;
          const isNextOdd = nextOdd === night;

          return (
            <div
              key={night}
              style={{
                animation: `fadeInSlide 0.4s ease-out ${i * 50}ms forwards`,
                opacity: 0,
              }}
              className={`p-4 border rounded-lg transition-colors ${
                isCurrent
                  ? "border-black bg-black text-white"
                  : isNextOdd
                  ? "border-black bg-gray-50"
                  : odd
                  ? "border-gray-300 bg-gray-50 hover:border-black"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`font-medium ${
                    isCurrent ? "text-white" : "text-black"
                  }`}
                >
                  Night {night}
                </h3>

                <div className="flex items-center gap-2">
                  {odd && (
                    <Badge
                      variant="outline"
                      className={`${
                        isCurrent
                          ? "border-white text-white bg-black"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      Odd Night
                    </Badge>
                  )}
                  {isNextOdd && !isCurrent && (
                    <Badge className="bg-black text-white">Next</Badge>
                  )}
                  {isCurrent && <span className="text-lg">🌙</span>}
                </div>
              </div>

              <p
                className={`text-sm ${
                  isCurrent ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {odd
                  ? "Most likely night for Laylatul Qadr"
                  : "Regular blessed night"}
              </p>

              <p
                className={`text-xs mt-2 ${
                  isCurrent ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Starts: {getNightTargetDate(ramadanStart, night).toDateString()} ·{" "}
                {NIGHT_START_HOUR}:00
              </p>
            </div>
          );
        })}
      </div>

      <Separator className="my-8" />

      {/* Share Button */}
      <div
        className="text-center animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: "200ms" }}
      >
        <Button
          size="lg"
          className="bg-black text-white hover:bg-gray-800 active:scale-95 transition-transform"
          onClick={() => {
            const text =
              "🌙 Laylatul Qadr Reminder: Laylatul Qadr is sought in the odd nights of the last 10 nights (21, 23, 25, 27, 29). Spend these nights in prayer and duʿā.\n\nCheck the countdown here:";
            shareOnWhatsApp(text, pageUrl);
          }}
        >
          Share Laylatul Qadr Reminder on WhatsApp
        </Button>
      </div>

      <Separator className="my-8" />

      <div className="text-sm text-gray-600 text-center">
        <p>
          🌙 Odd nights (21, 23, 25, 27, 29) are especially blessed · Make duʿā,
          read Qur’an, pray
        </p>
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
