import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/SEO/StructuredData'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | CrownPro',
    default: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
  },
  description:
    "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.",
  keywords: [
    'ağaç budama',
    'ağaç kesme',
    'antalya ağaç budama',
    'antalya ağaç kesme',
    'ağaç bakımı',
    'palmiye budama',
    'yüksek tırmanış',
    'ağaç cerrahisi',
    'ağaç kablolama',
    'acil ağaç kesimi',
    'CrownPro',
    'antalya',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'e5qHKYi7Wdzj29XhcbrQ_ngTakrRI1Kt8l2ShC1w2hc',
  },
  alternates: {
    canonical: 'https://antalyaagacbudama.com',
  },
  openGraph: {
    title: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
    description:
      "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.",
    url: 'https://antalyaagacbudama.com',
    siteName: 'Antalya Ağaç Budama - CrownPro',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
    description:
      "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.",
  },
  category: 'service',
  authors: [{ name: 'CrownPro' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <StructuredData
          name="CrownPro"
          description="Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri"
          address={{
            streetAddress: 'Muratpaşa',
            addressLocality: 'Antalya',
            addressRegion: 'Antalya',
            postalCode: '07000',
            addressCountry: 'TR',
          }}
          phone="+90 551 167 22 28"
          email="ruzgarozdemir@crownprotr.com"
          url="https://antalyaagacbudama.com"
          logo="https://antalyaagacbudama.com/logo.svg"
          priceRange="₺₺₺"
          geo={{ latitude: 36.8969, longitude: 30.7133 }}
          openingHours={[
            'Monday 08:00-18:00',
            'Tuesday 08:00-18:00',
            'Wednesday 08:00-18:00',
            'Thursday 08:00-18:00',
            'Friday 08:00-18:00',
            'Saturday 08:00-18:00',
            'Sunday 08:00-18:00',
          ]}
          sameAs={[
            'https://www.instagram.com/crownprotr/',
            'https://www.tiktok.com/@crownprotr',
            'https://www.facebook.com/crownprotr',
            'https://www.youtube.com/@crownprotr',
          ]}
        />
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
