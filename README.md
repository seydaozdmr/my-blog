# CrownPro

Antalya ağaç bakım hizmetleri için Türkçe, İngilizce ve Rusça tanıtım sitesi.
Next.js 15 App Router, React 19, TypeScript ve Tailwind CSS kullanır.

## Kurulum ve kontroller

Node.js 22 LTS veya daha yeni bir LTS sürümü kullanın.

```sh
npm ci
npm run dev
```

Geliştirme adresi: http://localhost:3000

```sh
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm test           # İçerik, yönlendirme, SEO, kartlar ve form testleri
npm run build      # Production derlemesi ve sayfa üretimi
npm start          # Production önizlemesi
npm run check      # Yukarıdaki kontrolleri sırayla çalıştırır
```

`package-lock.json` takip edilir; bağımlılıkları değiştirince kilit dosyasını da güncelleyin.

## Yapı

- `src/app/(tr)`: URL öneki olmayan Türkçe rotalar.
- `src/app/en`, `src/app/ru`: İngilizce ve Rusça rotalar.
- `src/components/pages`: Ana sayfa, hizmet listesi/detayı ve iletişim için ortak şablonlar.
- `src/components/layout/SiteLayout.tsx`: Her dil için sunucuda doğru `html lang` değeri ve ortak sayfa iskeleti.
- `src/lib/i18n.ts`: Dil rotaları, canonical ve karşılıklı `hreflang` bağlantıları.
- `src/lib/translations.ts`, `src/lib/contact.ts`: Arayüz ve iletişim çevirileri.
- `src/lib/mdUtils.ts`: Markdown ve frontmatter okuma/doğrulama.
- `src/lib/markdown.ts`: Sunucuda Markdown oluşturma; ham HTML ve tehlikeli URL protokolleri engellenir.
- `src/content/services/{tr,en,ru}`: Dil başına hizmet içerikleri.
- `public/images`, `public/new_images`: Optimize edilmiş WebP görselleri.
- `src/app/fonts`: Yerel Inter yazı tipi ve SIL Open Font License.
- `tests`: Davranış ve içerik tutarlılığı testleri.

Hakkımızda ve gizlilik politikası gibi uzun metinler dil başına ilgili sayfa dosyasında tutulur.

## İçerik ekleme

Aynı slug ile üç dilde Markdown dosyası oluşturun:

```text
src/content/services/tr/yeni-hizmet.md
src/content/services/en/yeni-hizmet.md
src/content/services/ru/yeni-hizmet.md
```

```yaml
---
id: 10
title: "Hizmet başlığı"
description: "Kısa açıklama"
image: "/new_images/yeni-hizmet.webp"
imagePosition: "center"
order: 10
key: "yeni-hizmet"
comingSoon: false
---
```

`id` benzersiz tam sayı, `order` sayısal sıralama değeridir. `date` isteğe bağlıdır.
`comingSoon: true` olan hizmetler listelerde gösterilir; ana sayfa kartları bağlantısızdır,
detay sayfaları ve sitemap kayıtları üretilmez. İçeriğin yayına alınması için yeniden build gerekir.

Yeni JPEG/PNG görsellerini `public` altına koyup içerik veya bileşende kullanın; ardından:

```sh
npm run optimize:images
```

Bu komut kullanılan JPEG/PNG dosyalarını en fazla 1920 px olacak şekilde WebP’ye dönüştürür,
kod/içerik yollarını günceller ve dönüştürdüğü orijinalleri kaldırır. Kullanılmayan dosyaları silmez.

## Vercel dağıtımı

Vercel projesinde **Next.js** preset’i, `npm ci` kurulum komutu ve `npm run build`
derleme komutu kullanılır. Output Directory varsayılan bırakılır; ortam değişkeni gerekmez.

İçerik sayfaları build sırasında önceden oluşturulur. Proje `output: 'export'` kullanmaz:
Vercel dil yönlendirmeleri için middleware ve görsel optimizasyonunu sağlar. Yalnızca dosya
barındıran başka bir platforma geçişte bunlar için ayrıca statik export uyarlaması gerekir.

`NEXT_LOCALE` çerezi kullanıcının seçimini bir yıl saklar. Ön ekli bir dil rotası doğrudan
açıldığında o dil kullanılır; diğer rotalarda önce çerez, sonra `Accept-Language` değerlendirilir.
Query parametreleri yönlendirmede korunur.

## İletişim ve kişisel veri

Form sunucu endpoint’ine POST etmez ve mesajı diske kaydetmez. Kullanıcının e-posta
uygulamasında doldurulmuş bir taslak açar; gönderim kullanıcı tarafından o uygulamada yapılır.
E-posta uygulaması açılmadığında doğrudan e-posta ve telefon bağlantıları kullanılabilir.
Formun açılması mesajın gönderildiği anlamına gelmez; arayüz bunu açıkça belirtir.

Mesaj kayıtlarını veya müşteri verilerini repoya eklemeyin. `src/content/messages/` Git’te
yok sayılır. Önceden takip edilen mesajlar çalışma ağacından kaldırılmıştır; mevcut Git
geçmişi değiştirilmemiştir. Bu dosyalar geçmiş commit’lerde bulunabilir.

## SEO

Canonical ve `tr`, `en`, `ru`, `x-default` alternatifleri ortak yardımcıdan üretilir.
Sitemap yalnızca aktif ve indekslenebilir sayfaları içerir. Gizlilik sayfaları `noindex` kalır.
Paylaşım görselleri ve yazı tipi yereldir; build sırasında harici font/emoji servisine ihtiyaç yoktur.

Build sonrası üretilmiş HTML’i kontrol etmek için:

```sh
npm run verify:build
```

## Bağımlılık denetimi

Next.js 15.5.29 kullanılır; Next.js içindeki PostCSS sürümü, `overrides` üzerinden doğrudan
bağımlılıktaki güncel 8.5.x sürümüyle eşitlenir.

18 Kasım 2026 denetiminde npm’in geliştirme araçları için bildirdiği kalan uyarılar aynı
Picomatch kaydına dayanıyordu: [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf).
GitHub bu kaydı aynı gün geri çekmişti; npm veritabanı henüz bunu yansıtmıyordu. Uyarı gizlenmez,
`npm audit` çıktısı bu yüzden sıfır olmayabilir. Başka bir advisory görülürse ayrıca değerlendirilmelidir.
