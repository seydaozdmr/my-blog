'use client'

import { useState, useEffect } from 'react'
import { IService } from '@/types/service'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

interface HeroSliderProps {
  services: IService[]
}

export function HeroSlider({ services }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % services.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [services.length])

  const current = services[currentIndex]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {services.map((service, idx) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: idx === currentIndex ? 1 : 0 }}
        >
          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="100vw"
              priority={idx === 0}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Logo variant="light" width={260} />
          </Link>
          <span className="inline-block text-sm font-semibold tracking-[0.3em] uppercase text-green-300 mb-5">
            Antalya &bull; Profesyonel Ağaç Bakımı
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            {current.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {current.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-xl text-lg"
            >
              Ucretsiz Teklif Al
            </Link>
            <Link
              href="/products"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-green-800 font-bold py-4 px-12 rounded-full transition-all duration-300 text-lg"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slayt ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-10 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 right-10 z-30 flex flex-col items-center gap-2 text-white/50 hidden md:flex">
        <span className="text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}
