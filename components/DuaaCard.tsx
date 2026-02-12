'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Copy, Share2, Heart } from 'lucide-react'
import { copyToClipboard, shareOnWhatsApp } from '@/lib/utils-custom'
import { DuaaItem } from '@/lib/data'
import { useState } from 'react'

interface DuaaCardProps {
  item: DuaaItem
  isFavorite: boolean
  onToggleFavorite: () => void
  pageUrl: string
  onCopied?: () => void
}

export default function DuaaCard({
  item,
  isFavorite,
  onToggleFavorite,
  pageUrl,
  onCopied,
}: DuaaCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = `${item.title}\n\n${item.arabic}\n\n${item.transliteration}\n\n${item.meaning}`
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      onCopied?.()
    }
  }

  const handleShare = () => {
    const text = `${item.title}\n${item.arabic}\n\nRamadan Toolkit`
    shareOnWhatsApp(text, pageUrl)
  }

  return (
    <div className="border border-gray-200 rounded-lg p-5 space-y-3 hover:border-black transition-colors">
      <div>
        <h3 className="font-medium text-black">{item.title}</h3>
        <p className="text-lg text-right my-2 text-gray-900 leading-relaxed">{item.arabic}</p>
        <p className="text-sm text-gray-600 italic">{item.transliteration}</p>
        <Separator className="my-2" />
        <p className="text-sm text-gray-700">{item.meaning}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="w-full sm:flex-1 border-gray-300 text-black hover:bg-gray-100 bg-transparent active:scale-95 transition-transform"
        >
          <Copy className="h-4 w-4 mr-2" />
          {copied ? 'Copied' : 'Copy'}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="w-full sm:flex-1 border-gray-300 text-black hover:bg-gray-100 bg-transparent active:scale-95 transition-transform"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onToggleFavorite}
          className={`w-full sm:flex-1 border-gray-300 active:scale-95 transition-transform ${
            isFavorite ? 'bg-black text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'
          }`}
        >
          <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
          {isFavorite ? 'Favorited' : 'Favorite'}
        </Button>
      </div>
    </div>
  )
}
