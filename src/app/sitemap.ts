import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://antalyaagacbudama.com'
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-02'),
    },
  ]
}
