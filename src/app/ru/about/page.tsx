import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'О нас',
  description: 'CrownPro — профессиональная команда по уходу за деревьями из сертифицированных ISA арбористов, базирующаяся в Анталье.',
  alternates: {
    canonical: 'https://antalyaagacbudama.com/ru/about',
    languages: {
      'tr': 'https://antalyaagacbudama.com/about',
      'en': 'https://antalyaagacbudama.com/en/about',
      'ru': 'https://antalyaagacbudama.com/ru/about',
      'x-default': 'https://antalyaagacbudama.com/about',
    },
  },
  openGraph: {
    title: 'О нас | CrownPro',
    description: 'Сертифицированные ISA арбористы — профессиональный уход за деревьями в Анталье.',
    url: 'https://antalyaagacbudama.com/ru/about',
    locale: 'ru_RU',
  },
}

const VALUES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.075 12.367c-.024.287-.036.577-.036.87 0 6.627 5.373 12 12 12s12-5.373 12-12c0-.293-.012-.583-.036-.87A11.955 11.955 0 0120.4 6a11.959 11.959 0 01-5.399-1.786M9 3.75l1.5 1.5" />
      </svg>
    ),
    title: 'Безопасность прежде всего',
    desc: 'Мы полностью соблюдаем протоколы безопасности ISA и ANSI в каждом проекте. Наша команда и ваше окружение всегда под защитой.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
    title: 'Сертифицированная экспертиза',
    desc: 'Наши сертифицированные ISA арбористы понимают биологию деревьев и управление рисками на академическом уровне.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Уважение к природе',
    desc: 'Перед вмешательством мы оцениваем биологию дерева, его сезонный цикл и роль в экосистеме. Мы избегаем лишних вмешательств.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Ориентированность на клиента',
    desc: 'Перед каждым проектом мы проводим бесплатный выезд, уточняем ожидания и информируем вас на каждом этапе работы.',
  },
]

const STATS = [
  { value: '500+', label: 'Завершённых проектов' },
  { value: '10+', label: 'Лет опыта' },
  { value: '24/7', label: 'Экстренная служба' },
  { value: '100%', label: 'Удовлетворённость клиентов' },
]

export default function RuAboutPage() {
  return (
    <>
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/new_images/IMG_1612.jpeg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href="/ru" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={180} />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">О нас</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Профессиональный уход за деревьями с сертифицированными ISA арбористами в Анталье.
            Безопасность, качество и уважение к природе — основа каждого нашего проекта.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="grid grid-cols-2 gap-3 h-[440px]">
              <div className="relative rounded-2xl overflow-hidden shadow-lg col-span-2 h-64">
                <Image src="/new_images/IMG_2053.jpeg" alt="Арборист CrownPro на объекте" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[center_30%]" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow">
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-0.5">ISA Сертификат</p>
                  <p className="text-sm font-bold text-gray-900">Команда арбористов</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/new_images/IMG_1446.png" alt="Обрезка пальм" fill sizes="25vw" className="object-cover object-[center_20%]" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/new_images/IMG_0108.png" alt="Уход за пальмами с помощью техники лазания" fill sizes="25vw" className="object-cover object-center" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-4">
                  Кто мы?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Наука и мастерство в <span className="text-green-700">уходе за деревьями</span>
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>CrownPro — профессиональная команда по уходу за деревьями из сертифицированных ISA (International Society of Arboriculture) арбористов, базирующаяся в Анталье. Мы не просто спиливаем деревья — мы оцениваем их биологию, профиль рисков и долгосрочное здоровье.</p>
                <p>Мы работаем с использованием техник высотного лазания — без кранов — применяя экологичные подходы. От деревьев вблизи линий электропередач до крупных деревьев в стеснённых условиях — мы безопасно выполняем самые сложные проекты.</p>
                <p>Мы применяем международные стандарты арборикультуры в каждом проекте, включая модель CODIT. Мы принимаем правильные решения сегодня ради будущего ваших деревьев.</p>
              </div>
              <div className="pt-4">
                <Link href="/ru/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                  Запросить бесплатный выезд
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.value}</div>
                <div className="text-white/70 text-sm font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-4">Наша рабочая философия</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ценности, которые нас отличают</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-5 bg-[#f5f2ed] rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-600/10 text-green-700 rounded-xl flex items-center justify-center flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Доверьте ваши деревья надёжным рукам</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Свяжитесь с нами сейчас для бесплатного выезда и расчёта стоимости.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905511672228" className="bg-white text-green-700 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-all duration-300 text-lg">+90 551 167 22 28</a>
            <Link href="/ru/contact" className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-lg">Написать нам</Link>
          </div>
        </div>
      </section>
    </>
  )
}
