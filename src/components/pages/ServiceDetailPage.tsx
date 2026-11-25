import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllServices, getServiceBySlug } from '@/lib/mdUtils'
import { getAlternates, localizedUrl, localePath, socialImages } from '@/lib/i18n'
import { getT, type Locale } from '@/lib/translations'
import { PageMasthead, ContactBand } from '@/components/layout/PageMasthead'
import { renderMarkdown } from '@/lib/markdown'
import type { Metadata } from 'next'

export async function serviceParams(locale: Locale) {
  return (await getAllServices(locale)).filter(service => !service.comingSoon).map(service => ({ slug: service.slug }))
}

async function activeService(slug: string, locale: Locale) {
  const service = await getServiceBySlug(slug, locale)
  if (!service || service.comingSoon) notFound()
  return service
}

export async function serviceMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const service = await activeService(slug, locale)
  const pathname = `/products/${slug}`
  const ogLocales = { tr: 'tr_TR', en: 'en_US', ru: 'ru_RU' }
  return {
    title: service.title,
    description: service.description,
    alternates: getAlternates(locale, pathname),
    openGraph: {
      title: `${service.title} | CrownPro`,
      description: service.description,
      url: localizedUrl(locale, pathname),
      locale: ogLocales[locale],
      alternateLocale: Object.entries(ogLocales).filter(([key]) => key !== locale).map(([, value]) => value),
      images: socialImages(locale, slug),
    },
  }
}

export async function ServiceDetailPage({ slug, locale }: { slug: string; locale: Locale }) {
  const service = await activeService(slug, locale)
  const htmlContent = renderMarkdown(service.content)
  const t = getT(locale)

  return (
    <>
      <PageMasthead locale={locale} section="products" title={service.title} image={service.image} position={service.imagePosition}>
        {service.description}
      </PageMasthead>
      <div className="inner-wrap service-detail">
        <nav className="breadcrumbs" aria-label={t.productList.quickNav}>
          <Link href={localePath(locale)}>{t.serviceDetail.breadcrumbHome}</Link><span aria-hidden="true">/</span>
          <Link href={localePath(locale, '/products')}>{t.serviceDetail.breadcrumbServices}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{service.title}</span>
        </nav>
        <article className="reading-column">
          <div className="reading-text" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <div className="entry-actions">
            <Link className="editorial-link" href={localePath(locale, '/contact')}>{t.serviceDetail.getQuote}</Link>
            <a className="editorial-link" href="tel:+905511672228">{t.serviceDetail.callNow}</a>
          </div>
        </article>
        <Link className="editorial-link" href={localePath(locale, '/products')}>← {t.serviceDetail.backToAll}</Link>
      </div>
      <ContactBand locale={locale} title={t.serviceDetail.ctaTitle} message={t.serviceDetail.sendMessage}>
        {t.serviceDetail.ctaSubtitle}
      </ContactBand>
    </>
  )
}
