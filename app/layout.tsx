import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MOMNTS – Každý den lepší rodič',
  description: 'Mindful parenting s denní reflexí. Víc přítomnosti, méně stresu.',
  keywords: 'momnts, mindful parenting, reflexe, rodičovství, android, ios',
  authors: [{ name: 'MOMNTS' }],
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
