import Image from 'next/image'
import Link from 'next/link'
import { renderMarkdown } from '@/lib/markdown'
import type { IService } from '@/types/service'
import { getT, type Locale } from '@/lib/translations'

interface ProductListProps {
  services: IService[]
  locale?: Locale
  basePath?: string
}

export function ProductList({ services, locale = 'tr', basePath = '' }: ProductListProps) {
  const t = getT(locale)
  return (
    <div className="inner-wrap catalogue">
      <nav className="breadcrumbs" aria-label={t.productList.quickNav}>
        <Link href={basePath || '/'}>{t.productList.breadcrumbHome}</Link>
        <span aria-hidden="true">/</span>{t.productList.breadcrumbServices}
      </nav>
      <div className="catalogue-layout">
        <nav className="service-index" aria-label={t.productList.quickNav}>
          <h2 className="page-kicker">{t.productList.quickNav}</h2>
          {services.map(service => <a key={service.key} href={'#' + service.key}>{service.title}<span aria-hidden="true">↓</span></a>)}
        </nav>
        <div>
          {services.map(service => (
            <article id={service.key} key={service.key} className="catalogue-entry">
              {service.image && <div className="entry-photo">
                <Image src={service.image} alt="" fill sizes="(max-width: 720px) 90vw, 55vw" style={{ objectPosition: service.imagePosition }} />
              </div>}
              <p className="page-kicker">{service.comingSoon ? t.productList.comingSoon : t.productList.location + ' · ' + t.productList.professional}</p>
              <h2>{service.comingSoon ? service.title :
                <Link href={basePath + '/products/' + service.slug}>{service.title}</Link>}</h2>
              <p>{service.description}</p>
              {service.comingSoon ? <p className="upcoming-note">{t.productList.comingSoonNote}</p> : <>
                <details className="service-excerpt">
                  <summary>{t.services.learnMore}</summary>
                  <div className="reading-text" dangerouslySetInnerHTML={{ __html: renderMarkdown(service.content) }} />
                </details>
                <div className="entry-actions">
                  <Link className="editorial-link" href={basePath + '/contact'}>{t.productList.getQuote}</Link>
                  <a className="editorial-link" href="tel:+905511672228">{t.productList.callNow}</a>
                </div>
              </>}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
