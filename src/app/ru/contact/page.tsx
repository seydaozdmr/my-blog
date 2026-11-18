import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с CrownPro для профессиональных услуг по уходу за деревьями в Анталье. Получите бесплатную оценку. Работаем 24/7.',
  alternates: getAlternates('ru', '/contact'),
  openGraph: {
    images: socialImages('ru'),
    title: 'Контакты | CrownPro',
    description: 'Свяжитесь с CrownPro. Звоните сейчас для бесплатной оценки.',
    url: 'https://antalyaagacbudama.com/ru/contact',
    locale: 'ru_RU',
  },
}

export default function Page() { return <ContactPage locale="ru" /> }
