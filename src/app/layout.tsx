import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import './globals.css'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/SEO/StructuredData'
import { PageSEO } from '@/components/SEO/PageSEO'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | CrownPro',
    default: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
  },
  description: 'Antalya\'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.',
  keywords: ['agac', 'ağaç budama', 'ağaç kesme', 'ağaç bakımı', 'ağaç kesme hizmeti', 'ağaç budama hizmeti', 'ağaç kesme fiyatları', 'ağaç budama fiyatları', 'yuksek tirmanis', 'yuksek tirmanis budama', 'yuksek tirmanis kesme', 'yuksek tirmanis bakımı', 'yuksek tirmanis hizmeti', 'yuksek tirmanis fiyatları', 'yuksek tirmanis budama fiyatları', 'yuksek tirmanis kesme fiyatları', 'yuksek tirmanis bakımı fiyatları','tirmanis', 'tirmanis budama', 'tirmanis kesme', 'tirmanis bakımı', 'tirmanis hizmeti', 'tirmanis fiyatları', 'tirmanis budama fiyatları', 'tirmanis kesme fiyatları', 'tirmanis bakımı fiyatları'],
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
    google: 'e5qHKYi7Wdzj29XhcbrQ_ngTakrRI1Kt8l2ShC1w2hc', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://antalyaagacbudama.com',
  },
  openGraph: {
    title: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
    description: 'Antalya\'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
    description: 'Antalya\'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.',
    images: ['https://antalyaagacbudama.com/_next/image?url=%2Fimages%2Flogo3.png&w=256&q=75'],
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
      <head>
        <PageSEO
          title="CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri"
          description="Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız."
          keywords={['agac', 'ağaç budama', 'ağaç kesme', 'ağaç bakımı', 'ağaç kesme hizmeti', 'ağaç budama hizmeti', 'ağaç kesme fiyatları', 'ağaç budama fiyatları', 'yuksek tirmanis', 'yuksek tirmanis budama', 'yuksek tirmanis kesme', 'yuksek tirmanis bakımı', 'yuksek tirmanis hizmeti', 'yuksek tirmanis fiyatları', 'yuksek tirmanis budama fiyatları', 'yuksek tirmanis kesme fiyatları', 'yuksek tirmanis bakımı fiyatları','tirmanis', 'tirmanis budama', 'tirmanis kesme', 'tirmanis bakımı', 'tirmanis hizmeti', 'tirmanis fiyatları', 'tirmanis budama fiyatları', 'tirmanis kesme fiyatları', 'tirmanis bakımı fiyatları']}
          canonical="https://antalyaagacbudama.com"
        />
      </head>
      <body className={inter.className}>
        <StructuredData
          name="CrownPro"
          description="Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri"
          address={{
            streetAddress: "Muratpaşa Antalya",
            addressLocality: "Antalya",
            addressRegion: "Antalya",
            postalCode: "07000",
            addressCountry: "TR"
          }}
          phone="+90 551 167 22 28"
          email="crownturkey@crownproturkey.com"
          url="https://antalyaagacbudama.com"
          logo="https://antalyaagacbudama.com/_next/image?url=%2Fimages%2Flogo3.png&w=256&q=75"
          priceRange="₺₺₺"
          openingHours={[
            "Monday 08:00-18:00",
            "Tuesday 08:00-18:00",
            "Wednesday 08:00-18:00",
            "Thursday 08:00-18:00",
            "Friday 08:00-18:00",
            "Saturday 08:00-18:00",
            "Sunday 08:00-18:00"
          ]}
        />
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}