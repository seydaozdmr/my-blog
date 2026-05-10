import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Already on a locale-prefixed path — set cookie and continue
  if (pathname.startsWith('/en') || pathname.startsWith('/ru')) {
    const locale = pathname.startsWith('/en') ? 'en' : 'ru'
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return response
  }

  // Check explicit cookie preference first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale === 'tr') return NextResponse.next()
  if (cookieLocale === 'en' || cookieLocale === 'ru') {
    return NextResponse.redirect(new URL(`/${cookieLocale}${pathname === '/' ? '' : pathname}`, request.url))
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
    return NextResponse.redirect(new URL(`/en${pathname === '/' ? '' : pathname}`, request.url))
  }
  if (primaryLang === 'ru') {
    return NextResponse.redirect(new URL(`/ru${pathname === '/' ? '' : pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|api|.*\\..*).*)',],
}
