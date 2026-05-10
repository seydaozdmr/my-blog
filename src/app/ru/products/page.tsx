import { Metadata } from 'next'
import Link from 'next/link'
import { getAllServices } from '@/lib/mdUtils'
import { ProductList } from '@/app/products/ProductList'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Наши услуги',
  description: 'Профессиональная обрезка, удаление и уход за деревьями в Анталье. Сертифицированные ISA арбористы, работаем 24/7.',
  alternates: {
    canonical: 'https://antalyaagacbudama.com/ru/products',
    languages: {
      'tr': 'https://antalyaagacbudama.com/products',
      'en': 'https://antalyaagacbudama.com/en/products',
      'ru': 'https://antalyaagacbudama.com/ru/products',
      'x-default': 'https://antalyaagacbudama.com/products',
    },
  },
  openGraph: {
    title: 'Наши услуги | CrownPro',
    description: 'Профессиональная обрезка, удаление и уход за деревьями в Анталье.',
    url: 'https://antalyaagacbudama.com/ru/products',
    locale: 'ru_RU',
  },
}

export default async function RuProductsPage() {
  const services = await getAllServices('ru')

  return (
    <>
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/new_images/IMG_5501.jpeg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href="/ru" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={200} />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Мы предоставляем профессиональные услуги по уходу за деревьями, обрезке и ландшафтному
            дизайну по всей Анталье. Безопасность и качество — наши главные приоритеты в каждом проекте.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <ProductList services={services} locale="ru" basePath="/ru" />
        </div>
      </section>

      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Хотите узнать больше о наших услугах?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Звоните сейчас для бесплатного выезда и расчёта стоимости.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905511672228"
              className="bg-white text-green-700 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-all duration-300 text-lg"
            >
              +90 551 167 22 28
            </a>
            <Link
              href="/ru/contact"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-lg"
            >
              Написать нам
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
