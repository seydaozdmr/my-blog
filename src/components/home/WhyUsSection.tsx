'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import { FaShieldAlt, FaClock, FaLeaf, FaHandshake } from 'react-icons/fa'

const reasons = [
  {
    icon: FaShieldAlt,
    title: 'Tam Sigortalı',
    desc: 'Tüm ekibimiz ve işlemlerimiz tam sigorta kapsamındadır. Güvenli çalışma garantisi veriyoruz.',
  },
  {
    icon: FaClock,
    title: '7/24 Acil Hizmet',
    desc: 'Fırtına veya acil durumlarda 7 gün 24 saat yanınızdayız, gecikme olmadan müdahale ediyoruz.',
  },
  {
    icon: FaLeaf,
    title: 'Çevre Dostu',
    desc: 'Doğaya saygılı yöntemlerle çalışır, her müdahalede çevresel etkiyi minimize ederiz.',
  },
  {
    icon: FaHandshake,
    title: 'Şeffaf Fiyatlandırma',
    desc: 'Gizli ücret yok. İşe başlamadan önce net fiyat teklifi sunuyor, sözümüzün arkasında duruyoruz.',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-[#1a2e1a] text-white">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <span className="text-green-400 font-semibold tracking-widest uppercase text-sm">
            Neden CrownPro?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Farkımız Nedir</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Antalya&apos;nın en güvenilir ağaç bakım ekibi olarak, her projede mükemmeliyeti hedefliyoruz.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <FadeInSection key={idx} delay={idx * 0.12} direction="up">
              <div className="text-center p-8 rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-white/5 transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
