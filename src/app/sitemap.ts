import { MetadataRoute } from 'next'
import { getAllServices } from '@/lib/mdUtils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://antalyaagacbudama.com'

  // Active services (exclude coming-soon)
  const services = await getAllServices()
  const activeServices = services.filter((s) => !s.comingSoon)

  const serviceEntries: MetadataRoute.Sitemap = activeServices.map((service) => ({
    url: `${baseUrl}/products/${service.slug}`,
    lastModified: service.date ? new Date(service.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...serviceEntries,
  ]
}
