'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

const highlights = [
  'Sertifikalı arborist ve ağaç tırmanıcıları',
  'Özel ekipman ve yüksek tırmanış teknikleri',
  'Her projede çevre dostu yöntemler',
  'Antalya geneline kesintisiz hizmet',
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection direction="left">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about2.jpg"
                  alt="CrownPro Ekibi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-medium text-green-100">Yıllık Deneyim</div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <span className="text-green-600 font-semibold tracking-widest uppercase text-sm">
              Hakkımızda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Doğayla Uyumlu<br />Profesyonel Ekip
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Antalya bölgesinde faaliyet gösteren CrownPro ekibi, ağaç tırmanıcılığı ve peyzaj
              hizmetlerinde uzmanlaşmış, sertifikalı profesyonellerden oluşmaktadır. Güvenlik,
              kalite ve çevreye saygı her şeyimizin önünde gelir.
            </p>
            <ul className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-green-600 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Daha Fazla Bilgi
            </Link>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
