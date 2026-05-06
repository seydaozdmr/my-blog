import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'CrownPro',
  description: 'CrownPro Next.js uygulamasi',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-white text-slate-900 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
