import { HeroSlider } from '@/components/hero/HeroSlider'
import { getAllServices } from '@/lib/mdUtils'
import { StatsStrip } from '@/components/home/StatsStrip'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { CTABanner } from '@/components/home/CTABanner'

export default async function Home() {
  const services = await getAllServices()

  return (
    <>
      <HeroSlider services={services} />
      <StatsStrip />
      <ServicesSection services={services} />
      <WhyUsSection />
      <AboutPreview />
      <CTABanner />
    </>
  )
}
