'use client'

import { FadeInSection } from '@/components/ui/FadeInSection'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

export function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/blog-3.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#1a2e1a]/85" />

      <div className="relative z-10 container mx-auto px-6">
        <FadeInSection className="text-center text-white">
          <span className="inline-block text-green-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Hemen İletişime Geçin
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ağacınız İçin<br />Profesyonel Yardım
          </h2>
          <p className="text-white/70 text-xl mb-10 max-w-lg mx-auto">
            Ücretsiz keşif ve fiyat teklifi için hemen arayın.
            Antalya geneline 7/24 hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+905511672228"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-xl text-lg"
            >
              <FaPhone />
              +90 551 167 22 28
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/60 text-white hover:bg-white hover:text-green-800 font-bold py-5 px-12 rounded-full transition-all duration-300 text-lg"
            >
              Mesaj Gönder
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
