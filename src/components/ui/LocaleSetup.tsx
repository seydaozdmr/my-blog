'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function LocaleSetup() {
  const pathname = usePathname()
  useEffect(() => {
    const lang = pathname.startsWith('/en') ? 'en'
      : pathname.startsWith('/ru') ? 'ru'
      : 'tr'
    document.documentElement.lang = lang
  }, [pathname])
  return null
}
