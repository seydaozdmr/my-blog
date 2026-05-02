import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'
import { FadeInSection } from '@/components/ui/FadeInSection'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'CrownPro ile iletişime geçin. Ücretsiz keşif ve fiyat teklifi için hemen arayın.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/blog-4.jpg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link
            href="/"
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-green-400 mb-4 hover:text-green-300 transition-colors"
          >
            CrownPro
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">İletişim</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin.
            Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Breadcrumb */}
          <FadeInSection>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
              <Link href="/" className="hover:text-green-600 transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Ana Sayfa
              </Link>
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-gray-700 font-medium">İletişim</span>
            </nav>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sol: İletişim bilgileri */}
            <div className="lg:col-span-1 space-y-6">
              <FadeInSection direction="left">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>

                  <div className="space-y-6">
                    {/* Telefon */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Telefon</p>
                        <a href="tel:+905511672228" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                          +90 (551) 167 22 28
                        </a>
                      </div>
                    </div>

                    {/* E-posta */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">E-posta</p>
                        <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-600 hover:text-green-700 font-medium transition-colors text-sm break-all">
                          ruzgarozdemir@crownprotr.com
                        </a>
                      </div>
                    </div>

                    {/* Adres */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Adres</p>
                        <p className="text-gray-500 text-sm">
                          Muratpaşa, Antalya<br />
                          Antalya, Türkiye
                        </p>
                      </div>
                    </div>

                    {/* Çalışma Saatleri */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Çalışma Saatleri</p>
                        <p className="text-gray-500 text-sm">
                          Pazartesi - Pazar<br />
                          08:00 - 18:00
                        </p>
                        <p className="text-green-600 text-xs font-semibold mt-1">
                          Acil durumlar için 7/24
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Hızlı arama butonu */}
              <FadeInSection direction="left" delay={0.15}>
                <a
                  href="tel:+905511672228"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg w-full text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Hemen Ara
                </a>
              </FadeInSection>
            </div>

            {/* Sağ: Form */}
            <div className="lg:col-span-2">
              <FadeInSection direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Ücretsiz Teklif Al</h2>
                  <p className="text-gray-500 mb-8">
                    Formu doldurun, size en kısa sürede dönüş yapalım.
                  </p>
                  <ContactForm />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
