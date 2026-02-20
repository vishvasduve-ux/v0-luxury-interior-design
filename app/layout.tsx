import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'ISKO LIVE SPACE | Premium Coworking Space in Jaipur',
  description: 'ISKO LIVE SPACE - Jaipur\'s premium coworking community for entrepreneurs, freelancers, and teams. Flexible workspaces, modern amenities, networking events, and collaborative environment.',
  keywords: 'coworking space jaipur, shared office, workspace rental, startup office, freelancer workspace, flexible workspace, business address, meeting room',
  generator: 'ISKO LIVE SPACE',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'ISKO LIVE SPACE | Premium Coworking Community',
    description: 'Join Jaipur\'s most vibrant coworking community. Flexible workspace, high-speed internet, premium amenities, and networking opportunities.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#231f20',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
