import { getServiceBySlug, getAllServices } from '../../../lib/mdUtils'
import type { Metadata } from 'next'

type Props =  Promise<{
  params: { slug: string }
}>

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
    <article className="container">
      <h1>{service.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: service.content }} />
    </article>
  )
} 