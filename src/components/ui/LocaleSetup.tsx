'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function LocaleSetup() {
  const pathname = usePathname()
  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/en') ? 'en' : 'tr'
  }, [pathname])
  return null
}
