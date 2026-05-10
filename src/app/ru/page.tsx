import { Metadata } from 'next'
import { HeroSlider } from '@/components/hero/HeroSlider'
import { getAllServices } from '@/lib/mdUtils'
import { StatsStrip } from '@/components/home/StatsStrip'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { CTABanner } from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'CrownPro - Профессиональный уход за деревьями в Анталье',
  description:
    'Профессиональная обрезка, удаление и уход за деревьями в Анталье, Турция. Сертифицированные ISA арбористы, работаем 24/7.',
  alternates: {
    canonical: 'https://antalyaagacbudama.com/ru',
    languages: {
      'tr': 'https://antalyaagacbudama.com',
      'en': 'https://antalyaagacbudama.com/en',
      'ru': 'https://antalyaagacbudama.com/ru',
      'x-default': 'https://antalyaagacbudama.com',
    },
  },
  openGraph: {
    title: 'CrownPro - Профессиональный уход за деревьями в Анталье',
    description: 'Профессиональная обрезка, удаление и уход за деревьями в Анталье, Турция.',
    url: 'https://antalyaagacbudama.com/ru',
    locale: 'ru_RU',
  },
}

export default async function RuHomePage() {
  const services = await getAllServices('ru')

  return (
    <>
      <HeroSlider services={services} locale="ru" basePath="/ru" />
      <StatsStrip locale="ru" />
      <ServicesSection services={services} locale="ru" basePath="/ru" />
      <WhyUsSection locale="ru" />
      <AboutPreview locale="ru" basePath="/ru" />
      <CTABanner locale="ru" basePath="/ru" />
    </>
  )
}
