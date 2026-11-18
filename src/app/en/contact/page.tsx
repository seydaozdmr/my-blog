import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CrownPro for professional tree pruning and care services in Antalya. Get a free quote. Available 24/7.',
  alternates: getAlternates('en', '/contact'),
  openGraph: {
    images: socialImages('en'),
    title: 'Contact | CrownPro',
    description: 'Contact CrownPro. Call now for a free quote.',
    url: 'https://antalyaagacbudama.com/en/contact',
    locale: 'en_US',
  },
}

export default function Page() { return <ContactPage locale="en" /> }
