import { Metadata } from 'next'
import Link from 'next/link'
import { getAllServices } from '@/lib/mdUtils'
import { ProductList } from '@/app/products/ProductList'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional tree pruning, removal and care services in Antalya. ISA-certified arborists, 24/7 availability.',
  alternates: {
    canonical: 'https://antalyaagacbudama.com/en/products',
    languages: {
      'tr': 'https://antalyaagacbudama.com/products',
      'en': 'https://antalyaagacbudama.com/en/products',
      'x-default': 'https://antalyaagacbudama.com/products',
    },
  },
  openGraph: {
    title: 'Our Services | CrownPro',
    description: 'Professional tree pruning, removal and care services in Antalya.',
    url: 'https://antalyaagacbudama.com/en/products',
    locale: 'en_US',
  },
}

export default async function EnProductsPage() {
  const services = await getAllServices('en')

  return (
    <>
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/new_images/IMG_5501.jpeg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <Link href="/en" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={200} />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            We provide professional tree care, pruning and landscaping services throughout Antalya.
            Safety and quality are our top priorities on every project.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f2ed] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <ProductList services={services} locale="en" basePath="/en" />
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
