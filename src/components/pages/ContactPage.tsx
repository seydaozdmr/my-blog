import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import ContactForm from '@/components/contact/ContactForm'
import { contactCopy, contactEmail } from '@/lib/contact'
import type { Locale } from '@/lib/translations'

export function ContactPage({ locale }: { locale: Locale }) {
  const t = contactCopy[locale]
  const items = [
    { Icon: FaMapMarkerAlt, label: t.address, content: <p>{t.location}</p> },
    { Icon: FaPhone, label: t.phone, content: <a href="tel:+905511672228">+90 (551) 167 22 28</a> },
    { Icon: FaEnvelope, label: t.email, content: <a className="break-all" href={`mailto:${contactEmail}`}>{contactEmail}</a> },
    { Icon: FaClock, label: t.hours, content: <><p>{t.weekdays}</p><p>{t.saturday}</p></> },
  ]
  return (
    <>
      <section className="relative bg-[#1a2e1a] py-24 md:py-32">
        <div className="absolute inset-0 opacity-25 bg-[url('/new_images/IMG_1612.webp')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto">{t.subtitle}</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t.heading}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">{t.information}</h3>
              <div className="space-y-4">
                {items.map(({ Icon, label, content }) => (
                  <div key={label} className="flex items-start">
                    <Icon aria-hidden="true" className="text-green-600 mt-1 mr-3 text-xl shrink-0" />
                    <div><p className="font-medium">{label}</p><div className="text-gray-600">{content}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">{t.formTitle}</h3>
              <ContactForm locale={locale} />
            </div>
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">{t.mapTitle}</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102123.83619428958!2d30.65089354179688!3d36.89023849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya%20Merkez%2C%20Antalya!5e0!3m2!1str!2str!4v1682343456789!5m2!1str!2str" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title={`CrownPro — ${t.mapTitle}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
