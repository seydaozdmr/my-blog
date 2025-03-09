'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { IService } from '@/types/service'
import Link from 'next/link'

interface HeroSliderProps {
  services: IService[]
}

export function HeroSlider({ services }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 })
  const [scrollPosition, setScrollPosition] = useState(0)

  const ITEM_HEIGHT = 92
  const ITEM_MARGIN = 8
  const VISIBLE_ITEMS = 3
  const CONTAINER_HEIGHT = (ITEM_HEIGHT + ITEM_MARGIN) * VISIBLE_ITEMS

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const calculateScrollPosition = useCallback((index: number) => {
    if (index >= VISIBLE_ITEMS) {
      const position = -((index - (VISIBLE_ITEMS - 1)) * (ITEM_HEIGHT + ITEM_MARGIN))
      const maxScroll = -((services.length - VISIBLE_ITEMS) * (ITEM_HEIGHT + ITEM_MARGIN))
      return Math.max(maxScroll, position)
    }
    return 0
  }, [ITEM_HEIGHT, ITEM_MARGIN, VISIBLE_ITEMS, services.length])

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length
      
      if (nextIndex === 0) {
        setDirection(-1)
        setScrollPosition(0)
        setVisibleRange({ start: 0, end: VISIBLE_ITEMS })
      } else {
        setDirection(1)
        if (nextIndex >= VISIBLE_ITEMS) {
          const newScrollPosition = calculateScrollPosition(nextIndex)
          setScrollPosition(newScrollPosition)
          setVisibleRange({
            start: nextIndex - (VISIBLE_ITEMS - 1),
            end: nextIndex + 1
          })
        }
      }
      
      setCurrentIndex(nextIndex)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex, services.length, calculateScrollPosition])

  const handleSliderScroll = (direction: 'up' | 'down') => {
    if (direction === 'up' && visibleRange.start > 0) {
      setVisibleRange(prev => ({
        start: prev.start - 1,
        end: prev.end - 1
      }))
      const newPosition = scrollPosition + (ITEM_HEIGHT + ITEM_MARGIN)
      setScrollPosition(Math.min(0, newPosition))
    } else if (direction === 'down' && visibleRange.end < services.length) {
      setVisibleRange(prev => ({
        start: prev.start + 1,
        end: prev.end + 1
      }))
      const newPosition = scrollPosition - (ITEM_HEIGHT + ITEM_MARGIN)
      const maxScroll = -((services.length - VISIBLE_ITEMS) * (ITEM_HEIGHT + ITEM_MARGIN))
      setScrollPosition(Math.max(maxScroll, newPosition))
    }
  }

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.y < -swipeThreshold && visibleRange.end < services.length) {
      handleSliderScroll('down')
    } else if (info.offset.y > swipeThreshold && visibleRange.start > 0) {
      handleSliderScroll('up')
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${services[currentIndex].image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full">
        <div className="container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {services[currentIndex].title}
            </h1>
            <p className="text-xl mb-8">{services[currentIndex].description}</p>
            <Link
              href={`/services/${services[currentIndex].slug}`}
              className="inline-block bg-white text-black px-8 py-3 rounded-lg 
                        font-semibold hover:bg-opacity-90 transition-all"
            >
              Detaylı Bilgi
            </Link>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 
                      bg-white/10 backdrop-blur-sm p-4 rounded-l-lg 
                      max-w-md">
          {visibleRange.start > 0 && (
            <button 
              onClick={() => handleSliderScroll('up')} 
              className="w-full text-white hover:bg-white/20 rounded-lg p-2 mb-2"
            >
              ↑
            </button>
          )}

          <div 
            className="overflow-hidden" 
            style={{ height: CONTAINER_HEIGHT }}
          >
            {scrollPosition < 0 && (
              <button 
                onClick={() => handleSliderScroll('up')} 
                className="w-full text-white hover:bg-white/20 rounded-lg p-2 mb-2"
              >
                ↑
              </button>
            )}

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
                y: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
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
                  className={`cursor-pointer p-4 transition-all ${
                    idx === currentIndex
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white/20'
                  } rounded-lg`}
                  style={{ height: ITEM_HEIGHT }}
                >
                  <h3 className="text-sm font-medium">{service.title}</h3>
                  <p className="text-xs mt-1 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {visibleRange.end < services.length && (
            <button 
              onClick={() => handleSliderScroll('down')} 
              className="w-full text-white hover:bg-white/20 rounded-lg p-2 mt-2"
            >
              ↓
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 