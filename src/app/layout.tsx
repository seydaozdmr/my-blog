import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrownPro',
  description: 'CrownPro Next.js uygulamasi',
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
      </body>
    </html>
  )
}
