import React from 'react'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import ContactForm from '@/app/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с CrownPro для профессиональных услуг по уходу за деревьями в Анталье. Получите бесплатную оценку. Работаем 24/7.',
  alternates: {
    canonical: 'https://antalyaagacbudama.com/ru/contact',
    languages: {
      'tr': 'https://antalyaagacbudama.com/contact',
      'en': 'https://antalyaagacbudama.com/en/contact',
      'ru': 'https://antalyaagacbudama.com/ru/contact',
      'x-default': 'https://antalyaagacbudama.com/contact',
    },
  },
  openGraph: {
    title: 'Контакты | CrownPro',
    description: 'Свяжитесь с CrownPro. Звоните сейчас для бесплатной оценки.',
    url: 'https://antalyaagacbudama.com/ru/contact',
    locale: 'ru_RU',
  },
}

export default function RuContactPage() {
  return (
    <>
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-25 bg-[url('/new_images/IMG_1612.jpeg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto">
            Свяжитесь с нами для бесплатного выезда и расчёта стоимости. Работаем 24/7.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Напишите нам</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">Мурат Паша, Анталья, Турция</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-green-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+90 (551) 167 22 28</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-green-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Эл. почта</p>
                    <p className="text-gray-600">ruzgarozdemir@crownprotr.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-green-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Рабочие часы</p>
                    <p className="text-gray-600">Понедельник – Пятница: 09:00 – 18:00</p>
                    <p className="text-gray-600">Суббота: 09:00 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-6">Местоположение</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102123.83619428958!2d30.65089354179688!3d36.89023849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya%20Merkez%2C%20Antalya!5e0!3m2!1str!2str!4v1682343456789!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="CrownPro Местоположение"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
