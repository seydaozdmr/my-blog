import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { getAllServices, getServiceBySlug } from '@/lib/mdUtils'
import { Logo } from '@/components/ui/Logo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getAllServices('en')
  return services
    .filter((s) => !s.comingSoon)
    .map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const service = await getServiceBySlug(slug, 'en')
    const url = `https://antalyaagacbudama.com/en/products/${slug}`
    return {
      title: service.title,
      description: service.description,
      alternates: {
        canonical: url,
        languages: {
          'tr': `https://antalyaagacbudama.com/products/${slug}`,
          'en': url,
          'x-default': `https://antalyaagacbudama.com/products/${slug}`,
        },
      },
      openGraph: {
        title: `${service.title} | CrownPro`,
        description: service.description,
        url,
        locale: 'en_US',
        alternateLocale: ['tr_TR'],
        images: service.image
          ? [{ url: `https://antalyaagacbudama.com${service.image}`, width: 1200, height: 630, alt: service.title }]
          : [],
      },
    }
  } catch {
    return { title: 'Service' }
  }
}

export default async function EnServicePage({ params }: Props) {
  const { slug } = await params

  let service
  try {
    service = await getServiceBySlug(slug, 'en')
  } catch {
    notFound()
  }

  if (service.comingSoon) notFound()

  const htmlContent = await marked.parse(service.content || '')

  return (
    <>
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        {service.image && (
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }} />
        )}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href="/en" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={180} />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            {service.title}
          </h1>
          {service.description && (
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          )}
        </div>
      </section>

      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
            <Link href="/en" className="hover:text-green-600 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/en/products" className="hover:text-green-600 transition-colors">
              Our Services
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-gray-700 font-medium">{service.title}</span>
          </nav>

          {service.image && (
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                style={{ objectFit: 'cover', objectPosition: service.imagePosition ?? 'center' }}
                priority
              />
            </div>
          )}

          <article className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-strong:text-gray-800
                prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/en/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 text-sm"
              >
                Get a Quote for This Service
              </Link>
              <a
                href="tel:+905511672228"
                className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
            </div>
          </article>

          <div className="mt-10 text-center">
            <Link
              href="/en/products"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Would You Like to Learn More About Our Services?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Call us now for a free site visit and price quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905511672228"
              className="bg-white text-green-700 font-bold py-4 px-10 rounded-full hover:bg-green-50 transition-all duration-300 text-lg"
            >
              +90 551 167 22 28
            </a>
            <Link
              href="/en/contact"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-lg"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
