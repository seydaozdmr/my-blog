import { Metadata } from 'next'
import { getServiceBySlug, getAllServices } from '../../../lib/mdUtils'

export async function generateMetadata({ params }: { params: { slug: string } }) {
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


export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)
  return (
    <article className="container">
      <h1>{service.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: service.content }} />
    </article>
  )
}
