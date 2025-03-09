import { HeroSlider } from '@/components/hero/HeroSlider'
import { getAllServices } from '@/lib/mdUtils'
import Link from 'next/link'

export default async function Home() {
  const services = await getAllServices()

  return (
    <main className="min-h-screen">
      <HeroSlider services={services} />
      
      {/* İsteğe bağlı: Slider altında diğer içerikler */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Tüm Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center transform 
                            group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 line-clamp-2">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}