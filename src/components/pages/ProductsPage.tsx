import { getAllServices } from '@/lib/mdUtils'
import { ProductList } from '@/components/services/ProductList'
import { PageMasthead, ContactBand } from '@/components/layout/PageMasthead'
import { localizedUrl } from '@/lib/i18n'
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

      <PageMasthead locale={locale} section="products" title={t.productsPage.heroTitle} image="/new_images/IMG_0029.webp" position="50% 42%">
        {t.services.subtitle}
      </PageMasthead>
      <ProductList services={services} locale={locale} basePath={basePath} />
      <ContactBand locale={locale} title={t.serviceDetail.ctaTitle} message={t.serviceDetail.sendMessage}>
        {t.serviceDetail.ctaSubtitle}
      </ContactBand>
    </>
  )
}
