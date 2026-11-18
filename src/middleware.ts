import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getPathLocale, localePath } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const redirectTo = (locale: 'en' | 'ru') => {
    const url = request.nextUrl.clone()
    url.pathname = localePath(locale, pathname)
    return NextResponse.redirect(url)
  }

  // Already on a locale-prefixed path — set cookie and continue
  if (getPathLocale(pathname) !== 'tr') {
    const locale = getPathLocale(pathname)
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return response
  }

  // Check explicit cookie preference first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale === 'tr') return NextResponse.next()
  if (cookieLocale === 'en' || cookieLocale === 'ru') {
    return redirectTo(cookieLocale)
  }

  // No cookie — auto-detect from Accept-Language
  const acceptLang = request.headers.get('accept-language') ?? ''
  const primaryLang = acceptLang
    .split(',')[0]
    ?.split(';')[0]
    ?.trim()
    .split('-')[0]
    .toLowerCase()

  if (primaryLang === 'en') {
    return redirectTo('en')
  }
  if (primaryLang === 'ru') {
    return redirectTo('ru')
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|api|.*\\..*).*)',],
}
