import Link from 'next/link'
import Image from 'next/image'
import { IServiceCard } from '@/types/services'

export function ServiceCard({ title, description, image, slug }: IServiceCard) {
  return (
    <Link 
      href={`/services/${slug}`}
      className="group block"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}