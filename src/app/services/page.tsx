import { getServiceBySlug, getAllServices } from '@/lib/mdUtils'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)
  return {
    title: service.title,
    description: service.description,
  }
}

export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: Props) {
  const service = await getServiceBySlug(params.slug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Ana Sayfaya Dön
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 sm:h-96">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: service.content }} 
          />
        </div>
      </div>
    </div>
  )
}