'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { getCurrentDay, shareOnWhatsApp } from '@/lib/utils-custom'
import { adhkarData, duaaData } from '@/lib/data'
import DuaaCard from '@/components/DuaaCard'
import { useEffect, useState } from 'react'

const quickLinks = [
  { href: '/adhkar', label: 'Adhkār', description: 'Morning, evening & after salah' },
  { href: '/duas', label: 'Duʿā', description: 'Supplications by category' },
  { href: '/calendar', label: 'Calendar', description: 'Ramadan progress tracker' },
  { href: '/laylatul-qadr', label: 'Laylatul Qadr', description: 'Nights 21-30 countdown' },
]

export default function HomePage() {
  const [currentDay, setCurrentDay] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCurrentDay(getCurrentDay())
  }, [])

  const featuredDuaa = duaaData[0]
  const featuredAdhkar = adhkarData[0]

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <h1 className="text-4xl md:text-5xl font-medium mb-3 text-black text-balance">
          Ramadan Mubarak, from Mubaraq
        </h1>
        <p className="text-lg text-gray-600 mb-4 text-balance">
         A minimalist, distraction-free companion for your spiritual journey this Ramadan.
        </p>
        <Badge variant="outline" className="inline-block border-gray-300 text-gray-700">
          Fast and lightweight · No tracking
        </Badge>
      </div>

      <Separator className="mb-10" />

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {quickLinks.map((link, i) => (
          <div
            key={link.href}
            style={{
              animation: `fadeInSlide 0.4s ease-out ${i * 50}ms forwards`,
              opacity: 0,
            }}
          >
            <Link href={link.href}>
              <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-black transition-colors group">
                <h3 className="font-medium text-black group-hover:text-gray-700 mb-1">{link.label}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700">{link.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Separator className="my-10" />

      {/* Today Panel */}
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500" style={{ animationDelay: '200ms' }}>
        <div>
          <h2 className="text-2xl font-medium mb-2 text-black">Today's Reflection</h2>
          {mounted && (
            <p className="text-lg text-gray-700 font-medium">
              Ramadan Progress: Day {currentDay} of 30 {currentDay === 30 ? '🌙' : ''}
            </p>
          )}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-black h-2 rounded-full transition-all"
              style={{ width: `${(currentDay / 30) * 100}%` }}
            />
          </div>
        </div>

        {/* Featured Duaa */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Featured Duʿā</h3>
          {mounted && (
            <DuaaCard
              item={featuredDuaa}
              isFavorite={false}
              onToggleFavorite={() => {}}
              pageUrl={shareUrl}
            />
          )}
        </div>

        {/* Featured Adhkar */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Featured Adhkār</h3>
          <div className="border border-gray-200 rounded-lg p-5 space-y-3">
            <div>
              <h4 className="font-medium text-black">{featuredAdhkar.title}</h4>
              <p className="text-lg text-right my-2 text-gray-900 leading-relaxed">{featuredAdhkar.arabic}</p>
              <p className="text-sm text-gray-600 italic">{featuredAdhkar.transliteration}</p>
              <Separator className="my-2" />
              <p className="text-sm text-gray-700">{featuredAdhkar.meaning}</p>
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                className="bg-black text-white hover:bg-gray-800 flex-1 active:scale-95 transition-transform"
                onClick={() => {
                  const text = `${featuredAdhkar.title}\n\n${featuredAdhkar.arabic}\n\nRamadan Toolkit`
                  shareOnWhatsApp(text, shareUrl)
                }}
              >
                Share on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      {/* CTA */}
      <div className="text-center animate-in fade-in slide-in-from-bottom-3 duration-500" style={{ animationDelay: '300ms' }}>
        <p className="text-gray-600 mb-4">Explore more adhkār and duʿā by navigating above</p>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-gray-800 active:scale-95 transition-transform"
          onClick={() => {
            const text = 'Ramadan Mubarak 🌙 Check out this beautiful Ramadan Toolkit for daily adhkār and duʿā'
            shareOnWhatsApp(text, shareUrl)
          }}
        >
          Share Toolkit on WhatsApp
        </Button>
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
  )
}
