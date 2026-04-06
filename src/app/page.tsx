import { getAllServices } from '@/lib/mdUtils'
import Link from 'next/link'

export default async function Home() {
  const services = await getAllServices()

  const heroImage =
    services[0]?.image ||
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80'

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 text-center">
          <div className="max-w-5xl text-white">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] md:text-sm">
              ANTALYA AĞAÇ BUDAMA • PALMİYE BAKIMI • AĞAÇ KESİM HİZMETLERİ
            </p>

            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Antalya’da Profesyonel Ağaç Budama ve Palmiye Bakım Hizmeti
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/90 md:text-xl">
              Güvenli, temiz ve profesyonel ekipmanlarla; palmiye budama,
              ağaç kesim, tehlikeli dal alma ve bahçe bakım hizmetlerini
              Antalya genelinde uzman ekibimizle sunuyoruz.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-[#0B4B3A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#08372B] md:px-10 md:py-5"
              >
                Ücretsiz Keşif Talep Et
              </Link>

              <Link
                href="/products"
                className="inline-block rounded-md border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black md:px-10 md:py-5"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / INFO SECTION */}
      <section className="bg-[#f7f6f2] px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B4B3A]">
              Güvenli Çalışma
            </p>
            <h3 className="mb-3 text-2xl font-bold">Profesyonel Ekipman</h3>
            <p className="text-gray-600">
              Yüksek ağaç ve palmiye çalışmalarında güvenli ekipman ve kontrollü
              budama teknikleri kullanıyoruz.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B4B3A]">
              Antalya Geneli
            </p>
            <h3 className="mb-3 text-2xl font-bold">Hızlı Keşif & Planlama</h3>
            <p className="text-gray-600">
              Yerinde keşif sonrası ihtiyaca göre en doğru budama, kesim ve bakım
              planını net şekilde sunuyoruz.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B4B3A]">
              Temiz Teslim
            </p>
            <h3 className="mb-3 text-2xl font-bold">Düzenli ve Titiz Uygulama</h3>
            <p className="text-gray-600">
              İş sonunda dal, yaprak ve atıkları toplayarak alanı düzenli şekilde
              teslim etmeye özen gösteriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B4B3A]">
              ANTALYA’DA UZMAN AĞAÇ HİZMETLERİ
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
              Bahçeniz ve mülkünüz için güvenli, estetik ve profesyonel çözümler
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Ağaç budama yalnızca görünüm için değil; güvenlik, ağaç sağlığı ve
              çevresel denge için de kritik öneme sahiptir. Özellikle palmiye
              ağaçlarında yanlış kesim hem ağaca hem çevreye zarar verebilir.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Antalya Ağaç Budama olarak; deneyimli ekibimizle yüksek riskli
              bölgelerde kontrollü çalışma yapıyor, doğru tekniklerle uzun ömürlü
              bakım sağlıyoruz.
            </p>

            <Link
              href="/contact"
              className="inline-block rounded-md bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-gray-800"
            >
              Hemen Teklif Al
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-3 text-4xl font-bold text-[#0B4B3A]">01</div>
              <h3 className="mb-3 text-xl font-semibold">Palmiye Budama</h3>
              <p className="text-gray-600">
                Palmiye ağaçlarında doğru yükseklik, form ve sağlık odaklı bakım
                uygulamaları.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-3 text-4xl font-bold text-[#0B4B3A]">02</div>
              <h3 className="mb-3 text-xl font-semibold">Tehlikeli Dal Alma</h3>
              <p className="text-gray-600">
                Yapılara, araçlara veya yollara risk oluşturan dalların güvenli
                şekilde alınması.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-3 text-4xl font-bold text-[#0B4B3A]">03</div>
              <h3 className="mb-3 text-xl font-semibold">Ağaç Kesim</h3>
              <p className="text-gray-600">
                Kontrollü kesim planı ile zor alanlarda güvenli ve profesyonel
                söküm hizmeti.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="mb-3 text-4xl font-bold text-[#0B4B3A]">04</div>
              <h3 className="mb-3 text-xl font-semibold">Bahçe Temizliği</h3>
              <p className="text-gray-600">
                Budama sonrası düzenleme, atık toplama ve temiz teslim yaklaşımı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#fafafa] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B4B3A]">
              HİZMETLERİMİZ
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Tüm Hizmetlerimizi İnceleyin
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/products#${service.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                  <p className="mb-5 line-clamp-3 text-gray-600">
                    {service.description}
                  </p>

                  <span className="inline-block text-sm font-semibold uppercase tracking-[0.15em] text-[#0B4B3A]">
                    Detayları Gör →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0B4B3A] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            HEMEN İLETİŞİME GEÇİN
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            Antalya’da ağaç budama ve palmiye bakımı için profesyonel destek alın
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/90">
            Bahçenizde risk oluşturan ağaçlar, kontrolsüz uzayan dallar veya bakım
            gerektiren palmiyeler için bizimle iletişime geçin. Uygun çözümü hızlıca
            planlayalım.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0B4B3A] transition hover:bg-gray-100"
            >
              Teklif İste
            </Link>

            <Link
              href="/products"
              className="inline-block rounded-md border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#0B4B3A]"
            >
              Hizmetlere Git
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
