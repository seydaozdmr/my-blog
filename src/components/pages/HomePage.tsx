import { HeroSlider } from '@/components/hero/HeroSlider'
import { getAllServices } from '@/lib/mdUtils'
import { StatsStrip } from '@/components/home/StatsStrip'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { CTABanner } from '@/components/home/CTABanner'

import type { Locale } from '@/lib/translations'

export async function HomePage({ locale }: { locale: Locale }) {
  const services = await getAllServices(locale)

  const basePath = locale === 'tr' ? '' : `/${locale}`

  return (
    <>
      <HeroSlider services={services} locale={locale} basePath={basePath} />
      <StatsStrip locale={locale} />
      <ServicesSection services={services} locale={locale} basePath={basePath} />
      <WhyUsSection locale={locale} />
      <AboutPreview locale={locale} basePath={basePath} />
      <CTABanner locale={locale} basePath={basePath} />
    </>
  )
}
