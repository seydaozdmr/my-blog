import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bigademir Enerji',
  description: 'Enerji çözümleri ve hizmetleri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}