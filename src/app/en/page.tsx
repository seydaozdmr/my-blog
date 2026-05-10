import { Metadata } from 'next'
import { HeroSlider } from '@/components/hero/HeroSlider'
import { getAllServices } from '@/lib/mdUtils'
import { StatsStrip } from '@/components/home/StatsStrip'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { CTABanner } from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'CrownPro - Professional Tree Care in Antalya',
  description:
    'Professional tree pruning, removal and care services in Antalya, Turkey. ISA-certified arborists available 24/7.',
  alternates: {
    canonical: 'https://antalyaagacbudama.com/en',
    languages: {
      'tr': 'https://antalyaagacbudama.com',
      'en': 'https://antalyaagacbudama.com/en',
      'x-default': 'https://antalyaagacbudama.com',
    },
  },
  openGraph: {
    title: 'CrownPro - Professional Tree Care in Antalya',
    description: 'Professional tree pruning, removal and care services in Antalya, Turkey.',
    url: 'https://antalyaagacbudama.com/en',
    locale: 'en_US',
  },
}

export default async function EnHomePage() {
  const services = await getAllServices('en')

  return (
    <>
      <HeroSlider services={services} locale="en" basePath="/en" />
      <StatsStrip locale="en" />
      <ServicesSection services={services} locale="en" basePath="/en" />
      <WhyUsSection locale="en" />
      <AboutPreview locale="en" basePath="/en" />
      <CTABanner locale="en" basePath="/en" />
    </>
  )
}
