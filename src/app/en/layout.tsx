import type { Metadata } from 'next'

export const metadata: Metadata = {
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
  alternates: {
    canonical: 'https://antalyaagacbudama.com/en',
    languages: {
      'tr': 'https://antalyaagacbudama.com',
      'en': 'https://antalyaagacbudama.com/en',
      'x-default': 'https://antalyaagacbudama.com',
    },
  },
  openGraph: {
    siteName: 'CrownPro - Tree Care Antalya',
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    type: 'website',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
