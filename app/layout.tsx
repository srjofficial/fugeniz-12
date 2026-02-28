import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono, Cinzel, Creepster } from 'next/font/google'
import localFont from 'next/font/local'
import SmoothScroll from "@/components/smooth-scroll"
import CustomCursor from "@/components/CustomCursor"

import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
})

const asoka = localFont({
  src: '../public/fonts/ASOKA.ttf',
  variable: '--font-asoka',
})

export const metadata: Metadata = {
  title: "Stranger Things Tech Fest | SNGCE IEEE CIS",
  description:
    "Annual Tech Fest - Sree Narayana Gurukulam College of Engineering under IEEE Computational Intelligence Society.",

  icons: {
    icon: "/home/f12-logo.png",
    shortcut: "/home/f12-logo.png",
    apple: "/home/f12-logo.png",
  },
}


export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${asoka.variable} ${cinzel.variable} ${creepster.variable}`}>
      <body className="font-sans antialiased bg-black text-[#f0f0f0] overflow-x-hidden selection:bg-red-900 selection:text-white">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
