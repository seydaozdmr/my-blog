import { Metadata } from 'next'
import Link from 'next/link'
import { getAllServices } from '@/lib/mdUtils'
import { ProductList } from './ProductList'
import { PageSEO } from '@/components/SEO/PageSEO'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Antalya\'da profesyonel ağaç budama, kesme ve bakım hizmetleri. Uzman ekibimizle 7/24 hizmetinizdeyiz.',
}

export default async function ProductsPage() {
  const services = await getAllServices()

  return (
    <>
      <PageSEO
        title="Ağaç Budama Hizmetleri"
        description="Antalya'da profesyonel ağaç budama ve kesme hizmetleri. Uzman ekibimizle 7/24 hizmetinizdeyiz."
        keywords={['ağaç budama', 'ağaç kesme', 'Antalya', 'antalya ağaç budama', 'antalya ağaç kesme', 'palmiye budama', 'kontrollü ağaç kesimi', 'acil durum ağaç kesimi']}
        canonical="https://antalyaagacbudama.com/products"
      />
      <Script id="ld-services" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Ağaç Budama ve Kesme',
          provider: { '@type': 'LocalBusiness', name: 'CrownPro' },
          areaServed: { '@type': 'City', name: 'Antalya' },
        })}
      </Script>

      {/* Hero Banner */}
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/blog-3.jpg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href="/" className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-green-400 mb-4 hover:text-green-300 transition-colors">
            CrownPro
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hizmetlerimiz</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Antalya genelinde profesyonel ağaç bakımı, budama ve peyzaj hizmetleri sunuyoruz.
            Her projede güvenlik ve kalite önceliğimizdir.
          </p>
        </div>
      </section>

      {/* Blog-style Service Articles */}
      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <ProductList services={services} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hizmetlerimiz Hakkında Bilgi Almak İster Misiniz?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Ücretsiz keşif ve fiyat teklifi için hemen bizi arayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905511672228"
              className="bg-white text-green-700 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-all duration-300 text-lg"
            >
              +90 551 167 22 28
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-lg"
            >
              Mesaj Gönder
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
