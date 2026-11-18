# Çok Dilli Hizmet Sitesi Referansı

Bu doküman benzer bir kurumsal site oluşturmak için proje kalıplarını özetler.
Kurulum, dağıtım ve içerik işlemlerinin güncel kaynağı [README.md](README.md) dosyasıdır.

## Temel yapı

- Next.js 15 App Router, React 19, TypeScript ve Tailwind CSS.
- Türkçe `/`, İngilizce `/en`, Rusça `/ru` altında sunulur.
- Türkçe rotalar `(tr)` route group’unda bulunur; grup adı URL’ye eklenmez.
- Her dilin layout’u ortak `SiteLayout` bileşenine dili geçirir. İlk HTML doğru `lang` taşır.
- Ana sayfa, hizmet listesi/detayı ve iletişim sayfaları ortak şablonlardan oluşturulur.
- Uzun yerelleştirilmiş hakkımızda ve gizlilik metinleri ilgili dilin sayfasında tutulur.

## İçerik ve SEO

- Hizmet içerikleri yalnızca `src/content/services/{tr,en,ru}` altında bulunur.
- Aynı hizmet üç dilde aynı slug’ı kullanır. Kök dizine ilave Markdown kopyası eklenmez.
- `gray-matter` metadata’yı ayrıştırır; `mdUtils.ts` alanları doğrular ve `order` ile sıralar.
- `getServiceBySlug` bulunmayan veya geçersiz slug için `null` döndürür.
- Markdown sunucuda render edilir; ilk HTML tam içerik taşır.
- `comingSoon` hizmetler bağlantısız kartlarda görünür; detay sayfası ve sitemap girdisi üretilmez.
- `getAlternates(locale, pathname)` canonical ve karşılıklı dil alternatiflerini üretir.
- `localePath` ve `localizedUrl` yardımcıları URL oluşturma işini merkezileştirir.

## Statik içerikle iletişim

Form e-posta taslağı açar; otomatik gönderim veya dosya kaydı yapmaz. Form metinleri, konu
seçenekleri ve taslak bildirimi üç dilde çevrilidir. E-posta ve telefon bağlantıları alternatiftir.
Sunucu gerektiren bir form servisi bu projenin parçası değildir.

## Görseller ve animasyon

- Kullanılan JPEG/PNG görselleri `npm run optimize:images` ile WebP’ye çevrilir.
- Inter yerelden yüklenir; lisansı `src/app/fonts/OFL.txt` dosyasındadır.
- Giriş animasyonları IntersectionObserver kullanır; içerik JavaScript olmadan görünür kalır
  ve azaltılmış hareket tercihi desteklenir.

## Doğrulama

`npm run check` lint, tip kontrolü, Vitest ve production build adımlarını çalıştırır.
`npm run verify:build` üretilmiş HTML’de dil, canonical, hreflang, bağlantı ve görsel yollarını denetler.
Bağımlılık listesiyle `package-lock.json` birlikte güncellenir; temiz kurulum `npm ci` ile yapılır.
