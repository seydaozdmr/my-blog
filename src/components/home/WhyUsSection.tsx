'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import { FaShieldAlt, FaClock, FaLeaf, FaHandshake } from 'react-icons/fa'
import { getT, Locale } from '@/lib/translations'

const icons = [FaShieldAlt, FaClock, FaLeaf, FaHandshake]

interface WhyUsSectionProps {
  locale?: Locale
}

export function WhyUsSection({ locale = 'tr' }: WhyUsSectionProps) {
  const t = getT(locale)

  return (
    <section className="py-24 bg-[#1a2e1a] text-white">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <span className="text-green-400 font-semibold tracking-widest uppercase text-sm">
            {t.whyUs.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">{t.whyUs.title}</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">{t.whyUs.subtitle}</p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyUs.reasons.map((item, idx) => {
            const Icon = icons[idx]
            return (
              <FadeInSection key={idx} delay={idx * 0.12} direction="up">
                <div className="text-center p-8 rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-white/5 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
