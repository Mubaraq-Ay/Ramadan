'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { adhkarData } from '@/lib/data'
import AdhkarCard from '@/components/AdhkarCard'

export default function AdhkarPage() {
  const [activeTab, setActiveTab] = useState('morning')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const morningAdhkar = adhkarData.filter(a => a.category === 'morning')
  const eveningAdhkar = adhkarData.filter(a => a.category === 'evening')
  const afterSalahAdhkar = adhkarData.filter(a => a.category === 'after-salah')

  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''

  const tabs = [
    { value: 'morning', label: 'Morning', data: morningAdhkar },
    { value: 'evening', label: 'Evening', data: eveningAdhkar },
    { value: 'after-salah', label: 'After Salah', data: afterSalahAdhkar },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">Adhkār</h1>
        <p className="text-gray-600">Remembrance of Allah at different times of the day</p>
      </div>

      <Separator className="mb-8" />

      {mounted ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 border border-gray-200">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-black"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className="mt-6 space-y-4">
              <div className="space-y-4">
                {tab.data.length > 0 ? (
                  tab.data.map((item, i) => (
                    <div
                      key={item.id}
                      style={{
                        animation: `fadeInSlide 0.4s ease-out ${i * 50}ms forwards`,
                        opacity: 0,
                      }}
                    >
                      <AdhkarCard item={item} pageUrl={pageUrl} />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No adhkār found for this category.</p>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : null}

      <Separator className="my-8" />

      <p className="text-sm text-gray-600 text-center">
        Each counter helps you track repetitions. Use the copy button to share or save adhkār.
      </p>

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
