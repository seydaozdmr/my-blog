import type { MetadataRoute } from 'next'
import { getAllServices } from '@/lib/mdUtils'
import { getAlternates, locales, localizedUrl } from '@/lib/i18n'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await Promise.all(locales.map(async locale => {
    const services = await getAllServices(locale)
    const paths = ['/', '/products', '/about', '/contact', ...services.filter(service => !service.comingSoon).map(service => `/products/${service.slug}`)]
    return paths.map(pathname => ({
      url: localizedUrl(locale, pathname),
      alternates: { languages: getAlternates(locale, pathname).languages },
      changeFrequency: pathname === '/about' || pathname === '/contact' ? 'yearly' as const : 'monthly' as const,
      priority: pathname === '/' ? 1 : pathname === '/products' ? 0.9 : 0.7,
    }))
  }))
  return entries.flat()
}
