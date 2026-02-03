import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/hizmetler',
          '/hakkimizda',
          '/iletisim',
          '/products',
          '/api/services',
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/images/',
          '/_next/image/',
        ],
      },
    ],
    sitemap: 'https://antalyaagacbudama.com/sitemap.xml',
    host: 'https://antalyaagacbudama.com',
  }
} 