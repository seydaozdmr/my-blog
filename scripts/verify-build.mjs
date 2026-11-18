import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const siteUrl = 'https://antalyaagacbudama.com'
const locales = ['tr', 'en', 'ru']
async function filesIn(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesIn(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat()
}
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'")
function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([text]) =>
    Object.fromEntries([...text.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, name, value]) => [name, decode(value)])))
}
const filenames = (await filesIn('.next/server/app')).filter(filename => filename.endsWith('.html') && !path.basename(filename).startsWith('_'))
const pages = new Map(await Promise.all(filenames.map(async filename => {
  const pathname = filename.replace(/^\.next\/server\/app/, '').replace(/\.html$/, '').replace(/\/index$/, '') || '/'
  return [pathname, await fs.readFile(filename, 'utf8')]
})))
const expectedPages = []
for (const locale of locales) {
  const prefix = locale === 'tr' ? '' : `/${locale}`
  for (const route of ['', '/about', '/contact', '/products', '/privacy']) expectedPages.push(`${prefix}${route}` || '/')
  const directory = `src/content/services/${locale}`
  for (const filename of await fs.readdir(directory)) {
    if (!filename.endsWith('.md')) continue
    const { data } = matter(await fs.readFile(path.join(directory, filename), 'utf8'))
    if (!data.comingSoon) expectedPages.push(`${prefix}/products/${filename.slice(0, -3)}`)
  }
}
assert.deepEqual([...pages.keys()].sort(), expectedPages.sort(), 'Generated pages must match all published content')
let linksChecked = 0
for (const [pathname, html] of pages) {
  const locale = /^\/(en|ru)(\/|$)/.exec(pathname)?.[1] ?? 'tr'
  const suffix = pathname.replace(/^\/(en|ru)(?=\/|$)/, '') === '/' ? '' : pathname.replace(/^\/(en|ru)(?=\/|$)/, '')
  const urlFor = language => `${siteUrl}${language === 'tr' ? '' : `/${language}`}${suffix}`
  assert.equal(tags(html, 'html')[0]?.lang, locale, `${pathname}: initial HTML language`)
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
  const headLinks = tags(head, 'link')
  assert.equal(headLinks.find(tag => tag.rel === 'canonical')?.href, urlFor(locale), `${pathname}: canonical`)
  const alternates = headLinks.filter(tag => tag.rel === 'alternate' && tag.hrefLang)
  assert.equal(alternates.length, 4, `${pathname}: alternate count`)
  for (const language of [...locales, 'x-default']) {
    assert.equal(alternates.find(tag => tag.hrefLang === language)?.href, urlFor(language === 'x-default' ? 'tr' : language), `${pathname}: ${language} alternate`)
  }
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${pathname}: one main heading`)
  if (pathname.endsWith('/privacy')) assert.match(head, /name="robots" content="[^"]*noindex/, `${pathname}: noindex policy`)
  for (const tag of tags(html, 'a')) {
    if (!tag.href || /^(mailto:|tel:)/.test(tag.href)) continue
    const target = new URL(tag.href, `${siteUrl}${pathname}`)
    if (target.origin !== siteUrl) continue
    const route = target.pathname.replace(/\/$/, '') || '/'
    assert.ok(pages.has(route), `${pathname}: broken internal link ${tag.href}`)
    if (target.hash) {
      const ids = [...pages.get(route).matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
      assert.ok(ids.includes(decodeURIComponent(target.hash.slice(1))), `${pathname}: missing fragment ${tag.href}`)
    }
    linksChecked++
  }
  const imageUrls = [...tags(html, 'img').map(tag => tag.src), ...tags(head, 'meta').filter(tag => tag.property === 'og:image' || tag.name === 'twitter:image').map(tag => tag.content)]
  for (const image of imageUrls.filter(Boolean)) {
    const url = new URL(image, siteUrl)
    if (url.origin !== siteUrl) continue
    const asset = url.pathname === '/_next/image' ? url.searchParams.get('url') : url.pathname
    await fs.access(path.join('public', decodeURIComponent(asset)))
  }
  if (/\/products$/.test(pathname)) {
    const serviceFiles = (await fs.readdir(`src/content/services/${locale}`)).filter(filename => filename.endsWith('.md'))
    assert.equal((html.match(/<article\b/g) ?? []).length, serviceFiles.length, `${pathname}: all service articles`)
    assert.ok((html.match(/<h2\b/g) ?? []).length > 10, `${pathname}: Markdown is present in initial HTML`)
  }
}
const cssFiles = (await filesIn('.next/static/css')).filter(filename => filename.endsWith('.css'))
for (const filename of cssFiles) {
  const css = await fs.readFile(filename, 'utf8')
  for (const [, raw] of css.matchAll(/url\(([^)]+)\)/g)) {
    const url = raw.replace(/^["']|["']$/g, '')
    if (url.startsWith('/images/') || url.startsWith('/new_images/')) await fs.access(path.join('public', url))
  }
}
console.log(`Verified ${pages.size} HTML pages: languages, canonical/hreflang, ${linksChecked} internal links, images, Markdown, and headings`)
