import { Metadata } from 'next'

import { ProductList } from './ProductList'
import { getAllServices } from '@/lib/mdUtils'
import { PageSEO } from '@/components/SEO/PageSEO'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Sunduğumuz ürün ve hizmetler hakkında detaylı bilgi'
}

export default async function ProductsPage() {
  const services = await getAllServices()
  
  return (
    <>
      <PageSEO
        title="Ağaç Budama Hizmetleri"
        description="Antalya'da profesyonel ağaç budama ve kesme hizmetleri. Uzman ekibimizle 7/24 hizmetinizdeyiz."
        keywords={['ağaç budama', 'ağaç kesme', 'Antalya', 'antalya agac', 'antalya budama', 'antalya agac budama', 'antalya agac kesme','antalya ağaç', 'antalya ağaç budama', 'antalya ağaç kesme' , 'ağaç bakımı', 'ağaç kesme hizmeti', 'ağaç budama hizmeti', 'ağaç kesme fiyatları', 'ağaç budama fiyatları', 'yuksek tirmanis', 'yuksek tirmanis budama', 'yuksek tirmanis kesme', 'yuksek tirmanis bakımı', 'yuksek tirmanis hizmeti', 'yuksek tirmanis fiyatları', 'yuksek tirmanis budama fiyatları', 'yuksek tirmanis kesme fiyatları', 'yuksek tirmanis bakımı fiyatları','tirmanis', 'tirmanis budama', 'tirmanis kesme', 'tirmanis bakımı', 'tirmanis hizmeti', 'tirmanis fiyatları', 'tirmanis budama fiyatları', 'tirmanis kesme fiyatları', 'tirmanis bakımı fiyatları']}
        canonical="https://antalyaagacbudama.com/products"
      />
      <Script id="ld-localbusiness" type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Antalya Ağaç Budama',
        url: 'https://antalyaagacbudama.com',
        image: 'https://antalyaagacbudama.com/og.jpg',
        telephone: '+90 551 167 22 28',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Antalya',
          addressRegion: 'TR-07',
          addressCountry: 'TR'
        },
        areaServed: ['Antalya', 'Kepez', 'Konyaaltı', 'Muratpaşa','Kemer','Alanya','Serik'],
        sameAs: ['https://maps.google.com/?cid=YOUR_CID']
      })}
      </Script>
      <Script id="ld-services" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Ağaç Budama ve Kesme',
          provider: { '@type': 'LocalBusiness', name: 'Antalya Ağaç Budama' },
          areaServed: { '@type': 'City', name: 'Antalya' }
        })}
      </Script>
      {/* Page content */}
    
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Hizmetlerimiz</h1>
          <ProductList services={services} />
        </div>
      </section>
    </>
  )
}