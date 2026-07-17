import type { Metadata } from 'next'
import { Manrope, Newsreader } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-newsreader',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'MOMNTS – Každý den jeden jasný krok blíž k dětem',
  description: 'Dvě minuty večerní reflexe a každý den jedno osobní doporučení pro vaši rodinu. MOMNTS propojí vaše poznámky a ukáže, co konkrétně zkusit dál.',
  keywords: 'momnts, mindful parenting, reflexe, rodičovství, android, ios, výchova dětí, rodinná aplikace',
  authors: [{ name: 'MOMNTS' }],
  metadataBase: new URL('https://momnts.cz'),
  openGraph: {
    title: 'MOMNTS – Každý den jeden jasný krok blíž k dětem',
    description: 'Dvě minuty večerní reflexe. Jedno osobní doporučení pro vaši rodinu.',
    url: 'https://momnts.cz',
    siteName: 'MOMNTS',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOMNTS – Každý den jeden jasný krok blíž k dětem',
    description: 'Dvě minuty večerní reflexe. Jedno osobní doporučení pro vaši rodinu.',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  )
}
