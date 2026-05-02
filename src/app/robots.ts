import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://antalyaagacbudama.com/sitemap.xml',
    host: 'antalyaagacbudama.com',
  }
}
