'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { getCountdownToTime, shareOnWhatsApp, isOddNight } from '@/lib/utils-custom'

export default function LaylatulQadrPage() {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [currentNight, setCurrentNight] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  const nights = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setMounted(true)

    // Determine current night (simplified logic)
    const now = new Date()
    const today = now.getDate()
    const estimatedDay = today % 30 || 30
    if (estimatedDay >= 21) {
      setCurrentNight(estimatedDay)
    }

    const updateCountdown = () => {
      const time = getCountdownToTime(18)
      setCountdown(time)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">Laylatul Qadr</h1>
        <p className="text-gray-600">The Night of Power · Nights 21–30</p>
      </div>

      <Separator className="mb-8" />

      {mounted && (
        <>
          {/* Countdown Timer */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Countdown to Night Start (6:00 PM)</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl font-medium text-black">{countdown.hours}</div>
                <p className="text-xs text-gray-600 mt-1">Hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium text-black">{countdown.minutes}</div>
                <p className="text-xs text-gray-600 mt-1">Minutes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium text-black">{countdown.seconds}</div>
                <p className="text-xs text-gray-600 mt-1">Seconds</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg animate-in fade-in slide-in-from-bottom-3 duration-500" style={{ animationDelay: '100ms' }}>
            <p className="text-sm text-gray-700 leading-relaxed">
              Laylatul Qadr is the most blessed night of Ramadan. The Quran was first revealed on this night.
              It is better than a thousand months. Spend this night in prayer, supplication, and Quranic recitation.
              The exact night is unknown but is sought in the odd nights of the last 10 days.
            </p>
          </div>

          <Separator className="mb-8" />

          {/* Nights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {nights.map((night, i) => {
              const isOdd = isOddNight(night)
              const isCurrent = night === currentNight

              return (
                <div
                  key={night}
                  style={{
                    animation: `fadeInSlide 0.4s ease-out ${i * 50}ms forwards`,
                    opacity: 0,
                  }}
                  className={`p-4 border rounded-lg transition-colors ${
                    isCurrent
                      ? 'border-black bg-black text-white'
                      : isOdd
                        ? 'border-gray-300 bg-gray-50 hover:border-black'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-medium ${isCurrent ? 'text-white' : 'text-black'}`}>
                      Night {night}
                    </h3>
                    {isOdd && (
                      <Badge
                        variant="outline"
                        className={`${
                          isCurrent
                            ? 'border-white text-white bg-black'
                            : 'border-gray-300 text-gray-700'
                        }`}
                      >
                        Odd Night
                      </Badge>
                    )}
                    {isCurrent && <span className="text-lg">🌙</span>}
                  </div>
                  <p className={`text-sm ${isCurrent ? 'text-gray-200' : 'text-gray-600'}`}>
                    {isOdd ? 'Most likely night for Laylatul Qadr' : 'Regular blessed night'}
                  </p>
                </div>
              )
            })}
          </div>

          <Separator className="my-8" />

          {/* Share Button */}
          <div className="text-center animate-in fade-in slide-in-from-bottom-3 duration-500" style={{ animationDelay: '200ms' }}>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 active:scale-95 transition-transform"
              onClick={() => {
                const text = `🌙 Laylatul Qadr Reminder: The Night of Power is among nights 21-30 of Ramadan. Spend tonight in prayer and supplication.\n\nCheck the countdown and guide here`
                shareOnWhatsApp(text, pageUrl)
              }}
            >
              Share Laylatul Qadr Reminder on WhatsApp
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="text-sm text-gray-600 text-center">
            <p>🌙 Odd nights (21, 23, 25, 27, 29) are especially blessed · Make dua, read Quran, pray</p>
          </div>
        </>
      )}

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
  )
}
