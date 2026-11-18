import type { Locale } from './translations'

export const locales = ['tr', 'en', 'ru'] as const
export const siteUrl = 'https://antalyaagacbudama.com'

export function localePath(locale: Locale, pathname = '/') {
  const suffix = pathname === '/' ? '' : pathname
  return `${locale === 'tr' ? '' : `/${locale}`}${suffix}` || '/'
}

export function localizedUrl(locale: Locale, pathname = '/') {
  return `${siteUrl}${localePath(locale, pathname) === '/' ? '' : localePath(locale, pathname)}`
}

export function getAlternates(locale: Locale, pathname = '/') {
  return {
    canonical: localizedUrl(locale, pathname),
    languages: {
      tr: localizedUrl('tr', pathname),
      en: localizedUrl('en', pathname),
      ru: localizedUrl('ru', pathname),
      'x-default': localizedUrl('tr', pathname),
    },
  }
}

export function getPathLocale(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  return segment === 'en' || segment === 'ru' ? segment : 'tr'
}

export function stripLocale(pathname: string) {
  return getPathLocale(pathname) === 'tr' ? pathname : pathname.replace(/^\/(en|ru)(?=\/|$)/, '') || '/'
}

export function socialImages(locale: Locale, slug = 'home') {
  return [{ url: `${siteUrl}/og/${locale}/${slug}.png`, width: 1200, height: 630 }]
}
