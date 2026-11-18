import type { Metadata } from 'next'
import { getAlternates, socialImages } from './i18n'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://antalyaagacbudama.com'),
  title: {
    template: '%s | CrownPro',
    default: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
  },
  description:
    "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.",
  keywords: [
    // Türkçe
    'ağaç budama', 'ağaç kesme', 'antalya ağaç budama', 'antalya ağaç kesme',
    'ağaç bakımı', 'palmiye budama', 'yüksek tırmanış', 'ağaç cerrahisi',
    'ağaç kablolama', 'acil ağaç kesimi', 'CrownPro', 'antalya',
    'antalya vinç ağaç budama', 'antalya vinç ile ağaç kesimi', 'vinç ile palmiye budama',
    'antalya vinç ile palmiye budama', 'vinçli ağaç kesimi antalya', 'vinç ağaç kesimi',
    'antalya yüksek ağaç kesimi', 'vinç ile ağaç budama', 'antalya ağaç kesimi vinç',
    // English
    'tree trimming Antalya', 'tree pruning Antalya', 'tree removal Antalya',
    'arborist Antalya', 'palm tree trimming Antalya', 'tree service Antalya',
    'emergency tree removal Antalya', 'tree care Antalya', 'certified arborist Turkey',
    'tree cutting Antalya', 'ISA certified arborist Antalya',
    'crane tree pruning Antalya', 'crane tree removal Antalya', 'crane palm tree trimming Antalya',
    'crane tree cutting Antalya', 'aerial tree service Antalya', 'crane arborist Antalya',
    // Русский
    'обрезка деревьев Анталья', 'уход за деревьями Анталья', 'спил деревьев Анталья',
    'обрезка пальм Анталья', 'арборист Анталья', 'обрезка деревьев Турция',
    'уход за садом Анталья', 'вырубка деревьев Анталья', 'CrownPro Анталья',
    'спил деревьев краном Анталья', 'обрезка пальм краном Анталья', 'кран спил деревьев Анталья',
    'вырубка деревьев краном Анталья', 'услуги крана деревья Анталья',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'e5qHKYi7Wdzj29XhcbrQ_ngTakrRI1Kt8l2ShC1w2hc',
  },
  alternates: getAlternates('tr', '/'),
  openGraph: {
    images: socialImages('tr'),
    title: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
    description:
      "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.",
    url: 'https://antalyaagacbudama.com',
    siteName: 'Antalya Ağaç Budama - CrownPro',
    locale: 'tr_TR',
    alternateLocale: ['en_US', 'ru_RU'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrownPro - Antalya Ağaç Budama ve Bakım Hizmetleri',
    description:
      "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. 7/24 hizmet, uygun fiyatlar ve uzman ekibimizle yanınızdayız.",
  },
  category: 'service',
  authors: [{ name: 'CrownPro' }],
}
