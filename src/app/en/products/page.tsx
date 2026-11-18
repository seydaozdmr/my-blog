import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'
import { ProductsPage } from '@/components/pages/ProductsPage'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional tree pruning, removal and care services in Antalya. ISA-certified arborists, 24/7 availability.',
  alternates: getAlternates('en', '/products'),
  openGraph: {
    images: socialImages('en'),
    title: 'Our Services | CrownPro',
    description: 'Professional tree pruning, removal and care services in Antalya.',
    url: 'https://antalyaagacbudama.com/en/products',
    locale: 'en_US',
  },
}

export default function Page() { return <ProductsPage locale="en" /> }
