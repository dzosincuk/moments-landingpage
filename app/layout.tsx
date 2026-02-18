import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MOMNTS – Každý den lepší rodič | Mindful Parenting',
  description: 'Mindful parenting s denní reflexí. Zapisujte si své momenty, získejte AI tipy a budujte hlubší vztah se svými dětmi. Aplikace od rodičů pro rodiče.',
  keywords: 'momnts, mindful parenting, reflexe, rodičovství, android, ios, výchova dětí, rodinná aplikace',
  authors: [{ name: 'MOMNTS' }],
  metadataBase: new URL('https://momnts.zosiii.com'),
  openGraph: {
    title: 'MOMNTS – Každý den lepší rodič',
    description: 'Mindful parenting s denní reflexí. Víc přítomnosti, méně stresu. Aplikace od rodičů pro rodiče.',
    url: 'https://momnts.zosiii.com',
    siteName: 'MOMNTS',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOMNTS – Každý den lepší rodič',
    description: 'Mindful parenting s denní reflexí. Víc přítomnosti, méně stresu.',
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
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
