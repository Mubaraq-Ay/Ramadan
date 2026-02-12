import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ramadan Toolkit',
  description: 'A minimalist offline-friendly Ramadan companion with Adhkār, Duʿā, calendar, and Laylatul Qadr countdown.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased bg-white text-black`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
