import { MetadataRoute } from 'next'
import { getAllServices } from '@/lib/mdUtils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://antalyaagacbudama.com'

  const [trServices, enServices, ruServices] = await Promise.all([
    getAllServices('tr'),
    getAllServices('en'),
    getAllServices('ru'),
  ])

  const toEntries = (services: Awaited<ReturnType<typeof getAllServices>>, prefix: string, priority: number): MetadataRoute.Sitemap =>
    services
      .filter((s) => !s.comingSoon)
      .map((s) => ({
        url: `${baseUrl}${prefix}/products/${s.slug}`,
        lastModified: s.date ? new Date(s.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority,
      }))

  return [
    // TR
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    ...toEntries(trServices, '', 0.8),

    // EN
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/en/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/en/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/en/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    ...toEntries(enServices, '/en', 0.7),

    // RU
    { url: `${baseUrl}/ru`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ru/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ru/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/ru/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    ...toEntries(ruServices, '/ru', 0.7),
  ]
}
