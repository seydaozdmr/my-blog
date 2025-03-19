'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion,  PanInfo } from 'framer-motion'
import { IService } from '@/types/service'
import Link from 'next/link'
import Image from 'next/image'

interface HeroSliderProps {
  services: IService[]
}

export function HeroSlider({ services }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const ITEM_HEIGHT = 100
  const ITEM_MARGIN = 8
  const VISIBLE_ITEMS = 3
  const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS + ITEM_MARGIN * (VISIBLE_ITEMS - 1)

  const calculateScrollPosition = useCallback((index: number) => {
    if (index >= VISIBLE_ITEMS) {
      return -((index - VISIBLE_ITEMS + 1) * (ITEM_HEIGHT + ITEM_MARGIN))
    }
    return 0
  }, [ITEM_HEIGHT, ITEM_MARGIN, VISIBLE_ITEMS])

  const handleDrag = (event: any, info: PanInfo) => {
    const newPosition = scrollPosition + info.offset.y
    const maxScroll = -((services.length - VISIBLE_ITEMS) * (ITEM_HEIGHT + ITEM_MARGIN))
    setScrollPosition(Math.max(maxScroll, Math.min(0, newPosition)))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length
      console.log(direction);
      if (nextIndex === 0) {
        setDirection(-1)
        setScrollPosition(0)
      } else {
        setDirection(1)
        setScrollPosition(calculateScrollPosition(nextIndex))
      }
      
      setCurrentIndex(nextIndex)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex, services.length, calculateScrollPosition])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <div className="absolute inset-0 z-0">
        {services.map((service, idx) => (
          <motion.div
            key={`bg-${service.id}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: idx === currentIndex ? 1 : 0,
              scale: idx === currentIndex ? 1 : 1.1 
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {service.image && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="100vw"
                priority={idx === 0}
                quality={95}
                style={{ 
                  objectFit: 'cover',
                }}
                className="w-full h-full"
              />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-xl backdrop-blur-sm bg-black/30 p-8 rounded-lg">
            <div className="text-white mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-4"
              >
                {services[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl"
              >
                {services[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 
                    bg-black/60 backdrop-blur-sm p-4 rounded-l-lg 
                    max-w-md z-30">
        <div 
          className="overflow-hidden" 
          style={{ height: CONTAINER_HEIGHT }}
        >
          <motion.div
            drag="y"
            dragConstraints={{ 
              top: -((services.length - VISIBLE_ITEMS) * (ITEM_HEIGHT + ITEM_MARGIN)), 
              bottom: 0 
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDrag={handleDrag}
            animate={{
              y: scrollPosition
            }}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 }
            }}
            className="space-y-2"
          >
            {services.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                  setScrollPosition(calculateScrollPosition(idx))
                }}
                className={`cursor-pointer p-4 transition-all h-[100px] ${
                  idx === currentIndex
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-gray-700'
                } rounded-lg`}
              >
                <h3 className="text-sm font-medium mb-2">{service.title}</h3>
                <p className="text-xs line-clamp-2">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 