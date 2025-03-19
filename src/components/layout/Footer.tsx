import { FaInstagram } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ve Kısa Açıklama */}
          <div>
            <h3 className="text-xl font-bold mb-4">CrownPro</h3>
            <p className="text-gray-400 mb-4">
            Antalya bölgesinde faaliyet gösteren CrownPro ekibi, ağaç tırmanıcılığı ve peyzaj hizmetlerinde uzmanlaşmış, profesyonel bir ekiptir. 
            </p>
          </div>
          
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Atatürk Cad. No:123</p>
              <p className="mb-2">Antalya, Türkiye</p>
              <p className="mb-2">
                <a href="tel:+902121234567" className="hover:text-white transition-colors">
                  +90 (212) 123 45 67
                </a>
              </p>
              <p>
                <a href="mailto:crownturkey@crownproturkey.com" className="hover:text-white transition-colors">
                  info@crownpro.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Sosyal Medya */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
            
              <a 
                href="https://www.instagram.com/crownproturkiye/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              
            </div>
          </div>
        </div>
        
        {/* Telif Hakkı Bilgisi */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>© {currentYear} CrownPro Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}