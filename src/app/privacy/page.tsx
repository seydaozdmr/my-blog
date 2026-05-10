import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'CrownPro gizlilik politikası — kişisel verileriniz ve çerez kullanımı hakkında bilgi.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#f5f2ed] min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-8">
          <Link href="/" className="text-sm text-green-700 hover:underline">← Ana Sayfa</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gizlilik Politikası</h1>
            <p className="text-sm text-gray-400">Son güncelleme: Mayıs 2025</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">1. Genel Bilgi</h2>
            <p className="text-gray-600 leading-relaxed">
              Bu gizlilik politikası, <strong>CrownPro</strong> (<a href="https://antalyaagacbudama.com" className="text-green-700 hover:underline">antalyaagacbudama.com</a>) web sitesinin ziyaretçilerine ait verilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">2. Toplanan Veriler</h2>
            <h3 className="font-semibold text-gray-700">İletişim Formu</h3>
            <p className="text-gray-600 leading-relaxed">
              Sitemizin iletişim formunu doldurduğunuzda şu bilgiler toplanır: ad soyad, e-posta adresi, telefon numarası (isteğe bağlı), konu ve mesaj içeriği. Bu bilgiler yalnızca size geri dönüş sağlamak amacıyla kullanılır; üçüncü taraflarla paylaşılmaz.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4">IP Adresi</h3>
            <p className="text-gray-600 leading-relaxed">
              Spam ve kötüye kullanımı önlemek amacıyla iletişim formu gönderimlerinde IP adresiniz kaydedilir. Bu bilgi yalnızca güvenlik amacıyla saklanır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">3. Çerez (Cookie) Kullanımı</h2>
            <p className="text-gray-600 leading-relaxed">
              Sitemiz yalnızca <strong>bir adet fonksiyonel çerez</strong> kullanmaktadır:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="pb-2 font-semibold">Çerez Adı</th>
                    <th className="pb-2 font-semibold">Amaç</th>
                    <th className="pb-2 font-semibold">Süre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700">
                    <td className="pt-3 font-mono text-green-700">NEXT_LOCALE</td>
                    <td className="pt-3">Dil tercihinizi hatırlamak</td>
                    <td className="pt-3">1 yıl</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Bu çerez, tarayıcı dil ayarınıza göre otomatik seçilen dili (Türkçe, İngilizce veya Rusça) kaydeder. Kişisel veri içermez; izleme, reklam veya analitik amacıyla kullanılmaz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bu çerez, sitenin temel işlevselliği için gerekli olduğundan GDPR kapsamında &quot;zorunlu çerez&quot; kategorisine girer ve ayrıca onay gerektirmez.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">4. Üçüncü Taraf Servisler</h2>
            <p className="text-gray-600 leading-relaxed">
              Sitemizde Google Analytics, Facebook Pixel veya benzer izleme araçları kullanılmamaktadır. Sosyal medya linkleri (Instagram, Facebook, YouTube, TikTok, WhatsApp) kendi gizlilik politikaları kapsamındadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">5. Haklarınız</h2>
            <p className="text-gray-600 leading-relaxed">
              GDPR ve KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Verilerinize erişim talep etme</li>
              <li>Verilerinizin silinmesini isteme</li>
              <li>Verilerinizin düzeltilmesini talep etme</li>
              <li>İşleme itiraz etme</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Talepleriniz için: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-700 hover:underline">ruzgarozdemir@crownprotr.com</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">6. İletişim</h2>
            <p className="text-gray-600 leading-relaxed">
              CrownPro — Muratpaşa, Antalya, Türkiye<br />
              E-posta: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-700 hover:underline">ruzgarozdemir@crownprotr.com</a><br />
              Tel: <a href="tel:+905511672228" className="text-green-700 hover:underline">+90 551 167 22 28</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
