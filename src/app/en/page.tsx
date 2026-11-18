import { HomePage } from '@/components/pages/HomePage'
import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'CrownPro - Professional Tree Care in Antalya',
  description:
    'Professional tree pruning, removal and care services in Antalya, Turkey. ISA-certified arborists available 24/7.',
  alternates: getAlternates('en', '/'),
  openGraph: {
    images: socialImages('en'),
    title: 'CrownPro - Professional Tree Care in Antalya',
    description: 'Professional tree pruning, removal and care services in Antalya, Turkey.',
    url: 'https://antalyaagacbudama.com/en',
    locale: 'en_US',
  },
}

export default function Page() { return <HomePage locale="en" /> }
