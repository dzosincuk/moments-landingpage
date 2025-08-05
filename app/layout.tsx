import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Momnts - Zachyť své momenty',
  description: 'Aplikace pro zachycení a sdílení vašich nejcennějších momentů s hlasovými poznámkami.',
  keywords: 'momenty, hlasové poznámky, aplikace, android, ios',
  authors: [{ name: 'Momnts Team' }],
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
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
