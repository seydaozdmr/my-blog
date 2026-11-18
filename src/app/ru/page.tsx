import { HomePage } from '@/components/pages/HomePage'
import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'CrownPro - Профессиональный уход за деревьями в Анталье',
  description:
    'Профессиональная обрезка, удаление и уход за деревьями в Анталье, Турция. Сертифицированные ISA арбористы, работаем 24/7.',
  alternates: getAlternates('ru', '/'),
  openGraph: {
    images: socialImages('ru'),
    title: 'CrownPro - Профессиональный уход за деревьями в Анталье',
    description: 'Профессиональная обрезка, удаление и уход за деревьями в Анталье, Турция.',
    url: 'https://antalyaagacbudama.com/ru',
    locale: 'ru_RU',
  },
}

export default function Page() { return <HomePage locale="ru" /> }
