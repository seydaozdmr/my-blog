import { Metadata } from 'next'

import { ProductList } from './ProductList'
import { getAllServices } from '@/lib/mdUtils'
import { PageSEO } from '@/components/SEO/PageSEO'


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