'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { getT, Locale } from '@/lib/translations'

interface AboutPreviewProps {
  locale?: Locale
  basePath?: string
}

export function AboutPreview({ locale = 'tr', basePath = '' }: AboutPreviewProps) {
  const t = getT(locale)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection direction="left">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about2.jpg"
                  alt="CrownPro Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-medium text-green-100">{t.about.experienceLabel}</div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <span className="text-green-600 font-semibold tracking-widest uppercase text-sm">
              {t.about.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              {t.about.title}<br />
              <span className="text-green-700">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>
            <ul className="space-y-4 mb-10">
              {t.about.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-green-600 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`${basePath}/about`}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.about.cta}
            </Link>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
