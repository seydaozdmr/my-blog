import type { Metadata } from 'next'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { siteMetadata } from '@/lib/siteMetadata'
import { getAlternates, socialImages } from '@/lib/i18n'

export const metadata: Metadata = {
  ...siteMetadata,
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
  alternates: getAlternates('ru', '/'),
  openGraph: {
    ...siteMetadata.openGraph,
    images: socialImages('ru'),
    siteName: 'CrownPro - Уход за деревьями Анталья',
    locale: 'ru_RU',
    alternateLocale: ['tr_TR', 'en_US'],
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="ru">{children}</SiteLayout>
}
