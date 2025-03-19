import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Şirketimiz ve vizyonumuz hakkında bilgi alın'
}

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/about.jpg" 
                alt="About us" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p>
              Antalya bölgesinde faaliyet gösteren CrownPro ekibi, ağaç tırmanıcılığı ve peyzaj hizmetlerinde uzmanlaşmış, profesyonel bir ekiptir. Ağaçların sağlıklı bir şekilde bakılması ve estetik görünümlerinin korunması konusunda yıllarca süren eğitim ve deneyime sahip, sertifikalı arboristler olarak, doğa ile uyum içinde çalışıyoruz.

              </p>
              <p>
              Bizim için güvenlik, kalite ve çevreye saygı her şeyden önce gelir. Yüksek ağaçlarla çalışmak, özel ekipmanlar ve tırmanış teknikleri gerektiren bir iştir. Ekip olarak, her projede en ileri düzeyde güvenlik önlemleri alır, çevreye zarar vermemek için titizlikle çalışırız. Müşterilerimize en iyi hizmeti sunmak için her zaman yenilikçi çözümler üretir, her tür ağaç bakımı ve peyzaj hizmetlerini profesyonelce gerçekleştiririz.
              </p>
              <p>İster palmiye budama, ister ağaç kesme, ister genel peyzaj bakımı olsun, sizin ve çevreniz için en iyi sonuçları elde etmek için buradayız. Biz, doğa ile çalışmayı seven ve bu alandaki her projeye tutkuyla yaklaşan bir ekibiz. Ağaç bakımında güvenilir ve deneyimli bir partner arıyorsanız, bir telefon uzağımızdasınız.</p>
            </div>

            
            </div>
          </div>
        </div>
    </section>
  )
}