'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { duaaData } from '@/lib/data'
import DuaaCard from '@/components/DuaaCard'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { motion } from 'framer-motion'

const categories = ['fasting', 'iftar', 'forgiveness', 'parents', 'laylatul-qadr'] as const

const categoryLabels: Record<(typeof categories)[number], string> = {
  fasting: 'Fasting',
  iftar: 'Iftar',
  forgiveness: 'Forgiveness',
  parents: 'Parents',
  'laylatul-qadr': 'Laylatul Qadr',
}

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function DuaaPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number] | 'all'>('all')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [favorites, setFavorites] = useLocalStorage<string[]>('duaa-favorites', [])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''

  const filteredDuaa = duaaData.filter(duaa => {
    const matchesSearch =
      duaa.title.toLowerCase().includes(search.toLowerCase()) ||
      duaa.meaning.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = selectedCategory === 'all' || duaa.category === selectedCategory

    const matchesFavorites = !showFavoritesOnly || favorites.includes(duaa.id)

    return matchesSearch && matchesCategory && matchesFavorites
  })

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <motion.div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-400" variants={pageVariants} initial="hidden" animate="visible">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 text-black">Duʿā</h1>
        <p className="text-gray-600">Supplications for every moment of your Ramadan journey</p>
      </div>

      <Separator className="mb-8" />

      {mounted && (
        <>
          {/* Search */}
          <div className="mb-6">
            <Input
              placeholder="Search duʿā by title or meaning..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border-gray-300 bg-white text-black placeholder-gray-500 focus:border-black focus:ring-0"
            />
          </div>

          {/* Categories */}
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-black text-white'
                  : 'border-gray-300 text-gray-700 hover:border-black'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Badge>
            {categories.map(cat => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className={`cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'border-gray-300 text-gray-700 hover:border-black'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {categoryLabels[cat]}
              </Badge>
            ))}
          </div>

          {/* Favorites Toggle */}
          <div className="mb-6">
            <Button
              variant={showFavoritesOnly ? 'default' : 'outline'}
              size="sm"
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`${
                showFavoritesOnly
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'border-gray-300 text-black hover:bg-gray-100'
              }`}
            >
              {showFavoritesOnly ? `Favorites (${favorites.length})` : 'Show Favorites'}
            </Button>
          </div>

          <Separator className="mb-6" />

          {/* Results */}
          <div className="space-y-4">
            {filteredDuaa.length > 0 ? (
              filteredDuaa.map((duaa) => (
                <div key={duaa.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <DuaaCard
                    item={duaa}
                    isFavorite={favorites.includes(duaa.id)}
                    onToggleFavorite={() => toggleFavorite(duaa.id)}
                    pageUrl={pageUrl}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center py-8">
                No duʿā found. Try adjusting your search or category filters.
              </p>
            )}
          </div>

          <Separator className="my-8" />

          <p className="text-sm text-gray-600 text-center">
            {favorites.length > 0 && `${favorites.length} duʿā saved to favorites · `}
            All duʿā are offline and can be used anytime
          </p>
        </>
      )}
    </motion.div>
  )
}
