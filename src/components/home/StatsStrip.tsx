'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import { getT, Locale } from '@/lib/translations'

interface StatsStripProps {
  locale?: Locale
}

export function StatsStrip({ locale = 'tr' }: StatsStripProps) {
  const t = getT(locale)

  const stats = [
    { number: '10+', label: t.stats.experience },
    { number: '500+', label: t.stats.projects },
    { number: '7/24', label: t.stats.emergency },
    { number: '100%', label: t.stats.satisfaction },
  ]

  return (
    <section className="py-16 bg-green-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <FadeInSection key={idx} delay={idx * 0.1} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/75 text-sm uppercase tracking-wider">{stat.label}</div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
