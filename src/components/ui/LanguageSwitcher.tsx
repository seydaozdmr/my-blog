'use client'

import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const isEn = pathname.startsWith('/en')
  const isRu = pathname.startsWith('/ru')
  const isTr = !isEn && !isRu

  const basePath = isEn ? pathname.replace(/^\/en/, '') || '/'
    : isRu ? pathname.replace(/^\/ru/, '') || '/'
    : pathname

  function switchTo(locale: 'tr' | 'en' | 'ru') {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`
    if (locale === 'tr') router.push(basePath)
    else router.push(`/${locale}${basePath === '/' ? '' : basePath}`)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 shadow-lg text-sm font-semibold">
      <button
        onClick={() => switchTo('tr')}
        className={`px-2 py-0.5 rounded-full transition-colors ${isTr ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-gray-700'}`}
        aria-label="Türkçe"
      >
        TR
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchTo('en')}
        className={`px-2 py-0.5 rounded-full transition-colors ${isEn ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-gray-700'}`}
        aria-label="English"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchTo('ru')}
        className={`px-2 py-0.5 rounded-full transition-colors ${isRu ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-gray-700'}`}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  )
}
