import localFont from 'next/font/local'
import { Footer } from './Footer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { StructuredData } from '@/components/SEO/StructuredData'
import type { Locale } from '@/lib/translations'
import '@/app/globals.css'

const inter = localFont({ src: '../../app/fonts/Inter.ttf', display: 'swap', weight: '100 900' })

export function SiteLayout({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <html lang={locale}>
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
        <LanguageSwitcher />
        <main>{children}</main>
        <Footer locale={locale} basePath={locale === "tr" ? "" : `/${locale}`} />
      </body>
    </html>
  )
}
