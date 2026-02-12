'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/adhkar', label: 'Adhkār' },
  { href: '/duas', label: 'Duʿā' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/laylatul-qadr', label: 'Laylatul Qadr' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium text-black hover:text-gray-600 transition-colors">
          Ramadan Toolkit
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-48">
            <nav className="flex flex-col gap-4 mt-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
