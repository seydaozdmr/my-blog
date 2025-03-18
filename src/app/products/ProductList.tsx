'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useMarkdownContent } from '@/hooks/useMarkdownContent'

interface Service {
  id: string
  title?: string
  description?: string
  content: string
  image?: string
  key: string
}

interface ProductListProps {
  services: Service[]
}

export function ProductList({ services }: ProductListProps) {
  const [selectedId, setSelectedId] = useState(services[0]?.id || '')
  const { htmlContent } = useMarkdownContent(
    services.find(s => s.id === selectedId)?.content || ''
  )

  const selectedService = services.find(s => s.id === selectedId)

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Soldaki Liste */}
      <div className="md:w-1/3 lg:w-1/4">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto">
            {services.map((service) => (
              <div id={service.key}
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`cursor-pointer p-4 transition-all ${
                  service.id === selectedId
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                <h3 className="text-sm font-medium mb-2">{service.title}</h3>
                <p className="text-xs line-clamp-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sağdaki İçerik */}
      <div className="md:w-2/3 lg:w-3/4">
        <AnimatePresence mode="wait">
          <motion.div
            id={selectedService?.key}
            key={selectedId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {selectedService?.image && (
              <div className="relative h-64 w-full">
                <Image
                  src={selectedService.image || ''}
                  alt={selectedService.title || ''}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedService?.title}</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}