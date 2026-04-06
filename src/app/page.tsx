import { getAllServices } from '@/lib/mdUtils'
import Link from 'next/link'

export default async function Home() {
  const services = await getAllServices()
  const heroImage =
    services[0]?.image ||
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80'

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-base">
              AĞAÇ BUDAMA | PALMİYE BAKIMI | AĞAÇ KESİM HİZMETLERİ
            </p>

            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
              Antalya’nın Profesyonel Ağaç Budama ve Palmiye Bakım Ekibi
            </h1>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block bg-[#0B4B3A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#08372B] md:px-10 md:py-5"
              >
                Ücretsiz Keşif Talep Et
              </Link>

              <Link
                href="/products"
                className="inline-block border border-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black md:px-10 md:py-5"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
            Hizmetlerimiz
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/products#${service.slug}`}
                className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="line-clamp-3 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
