'use client'

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'

export function LocaleFooter() {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')
  return <Footer locale={isEn ? 'en' : 'tr'} basePath={isEn ? '/en' : ''} />
}
