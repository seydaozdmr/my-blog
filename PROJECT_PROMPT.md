# Sistem Prompt: Çok Dilli Next.js Hizmet/Kurumsal Web Sitesi

Bu doküman, benzer projeleri sıfırdan veya şablon olarak inşa etmek için kullanılabilecek bir referans kılavuzudur.

---

## Proje Özeti

Türkiye merkezli bir yerel hizmet işletmesi için **çok dilli kurumsal tanıtım sitesi**. Türkçe ana dil, İngilizce ve Rusça ikincil dil olarak desteklenir. SEO önceliklidir; içerikler markdown dosyalarından okunur, veritabanı yoktur.

**Canlı site:** `https://antalyaagacbudama.com`

---

## Teknoloji Yığını

| Katman | Teknoloji | Versiyon |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| Dil | TypeScript | 5.x |
| UI Stil | Tailwind CSS | 3.x |
| Animasyon | Framer Motion | 11.x |
| Markdown parser | gray-matter + marked + markdown-it | — |
| İkonlar | react-icons | 5.x |
| Rate limiting | rate-limiter-flexible | 6.x |
| Test | Vitest | 1.x |
| Runtime | Node.js (Vercel'e deploy) | — |

---

## Klasör Yapısı

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — HTML, metadata, global bileşenler
│   ├── page.tsx                    # Ana sayfa (TR)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── ProductList.tsx         # Client component — hizmet kartları
│   │   └── [slug]/
│   │       ├── page.tsx            # Dinamik hizmet detay sayfası
│   │       └── opengraph-image.tsx # OG görseli
│   ├── en/                         # İngilizce rota ağacı (/en/*)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── products/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── ru/                         # Rusça rota ağacı (/ru/*)
│   │   └── (en ile aynı yapı)
│   ├── api/
│   │   └── contact/route.ts        # Contact form POST → markdown dosyası kaydeder
│   ├── sitemap.ts                  # Otomatik XML sitemap
│   ├── robots.ts
│   └── opengraph-image.tsx
│
├── components/
│   ├── hero/
│   │   └── HeroSlider.tsx          # Otomatik geçişli tam ekran slider
│   ├── home/
│   │   ├── ServicesSection.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── AboutPreview.tsx
│   │   └── CTABanner.tsx
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── LocaleFooter.tsx        # usePathname ile locale algılayan client wrapper
│   ├── services/
│   │   └── ServiceCard.tsx
│   ├── ui/
│   │   ├── Logo.tsx
│   │   ├── FadeInSection.tsx       # IntersectionObserver ile scroll animasyonu
│   │   ├── LanguageSwitcher.tsx    # Fixed-position TR|EN|RU butonu
│   │   └── LocaleSetup.tsx         # document.documentElement.lang setter
│   └── SEO/
│       └── StructuredData.tsx      # JSON-LD LocalBusiness schema
│
├── content/
│   ├── services/
│   │   ├── *.md                    # Türkçe içerikler (root = /products/[slug] için)
│   │   ├── tr/*.md                 # Türkçe (locale-aware okuma için)
│   │   ├── en/*.md                 # İngilizce
│   │   └── ru/*.md                 # Rusça
│   └── messages/
│       └── *.md                    # Contact form gönderileri (API tarafından yazılır)
│
├── lib/
│   ├── mdUtils.ts                  # Markdown okuma fonksiyonları (locale parametreli)
│   ├── translations.ts             # UI string sözlüğü (tr/en/ru)
│   └── services.ts
│
├── hooks/
│   └── useMarkdownContent.ts
│
├── types/
│   ├── service.ts                  # IService, IServiceCard interface'leri
│   └── navigation.ts
│
└── middleware.ts                   # Accept-Language + cookie tabanlı yönlendirme
```

---

## Çok Dil (i18n) Mimarisi

Next.js built-in i18n config **kullanılmaz**. Routing tamamen manuel tutulur:

### URL Yapısı
| Dil | URL |
|---|---|
| Türkçe | `/`, `/products`, `/about`, `/contact` |
| İngilizce | `/en/`, `/en/products`, `/en/about`, `/en/contact` |
| Rusça | `/ru/`, `/ru/products`, `/ru/about`, `/ru/contact` |

### Middleware (`src/middleware.ts`)
1. `/en` veya `/ru` ile başlayan path → `NEXT_LOCALE` cookie set et, devam et
2. Cookie `NEXT_LOCALE=en/ru` varsa → ilgili prefix'e redirect et
3. Cookie yoksa → `Accept-Language` header'dan birincil dili çek
4. `primaryLang === 'en'` → `/en${pathname}` redirect
5. `primaryLang === 'ru'` → `/ru${pathname}` redirect
6. Türkçe veya bilinmeyen → olduğu gibi devam et

```ts
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|api|.*\\..*).*)',],
}
```

### Çeviri Sözlüğü (`src/lib/translations.ts`)
```ts
export type Locale = 'tr' | 'en' | 'ru'

export const dict = {
  tr: { hero: {...}, stats: {...}, whyUs: {...}, about: {...}, cta: {...},
        services: {...}, footer: {...}, productList: {...}, serviceDetail: {...} },
  en: { /* aynı yapı, İngilizce değerler */ },
  ru: { /* aynı yapı, Rusça değerler */ },
} as const

export type Dict = typeof dict.tr
export function getT(locale: Locale): Dict { return dict[locale] as unknown as Dict }
```

Tüm bileşenler `locale?: Locale` prop alır (default `'tr'`) ve içeride `const t = getT(locale)` çağırır.

### Locale-Aware Bileşenler
- **`LocaleFooter`** — `usePathname()` ile locale algılar, `<Footer locale basePath />` render eder
- **`LocaleSetup`** — `useEffect` içinde `document.documentElement.lang` set eder
- **`LanguageSwitcher`** — fixed bottom-right, `NEXT_LOCALE` cookie yazar, `router.push()` ile geçiş yapar

### İçerik Dosyaları (Markdown)
Her hizmet için üç dilde dosya:
```
src/content/services/
├── palmiye-budama.md         # TR (legacy root, /products/[slug] okur)
├── tr/palmiye-budama.md      # TR (locale-aware)
├── en/palmiye-budama.md      # EN
└── ru/palmiye-budama.md      # RU
```

**Frontmatter yapısı:**
```yaml
---
id: 2
title: "Profesyonel Palmiye Budama ve Bakım"
description: "Kısa açıklama (meta description için)"
image: "/new_images/IMG_0876.jpeg"
imagePosition: "65% center"   # CSS objectPosition değeri
order: 2
key: "palmiye-budama"
comingSoon: false              # true ise kart gösterilir ama detay sayfası oluşturulmaz
date: "2025-01-01"
---

İçerik buraya...
```

---

## SEO Altyapısı

### Metadata
Her sayfa `export const metadata: Metadata` veya `generateMetadata()` ile aşağıdaki alanları sağlar:
- `title`, `description`
- `alternates.canonical` + `alternates.languages` (hreflang)
- `openGraph` (title, description, url, locale, alternateLocale, images)
- `twitter.card: 'summary_large_image'`

**hreflang Örneği:**
```ts
alternates: {
  canonical: 'https://antalyaagacbudama.com/products/palmiye-budama',
  languages: {
    'tr': 'https://antalyaagacbudama.com/products/palmiye-budama',
    'en': 'https://antalyaagacbudama.com/en/products/palmiye-budama',
    'ru': 'https://antalyaagacbudama.com/ru/products/palmiye-budama',
    'x-default': 'https://antalyaagacbudama.com/products/palmiye-budama',
  },
}
```

### JSON-LD Structured Data
`<StructuredData />` bileşeni root layout'a eklenir. `schema.org/LocalBusiness` tipi kullanılır:
```ts
{
  '@type': 'LocalBusiness',
  name, description, telephone, email, url, logo, priceRange,
  address: { '@type': 'PostalAddress', ... },
  geo: { '@type': 'GeoCoordinates', latitude, longitude },
  openingHoursSpecification: [...],
  sameAs: ['instagram', 'facebook', 'youtube', 'tiktok'],
  availableLanguage: ['Turkish', 'English', 'Russian'],
}
```

### Sitemap
`src/app/sitemap.ts` → Next.js `MetadataRoute.Sitemap` döner. `comingSoon: true` olan hizmetler hariç tutulur.

---

## Sayfa Yapısı

### Ana Sayfa Bileşen Sırası
```
<HeroSlider />        — Tam ekran otomatik geçişli slider (6sn interval)
<StatsStrip />        — 4 istatistik (10+ yıl, 500+ proje, 7/24, %100)
<ServicesSection />   — Hizmet kartları grid
<WhyUsSection />      — 4 madde neden biz
<AboutPreview />      — Sol resim + sağ metin + highlight listesi
<CTABanner />         — Telefon + iletişim butonu
```

### Hizmet Detay Sayfası (`/products/[slug]`)
- `generateStaticParams()` ile SSG
- `comingSoon: true` olan hizmetler statik param'dan çıkarılır → detay sayfası oluşturulmaz
- Markdown içeriği `marked()` ile HTML'e çevrilir
- Breadcrumb: Ana Sayfa → Hizmetlerimiz → [Hizmet Adı]
- `imagePosition` frontmatter alanı `objectPosition` CSS değeri olarak kullanılır

### İletişim Formu
- Client-side: `ContactForm.tsx`
- API: `POST /api/contact` → `src/content/messages/*.md` dosyası oluşturur
- Dosya adı: `{tarih}-{timestamp}-{konu}.md` formatında
- Rate limiting: `rate-limiter-flexible` ile IP bazlı sınırlama
- Zorunlu alanlar: `name`, `email`, `subject`, `message`

---

## Tasarım Sistemi

### Renkler
| Kullanım | Değer |
|---|---|
| Birincil yeşil | `green-600` / `green-700` (#16a34a / #15803d) |
| Koyu hero/header bg | `#1a2e1a` |
| Açık krem bg | `#f5f2ed` |
| Metin birincil | `gray-900` |
| Metin ikincil | `gray-500` / `gray-600` |

### Tipografi
- Font: **Inter** (Google Fonts, `latin` subset)
- Başlık: `font-bold` veya `font-extrabold`, `text-3xl` → `text-6xl`
- Gövde: `text-sm` / `text-base`, `leading-relaxed`
- Highlight badge: `text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full`

### Butonlar
```
Birincil:   bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105
İkincil:    border-2 border-white text-white hover:bg-white hover:text-green-700 rounded-full
Telefon:    bg-white text-green-700 font-bold rounded-full
```

### Kart Tasarımı
- Border radius: `rounded-2xl`
- Padding: `p-7`
- Background: `bg-[#f5f2ed]`
- Hover: `hover:shadow-md transition-shadow`
- İkon kutusu: `w-14 h-14 bg-green-600/10 text-green-700 rounded-xl flex items-center justify-center`

### Görseller
- `next/image` bileşeni, `fill` + `sizes` prop ile
- `objectPosition` frontmatter'dan okunur → her görsel için odak noktası ayarlanabilir
- Hero overlay: `bg-gradient-to-b from-black/50 via-black/30 to-black/75`

### Animasyon
- `FadeInSection` bileşeni: `IntersectionObserver` + `framer-motion` ile scroll animasyonu
- HeroSlider: CSS `transition-opacity duration-1000`
- Butonlar: `hover:scale-105 transition-all duration-300`

### Language Switcher
```tsx
<div className="fixed bottom-6 right-6 z-50 flex items-center gap-1
  bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full
  px-3 py-1.5 shadow-lg text-sm font-semibold">
  // TR | EN | RU butonları, aktif = bg-green-600 text-white
```

---

## Önemli Kalıplar

### Locale Prop Akışı
```
Server Page (locale="en", basePath="/en")
  → Component (locale, basePath)
    → getT(locale) → t.hero.tagline vb.
    → Link href={`${basePath}/products`}
```

### Markdown Okuma
```ts
// src/lib/mdUtils.ts
const getServicesDir = (locale = 'tr') =>
  path.join(process.cwd(), `src/content/services/${locale}`)

export async function getAllServices(locale = 'tr'): Promise<IService[]>
export async function getServiceBySlug(slug: string, locale = 'tr'): Promise<IService>
```

### generateStaticParams (çok dilli)
```ts
// /en/products/[slug]/page.tsx
export async function generateStaticParams() {
  const services = await getAllServices('en')
  return services.filter(s => !s.comingSoon).map(s => ({ slug: s.slug }))
}
```

### Cookie Yazma (Client)
```ts
document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`
```

---

## Yeni Bir Hizmet Ekleme

1. `src/content/services/tr/yeni-hizmet.md` oluştur (frontmatter + içerik)
2. `src/content/services/en/yeni-hizmet.md` ve `ru/yeni-hizmet.md` ekle
3. Root `src/content/services/yeni-hizmet.md` ekle (TR route için)
4. Görsel `/public/new_images/` altına koy
5. `imagePosition` ile odak noktasını ayarla

---

## Deploy

- Platform: **Vercel** (varsayılan)
- `next build` → static pages + API routes
- Environment variable gerekmez (veritabanı yok)
- `src/content/messages/` → Vercel'de yazılabilir değil; production'da form verilerini harici servise (Resend, SendGrid, Supabase) yönlendir

---

## Dikkat Edilmesi Gereken Noktaklar

- Root layout `lang="tr"` sabit başlar; `LocaleSetup` client component client-side'da güncelleyen çözüm
- `middleware.ts` matcher'ı `_next/static`, `_next/image`, `favicon`, `api` ve uzantılı dosyaları dışarıda bırakır
- `comingSoon: true` olan hizmetler kartlarda gösterilir (kilit ikonu ile) ama `generateStaticParams`'dan çıkarılır
- İçerik slug'ları dil bağımsız (Türkçe slug tüm dillerde kullanılır): `palmiye-budama`, `acil-durum-agac-kesimi` vb.
- `package-lock 2.json` gibi yanlış isimli dosyaları commit'e dahil etme; `git restore --staged` ile çıkar
