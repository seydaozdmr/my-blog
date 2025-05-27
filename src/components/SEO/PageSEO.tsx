import { FC } from 'react'
import Head from 'next/head'

interface PageSEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
}

export const PageSEO: FC<PageSEOProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://antalyaagacbudama.com/_next/image?url=%2Fimages%2Flogo3.png&w=256&q=75',
  ogType = 'website',
  keywords = [],
}) => {
  const fullTitle = `${title} | CrownPro`
  const canonicalUrl = canonical || 'https://antalyaagacbudama.com'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Antalya Ağaç Budama" />
      <meta property="og:locale" content="tr_TR" />

    </Head>
  )
} 