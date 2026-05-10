'use client'

import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const isEn = pathname.startsWith('/en')

  function switchTo(locale: 'tr' | 'en') {
    if (locale === 'en') {
      const enPath = isEn ? pathname : `/en${pathname}`
      document.cookie = 'NEXT_LOCALE=en; path=/; max-age=31536000'
      router.push(enPath)
    } else {
      const trPath = isEn ? pathname.replace(/^\/en/, '') || '/' : pathname
      document.cookie = 'NEXT_LOCALE=tr; path=/; max-age=31536000'
      router.push(trPath)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 shadow-lg text-sm font-semibold">
      <button
        onClick={() => switchTo('tr')}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          !isEn ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-gray-700'
        }`}
        aria-label="Türkçe"
      >
        TR
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchTo('en')}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          isEn ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-gray-700'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
