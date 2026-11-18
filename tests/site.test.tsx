import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { access } from 'node:fs/promises'
import path from 'node:path'
import { getAllServices, getServiceBySlug } from '@/lib/mdUtils'
import { getAlternates, getPathLocale, localePath, locales, localizedUrl, stripLocale } from '@/lib/i18n'
import { contactCopy, contactEmail, contactMailto } from '@/lib/contact'
import { renderMarkdown } from '@/lib/markdown'
import { getT } from '@/lib/translations'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProductList } from '@/components/services/ProductList'
import ContactForm from '@/components/contact/ContactForm'
import sitemap from '@/app/sitemap'
import { NextRequest } from 'next/server'
import { middleware } from '@/middleware'

describe('localized site', () => {
  it.each(locales)('uses reciprocal language URLs for every %s route', async locale => {
    const services = await getAllServices(locale)
    for (const pathname of ['/', '/products', '/contact', '/about', '/privacy', ...services.map(service => `/products/${service.slug}`)]) {
      const metadata = getAlternates(locale, pathname)
      expect(metadata.canonical).toBe(localizedUrl(locale, pathname))
      for (const language of locales) expect(metadata.languages[language]).toBe(localizedUrl(language, pathname))
      expect(metadata.languages['x-default']).toBe(localizedUrl('tr', pathname))
    }
  })

  it('matches whole locale segments and preserves route paths', () => {
    expect(getPathLocale('/english')).toBe('tr')
    expect(getPathLocale('/rubbish')).toBe('tr')
    for (const locale of locales) {
      expect(stripLocale(localePath(locale, '/products/test'))).toBe('/products/test')
      expect(stripLocale(localePath(locale))).toBe('/')
    }
  })

  it('keeps query strings on language redirects and respects explicit preferences', () => {
    const redirect = middleware(new NextRequest('https://example.com/contact?source=home', { headers: { 'accept-language': 'en-GB,en;q=0.9' } }))
    expect(redirect.headers.get('location')).toBe('https://example.com/en/contact?source=home')
    const noRedirect = middleware(new NextRequest('https://example.com/contact', { headers: { cookie: 'NEXT_LOCALE=tr', 'accept-language': 'ru' } }))
    expect(noRedirect.headers.get('location')).toBeNull()
    const localized = middleware(new NextRequest('https://example.com/ru/contact'))
    expect(localized.cookies.get('NEXT_LOCALE')?.value).toBe('ru')
  })

  it.each(locales)('%s content has matching services, real images, and distinct upcoming states', async locale => {
    const services = await getAllServices(locale)
    expect(services).toHaveLength(9)
    expect(services.filter(service => service.comingSoon)).toHaveLength(2)
    expect(new Set(services.map(service => service.id)).size).toBe(services.length)
    expect(services.map(service => service.slug).sort()).toEqual((await getAllServices('tr')).map(service => service.slug).sort())
    for (const service of services) {
      await access(path.join(process.cwd(), 'public', service.image))
      expect(await getServiceBySlug(service.slug, locale)).toEqual(service)
    }
    const html = renderToStaticMarkup(<ServicesSection services={services} locale={locale} basePath={locale === 'tr' ? '' : `/${locale}`} />)
    for (const service of services) {
      const href = `href="${localePath(locale, `/products/${service.slug}`)}"`
      if (service.comingSoon) expect(html).not.toContain(href)
      else expect(html).toContain(href)
    }
    expect(html).toContain(getT(locale).productList.comingSoon)
  })

  it('rejects missing services and traversal paths', async () => {
    for (const slug of ['missing-service', '../messages/private', '/etc/passwd', '%2e%2e%2fprivate']) expect(await getServiceBySlug(slug)).toBeNull()
  })

  it.each(locales)('%s service list contains complete Markdown in initial HTML', async locale => {
    const services = await getAllServices(locale)
    const html = renderToStaticMarkup(<ProductList services={services} locale={locale} />)
    for (const service of services.filter(service => !service.comingSoon)) expect(html).toContain(renderMarkdown(service.content))
  })

  it('renders Markdown formatting while blocking executable HTML and URLs', () => {
    expect(renderMarkdown('## Title\n\n**Bold**')).toContain('<h2>Title</h2>')
    const html = renderMarkdown('<img src=x onerror=alert(1)>\n\n[bad](javascript:alert%281%29)\n\n[good](https://example.com)')
    expect(html).not.toContain('<img src=x')
    expect(html).not.toContain('href="javascript:')
    expect(html).toContain('href="https://example.com"')
  })

  it.each(locales)('%s contact form opens a correctly encoded draft with localized fields', locale => {
    const t = contactCopy[locale]
    const data = { name: 'A & B', email: 'person@example.com', phone: '+90 555', subject: t.subjects[0], message: 'First line\nSecond line & details' }
    const url = new URL(contactMailto(data, locale))
    expect(url.pathname).toBe(contactEmail)
    expect(url.searchParams.get('subject')).toBe(data.subject)
    expect(url.searchParams.get('body')).toContain(data.message)
    expect(url.searchParams.get('body')).toContain(`${t.name}: A & B`)
    const html = renderToStaticMarkup(<ContactForm locale={locale} />)
    expect(html).toContain(`action="mailto:${contactEmail}"`)
    expect(html).toContain('encType="text/plain"')
    expect(html).toContain(t.submit)
    expect(html).toContain(t.name)
    expect(html).toContain(t.note)
    for (const subject of t.subjects) expect(html).toContain(subject)
  })

  it('includes only public, active routes with alternate languages in the sitemap', async () => {
    const entries = await sitemap()
    expect(entries).toHaveLength(33)
    expect(new Set(entries.map(entry => entry.url)).size).toBe(entries.length)
    for (const entry of entries) {
      expect(entry.url).not.toContain('/privacy')
      expect(entry.url).not.toMatch(/agac-hamagi|agac-tirmanci-egitimi/)
      expect(Object.keys(entry.alternates?.languages ?? {}).sort()).toEqual(['en', 'ru', 'tr', 'x-default'])
    }
  })
})
