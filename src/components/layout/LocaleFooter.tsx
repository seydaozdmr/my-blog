'use client'

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'

export function LocaleFooter() {
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/ru') ? 'ru' : 'tr'
  const basePath = locale === 'tr' ? '' : `/${locale}`
  return <Footer locale={locale} basePath={basePath} />
}
