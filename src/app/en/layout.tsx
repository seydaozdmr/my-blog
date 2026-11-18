import type { Metadata } from 'next'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { siteMetadata } from '@/lib/siteMetadata'
import { getAlternates, socialImages } from '@/lib/i18n'

export const metadata: Metadata = {
  ...siteMetadata,
  title: {
    template: '%s | CrownPro',
    default: 'CrownPro - Professional Tree Care in Antalya',
  },
  description:
    'Professional tree pruning, removal and care services in Antalya. Available 24/7 with competitive pricing and an expert team.',
  keywords: [
    'tree trimming Antalya', 'tree pruning Antalya', 'tree removal Antalya',
    'arborist Antalya', 'palm tree trimming Antalya', 'tree service Antalya',
    'emergency tree removal Antalya', 'tree care Antalya', 'certified arborist Turkey',
    'tree cutting Antalya', 'ISA certified arborist Antalya', 'CrownPro',
  ],
  alternates: getAlternates('en', '/'),
  openGraph: {
    ...siteMetadata.openGraph,
    images: socialImages('en'),
    siteName: 'CrownPro - Tree Care Antalya',
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>
}
