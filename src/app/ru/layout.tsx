import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | CrownPro',
    default: 'CrownPro - Профессиональный уход за деревьями в Анталье',
  },
  description:
    'Профессиональная обрезка, удаление и уход за деревьями в Анталье. Сертифицированные арбористы, работаем 24/7.',
  keywords: [
    'обрезка деревьев Анталья', 'уход за деревьями Анталья', 'спил деревьев Анталья',
    'обрезка пальм Анталья', 'арборист Анталья', 'обрезка деревьев Турция',
    'уход за садом Анталья', 'вырубка деревьев Анталья', 'CrownPro Анталья',
  ],
  alternates: {
    canonical: 'https://antalyaagacbudama.com/ru',
    languages: {
      'tr': 'https://antalyaagacbudama.com',
      'en': 'https://antalyaagacbudama.com/en',
      'ru': 'https://antalyaagacbudama.com/ru',
      'x-default': 'https://antalyaagacbudama.com',
    },
  },
  openGraph: {
    siteName: 'CrownPro - Уход за деревьями Анталья',
    locale: 'ru_RU',
    alternateLocale: ['tr_TR', 'en_US'],
    type: 'website',
  },
}

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
