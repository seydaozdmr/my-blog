import Link from 'next/link'
import { getAllServices } from '@/lib/mdUtils'
import { ProductList } from '@/components/services/ProductList'
import { Logo } from '@/components/ui/Logo'
import { localePath, localizedUrl } from '@/lib/i18n'
import { getT, type Locale } from '@/lib/translations'

export async function ProductsPage({ locale }: { locale: Locale }) {
  const services = await getAllServices(locale)
  const basePath = locale === 'tr' ? '' : `/${locale}`
  const t = getT(locale)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: t.productsPage.heroTitle,
        provider: { '@type': 'LocalBusiness', name: 'CrownPro', url: localizedUrl(locale) },
        areaServed: { '@type': 'City', name: 'Antalya' },
      }).replace(/</g, '\\u003c') }} />

      {/* Hero Banner */}
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/new_images/IMG_5501.webp')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href={localePath(locale)} className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={200} />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.productsPage.heroTitle}</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Blog-style Service Articles */}
      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <ProductList services={services} locale={locale} basePath={basePath} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.serviceDetail.ctaTitle}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {t.serviceDetail.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905511672228"
              className="bg-white text-green-700 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-all duration-300 text-lg"
            >
              +90 551 167 22 28
            </a>
            <a
              href={localePath(locale, "/contact")}
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-lg"
            >
              {t.serviceDetail.sendMessage}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
