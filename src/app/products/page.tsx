import { Metadata } from 'next'

import { getServices } from '@/lib/services'
import { ProductList } from './ProductList'
import { getAllServices } from '@/lib/mdUtils'

interface Service {
  id: string
  title?: string
  description?: string
  content: string
  image?: string
}

export const metadata: Metadata = {
  title: 'Ürünlerimiz',
  description: 'Sunduğumuz ürün ve hizmetler hakkında detaylı bilgi'
}

export default async function ProductsPage() {
  const services = await getAllServices()
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Ürünlerimiz</h1>
        <ProductList services={services} />
      </div>
    </section>
  )
}