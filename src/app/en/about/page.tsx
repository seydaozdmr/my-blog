import { getAlternates, socialImages } from '@/lib/i18n'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageMasthead, ContactBand } from '@/components/layout/PageMasthead'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CrownPro is a professional tree care team of ISA-certified arborists based in Antalya. Safety, quality and respect for nature are our priorities.',
  alternates: getAlternates('en', '/about'),
  openGraph: {
    images: socialImages('en'),
    title: 'About Us | CrownPro',
    description:
      'ISA-certified arborists delivering professional tree care in Antalya. Safety and quality first.',
    url: 'https://antalyaagacbudama.com/en/about',
    locale: 'en_US',
  },
}

const VALUES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.075 12.367c-.024.287-.036.577-.036.87 0 6.627 5.373 12 12 12s12-5.373 12-12c0-.293-.012-.583-.036-.87A11.955 11.955 0 0120.4 6a11.959 11.959 0 01-5.399-1.786M9 3.75l1.5 1.5" />
      </svg>
    ),
    title: 'Safety First',
    desc: 'We fully apply ISA and ANSI safety protocols on every project. Our team and your surroundings are always protected.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
    title: 'Certified Expertise',
    desc: 'Our ISA (International Society of Arboriculture) certified arborists understand tree biology and risk management at an academic level.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Respect for Nature',
    desc: "Before intervening, we evaluate the tree's biology, seasonal cycle and role in the ecosystem. We avoid unnecessary interventions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Client-Focused',
    desc: 'We carry out a free site visit before every project, clarify expectations, and keep you informed at every stage of the work.',
  },
]

const STATS = [
  { value: '500+', label: 'Completed Projects' },
  { value: '10+', label: 'Years of Experience' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function EnAboutPage() {
  return (
    <>
      <PageMasthead locale="en" section="about" title="About Us" image="/new_images/IMG_1378.webp" position="50% 62%">
        Professional tree care with ISA-certified arborists in Antalya. Safety, quality and respect for nature are the foundation of every project.
      </PageMasthead>

      <section className="about-section py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="grid grid-cols-2 gap-3 h-[440px]">
              <div className="relative overflow-hidden col-span-2 h-64">
                <Image
                  src="/new_images/IMG_2053.webp"
                  alt="CrownPro arborist working on-site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_30%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow">
                  <p className="text-xs font-semibold text-[#466447] uppercase tracking-wider mb-0.5">ISA Certified</p>
                  <p className="text-sm font-bold text-gray-900">Arborist Team</p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/new_images/IMG_1446.webp"
                  alt="Palm tree pruning work"
                  fill
                  sizes="25vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/new_images/IMG_0108.webp"
                  alt="Palm care with climbing techniques"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block page-kicker mb-4">
                  Who We Are
                </span>
                <h2 className="editorial-heading mb-6 leading-tight">
                  Science and Mastery in <span className="text-[#466447]">Tree Care</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CrownPro is a professional tree care team of ISA (International Society of
                  Arboriculture) certified arborists based in Antalya. We don&apos;t just cut trees —
                  we evaluate their biology, risk profile and long-term health.
                </p>
                <p>
                  We work using high-altitude climbing techniques — no cranes required — with
                  eco-friendly approaches. From trees near power lines to large trees in confined
                  spaces, we safely complete the most challenging projects.
                </p>
                <p>
                  We apply international arboriculture standards on every project, including the
                  CODIT (Compartmentalization of Decay in Trees) model. We make the right decisions
                  today for the future of your trees.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/en/contact"
                  className="inline-flex items-center gap-2 bg-[#172c22] hover:bg-[#294832] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Request a Free Site Visit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-facts py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-5xl md:text-6xl text-[#ffd197] mb-2">{s.value}</div>
                <div className="text-white/70 text-sm font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14">
            <span className="inline-block page-kicker mb-4">
              Our Working Philosophy
            </span>
            <h2 className="editorial-heading">
              The Values That Set Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 border-t border-[#bdc5b6] py-7"
              >
                <div className="w-14 h-14 bg-[#e4e6d7] text-[#466447] rounded-xl flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="border-t border-[#bdc5b6] pt-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-[#e4e6d7] text-[#466447] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h2 className="editorial-heading mb-2">
                  Why a Certified Arborist?
                </h2>
                <p className="text-[#466447] font-medium text-sm">ISA · ANSI A300 · CODIT</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Operations that look like simple tree cutting are actually part of a complex
                biological process. An incorrectly performed pruning can leave a tree vulnerable
                to decay, insect infestation, and structural failure. A certified arborist knows
                the difference.
              </p>
              <p>
                ISA certification requires comprehensive training and examination in tree biology,
                soil science, disease diagnosis, safe climbing, and risk assessment. This standard
                ensures that what is protected is not just what is cut today, but what lives tomorrow.
              </p>
              <p>
                Our team keeps up with current arboriculture knowledge through continuous training.
                It is our responsibility to provide the best intervention for your tree, using the
                safest method available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBand locale="en" title="Let Your Trees Be in Safe Hands" message="Send a Message">
        Get in touch now for a free site visit and price quote.
      </ContactBand>
    </>
  )
}
