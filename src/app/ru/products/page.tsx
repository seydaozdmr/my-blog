import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'
import { ProductsPage } from '@/components/pages/ProductsPage'

export const metadata: Metadata = {
  title: 'Наши услуги',
  description: 'Профессиональная обрезка, удаление и уход за деревьями в Анталье. Сертифицированные ISA арбористы, работаем 24/7.',
  alternates: getAlternates('ru', '/products'),
  openGraph: {
    images: socialImages('ru'),
    title: 'Наши услуги | CrownPro',
    description: 'Профессиональная обрезка, удаление и уход за деревьями в Анталье.',
    url: 'https://antalyaagacbudama.com/ru/products',
    locale: 'ru_RU',
  },
}

export default function Page() { return <ProductsPage locale="ru" /> }
