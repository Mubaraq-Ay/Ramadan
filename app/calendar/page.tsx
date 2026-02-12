'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ramadanCalendarDays } from '@/lib/data'
import { getCurrentDay } from '@/lib/utils-custom'
interface CalendarDay {
  day: number
  hijriDate: string
  gregorianDate: string
  notes: string
}

export default function CalendarPage() {
  const [calendarData, setCalendarData] = useState<CalendarDay[]>(ramadanCalendarDays)
  const [currentDay, setCurrentDay] = useState(1)
  const [showLastTenNights, setShowLastTenNights] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCurrentDay(getCurrentDay())
  }, [])

  return (
    <div
      className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">Ramadan Calendar</h1>
        <p className="text-gray-600">Track your daily progress through Ramadan</p>
      </div>

      <Separator className="mb-8" />

      {mounted && (
        <>
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <p className="text-sm font-medium text-gray-900">
              Ramadan Progress: Day {currentDay} of 30
            </p>
            <div className="w-full bg-gray-300 rounded-full h-3 mt-2">
              <div
                className="bg-black h-3 rounded-full transition-all"
                style={{ width: `${(currentDay / 30) * 100}%` }}
              />
            </div>
          </div>

          {/* Toggle */}
          <div className="mb-6">
            <Button
              variant={showLastTenNights ? 'default' : 'outline'}
              size="sm"
              onClick={() => setShowLastTenNights(!showLastTenNights)}
              className={`${
                showLastTenNights
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'border-gray-300 text-black hover:bg-gray-100'
              }`}
            >
              {showLastTenNights ? 'Hide Last 10 Nights' : 'Highlight Last 10 Nights'}
            </Button>
          </div>

          <Separator className="mb-8" />

          {/* Calendar Grid */}
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-500" style={{ animationDelay: '100ms' }}>
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
              {calendarData.map((dayData) => {
                const isToday = dayData.day === currentDay
                const isOddNight = dayData.day >= 21 && dayData.day % 2 === 1
                const isLastTenNights = dayData.day >= 21
                const shouldHighlight = isToday || (showLastTenNights && isLastTenNights)

                return (
                  <div
                    key={dayData.day}
                    className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${
                      isToday
                        ? 'border-black bg-black text-white font-bold'
                        : shouldHighlight
                          ? 'border-gray-300 bg-gray-100 text-black'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-black'
                    }`}
                  >
                    <div className="text-base sm:text-lg font-medium">{dayData.day}</div>
                    {isToday && <div className="text-xs sm:text-sm">today</div>}
                    {isOddNight && showLastTenNights && !isToday && (
                      <div className="text-[10px] sm:text-xs mt-0.5">blessed</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-sm text-gray-600 text-center space-y-2">
            <p>Black cell = today · Light gray = last 10 nights · "blessed" = odd nights (most likely for Laylatul Qadr)</p>
          </div>
        </>
      )}
    </div>
  )
}
