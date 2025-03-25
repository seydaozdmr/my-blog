import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import './globals.css'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | CrownPro',
    default: 'CrownPro - Ana Sayfa',
  },
  description: 'Antalya Ağaç Budama Hizmetleri',
  keywords: ['agac', 'ağaç budama', 'ağaç kesme', 'ağaç bakımı', 'ağaç kesme hizmeti', 'ağaç budama hizmeti', 'ağaç kesme fiyatları', 'ağaç budama fiyatları'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CrownPro',
    description: 'Agac Budama Hizmetleri',
    url: 'https://antalyaagacbudama.com',
    siteName: 'Antalya Ağaç Budama',
    images: [
      {
        url: 'https://antalyaagacbudama.com/_next/image?url=%2Fimages%2Flogo3.png&w=256&q=75',
        width: 1200,
        height: 630,
        alt: 'CrownPro Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
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
        <Footer />
      </body>
    </html>
  )
}