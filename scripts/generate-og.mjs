import fs from 'node:fs/promises'
import path from 'node:path'
import { createElement as h } from 'react'
import { ImageResponse } from 'next/og.js'
import matter from 'gray-matter'

const font = await fs.readFile('src/app/fonts/Inter-Bold.ttf')
const copy = {
  tr: { title: 'Antalya Ağaç Budama ve Bakım Hizmetleri', tagline: 'Profesyonel Ağaç Bakımı', badges: '7/24 Acil Hizmet • Uzman Ekip • Güvenli Çalışma' },
  en: { title: 'Professional Tree Care in Antalya', tagline: 'Professional Tree Care', badges: '24/7 Emergency Service • Expert Team • Safe Work' },
  ru: { title: 'Профессиональный уход за деревьями в Анталье', tagline: 'Уход за деревьями', badges: 'Круглосуточная помощь • Опытная команда • Безопасность' },
}
const box = (style, ...children) => h('div', { style: { display: 'flex', ...style } }, ...children)
async function generate(locale, slug, title, description) {
  const t = copy[locale]
  const image = new ImageResponse(
    box({ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1a2e1a, #2d5a27)', color: 'white', fontFamily: 'Inter', padding: '54px 70px', flexDirection: 'column', justifyContent: 'space-between', borderTop: '8px solid #22c55e' },
      box({ justifyContent: 'space-between', alignItems: 'center' },
        h('span', { style: { fontSize: 34, color: '#86efac' } }, 'CrownPro'),
        h('span', { style: { fontSize: 20, color: '#bbf7d0' } }, t.tagline)),
      box({ flexDirection: 'column', gap: 20 },
        h('div', { style: { fontSize: title.length > 65 ? 48 : 58, lineHeight: 1.15, letterSpacing: '-1px' } }, title),
        h('div', { style: { fontSize: 24, color: '#dcfce7', lineHeight: 1.4 } }, description.length > 160 ? `${description.slice(0, 157)}…` : description)),
      box({ flexDirection: 'column', gap: 18 },
        h('div', { style: { color: '#86efac', fontSize: 20 } }, t.badges),
        h('div', { style: { color: '#bbf7d0', fontSize: 18 } }, 'antalyaagacbudama.com'))),
    { width: 1200, height: 630, fonts: [{ name: 'Inter', data: font, weight: 700, style: 'normal' }] },
  )
  const output = path.join('public/og', locale, `${slug}.png`)
  await fs.mkdir(path.dirname(output), { recursive: true })
  await fs.writeFile(output, Buffer.from(await image.arrayBuffer()))
}
let count = 0
await fs.rm('public/og', { recursive: true, force: true })
for (const locale of ['tr', 'en', 'ru']) {
  const t = copy[locale]
  await generate(locale, 'home', t.title, t.badges)
  count++
  const dir = `src/content/services/${locale}`
  for (const filename of await fs.readdir(dir)) {
    if (!filename.endsWith('.md')) continue
    const { data } = matter(await fs.readFile(path.join(dir, filename), 'utf8'))
    if (data.comingSoon) continue
    await generate(locale, filename.slice(0, -3), data.title, data.description)
    count++
  }
}
console.log(`Generated ${count} local social images`)
