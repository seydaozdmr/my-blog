'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import { IService } from '@/types/service'
import Image from 'next/image'
import Link from 'next/link'

export function ServicesSection({ services }: { services: IService[] }) {
  return (
    <section className="py-24 bg-[#f5f2ed]">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <span className="text-green-600 font-semibold tracking-widest uppercase text-sm">
            Ne Yapıyoruz
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Antalya genelinde profesyonel ağaç bakımı, budama ve peyzaj hizmetleri sunuyoruz.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <FadeInSection key={service.id} delay={idx * 0.1}>
              <Link href={`/products/${service.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        style={{ objectFit: 'cover', objectPosition: service.imagePosition ?? 'center' }}
                        className="group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">{service.description}</p>
                    <span className="text-green-600 font-semibold text-sm group-hover:underline">
                      Detaylı İncele →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4} className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-4 px-12 rounded-full transition-all duration-300"
          >
            Tüm Hizmetleri Gör
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}
