import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    "CrownPro, Antalya'da faaliyet gösteren ISA sertifikalı arboristlerden oluşan profesyonel ağaç bakımı ve tırmanıcılık ekibidir. Güvenlik, kalite ve doğaya saygı önceliğimizdir.",
  alternates: {
    canonical: 'https://antalyaagacbudama.com/about',
    languages: {
      'tr': 'https://antalyaagacbudama.com/about',
      'en': 'https://antalyaagacbudama.com/about',
      'ru': 'https://antalyaagacbudama.com/about',
      'x-default': 'https://antalyaagacbudama.com/about',
    },
  },
  openGraph: {
    title: 'Hakkımızda | CrownPro',
    description:
      "Antalya'da ISA sertifikalı arboristlerle profesyonel ağaç bakımı hizmeti. Güvenlik ve kalite önceliğimizdir.",
    url: 'https://antalyaagacbudama.com/about',
  },
}

const VALUES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.075 12.367c-.024.287-.036.577-.036.87 0 6.627 5.373 12 12 12s12-5.373 12-12c0-.293-.012-.583-.036-.87A11.955 11.955 0 0120.4 6a11.959 11.959 0 01-5.399-1.786M9 3.75l1.5 1.5" />
      </svg>
    ),
    title: 'Güvenlik Önce',
    desc: 'Her projede ISA ve ANSI standartlarına uygun güvenlik protokollerini eksiksiz uyguluyoruz. Ekibimiz ve çevreniz her zaman koruma altında.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
    title: 'Sertifikalı Uzmanlık',
    desc: 'ISA (International Society of Arboriculture) sertifikalı arboristlerimiz, ağaç biyolojisini ve risk yönetimini akademik temelde biliyor.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Doğaya Saygı',
    desc: 'Müdahale etmeden önce ağacın biyolojisini, mevsimsel döngüsünü ve ekosistemdeki rolünü değerlendiriyoruz. Gereksiz müdahaleden kaçınıyoruz.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Müşteri Odaklılık',
    desc: 'Her proje başlamadan ücretsiz keşif yapıyor, beklentileri netleştiriyor ve işin her aşamasında sizi bilgilendiriyoruz.',
  },
]

const STATS = [
  { value: '500+', label: 'Tamamlanan Proje' },
  { value: '10+', label: 'Yıllık Deneyim' },
  { value: '7/24', label: 'Acil Hizmet' },
  { value: '%100', label: 'Müşteri Memnuniyeti' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/blog-3.jpg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={180} />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Antalya&apos;da ISA sertifikalı arboristlerle profesyonel ağaç bakımı. Güvenlik, kalite ve
            doğaya saygı her projemizin temelidir.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about2.jpg"
                alt="CrownPro ekibi çalışırken"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow">
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-0.5">ISA Sertifikalı</p>
                <p className="text-sm font-bold text-gray-900">Arborist Ekibi</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-4">
                  Biz Kimiz?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Ağaç Bakımında <span className="text-green-700">Bilim ve Ustalık</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CrownPro, Antalya&apos;da faaliyet gösteren ISA (International Society of Arboriculture)
                  sertifikalı arboristlerden oluşan profesyonel ağaç bakımı ekibidir. Ağaçları sadece
                  kesmiyoruz — onların biyolojisini, risk profilini ve uzun vadeli sağlığını
                  değerlendiriyoruz.
                </p>
                <p>
                  Yüksek tırmanış tekniklerini kullanarak vinç gerektirmeyen, çevre dostu yaklaşımlarla
                  çalışıyoruz. Elektrik hatlarına yakın ağaçlardan dar alanlardaki büyük ağaçlara,
                  en zorlu projeleri güvenle tamamlıyoruz.
                </p>
                <p>
                  CODIT (Compartmentalization of Decay in Trees) modeli başta olmak üzere uluslararası
                  arboristlik standartlarını her projede uyguluyoruz. Ağacınızın geleceği için bugün
                  doğru kararları veriyoruz.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Ücretsiz Keşif Talep Et
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-4">
              Çalışma Felsefemiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bizi Farklı Kılan Değerler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 bg-[#f5f2ed] rounded-2xl p-7 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-green-600/10 text-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why arborist */}
      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl p-10 md:p-14 shadow-sm">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-green-600/10 text-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Neden Sertifikalı Arborist?
                </h2>
                <p className="text-green-700 font-medium text-sm">ISA · ANSI A300 · CODIT</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ağaç kesimi gibi görünen işlemler, aslında karmaşık bir biyolojik sürecin parçasıdır.
                Yanlış yapılan bir budama, ağacı çürümeye, böcek istilasına ve yapısal çöküşe karşı
                savunmasız bırakabilir. Sertifikalı bir arborist bu farkı bilir.
              </p>
              <p>
                ISA sertifikası; ağaç biyolojisi, toprak bilimi, hastalık teşhisi, güvenli tırmanış
                ve risk değerlendirmesi konularında kapsamlı eğitim ve sınav gerektirir. Bu standart,
                ağacınızın bugün kesilenin değil, yarın yaşayanın korunmasını güvence altına alır.
              </p>
              <p>
                Ekibimiz sürekli eğitimle güncel arboristlik bilgisini takip eder. Ağacınız için en
                doğru müdahaleyi, en güvenli yöntemle sunmak bizim sorumluluğumuzdur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ağaçlarınız Güvenli Ellerde Olsun
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905511672228"
              className="bg-white text-green-700 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-all duration-300 text-lg"
            >
              +90 551 167 22 28
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-lg"
            >
              Mesaj Gönder
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
