import React from 'react';
import { Metadata } from 'next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from './ContactForm';
export const metadata: Metadata = {
  title: 'İletişim | Firmamız',
  description: 'Bizimle iletişime geçin. Sorularınız ve talepleriniz için buradayız.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Bizimle İletişime Geçin</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgilerimiz</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 text-xl" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p className="text-gray-600">Ataşehir, İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3 text-xl" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-gray-600">+90 (216) 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3 text-xl" />
                <div>
                  <h3 className="font-medium">E-posta</h3>
                  <p className="text-gray-600">info@firmaniz.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-primary mt-1 mr-3 text-xl" />
                <div>
                  <h3 className="font-medium">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-600">Cumartesi: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-2">Bizi Takip Edin</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-gray-700 hover:text-primary">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl text-gray-700 hover:text-primary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl text-gray-700 hover:text-primary">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl text-gray-700 hover:text-primary">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* İletişim Formu */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Mesaj Gönderin</h2>
            <ContactForm />
          </div>
        </div>
        
        {/* Harita */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Konum</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48170.55262315011!2d29.06797571878277!3d40.98969723930274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0xd58d68f89ab054e1!2sAta%C5%9Fehir%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1613735590877!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Firma Lokasyonu"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
} 