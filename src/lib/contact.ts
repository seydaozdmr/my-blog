import type { Locale } from './translations'

export const contactEmail = 'ruzgarozdemir@crownprotr.com'

export const contactCopy = {
  tr: {
    title: 'İletişim', subtitle: 'Ücretsiz keşif ve fiyat teklifi için bize ulaşın. 7/24 acil hizmetinizdeyiz.',
    heading: 'Bizimle İletişime Geçin', information: 'İletişim Bilgilerimiz', address: 'Adres',
    location: 'Muratpaşa, Antalya, Türkiye', phone: 'Telefon', email: 'E-posta', hours: 'Çalışma Saatleri',
    weekdays: 'Pazartesi – Cuma: 09:00 – 18:00', saturday: 'Cumartesi: 09:00 – 18:00',
    formTitle: 'Mesaj Hazırlayın', mapTitle: 'Konum', name: 'Ad Soyad', namePlaceholder: 'Adınız Soyadınız',
    emailPlaceholder: 'ornek@email.com', phonePlaceholder: '05XX XXX XX XX', subject: 'Konu',
    chooseSubject: 'Konu Seçiniz', subjects: ['Fiyat Teklifi', 'Genel Bilgi', 'Teknik Destek', 'Diğer'],
    message: 'Mesajınız', messagePlaceholder: 'Mesajınızı buraya yazın...',
    submit: 'E-posta Uygulamasında Aç',
    note: 'Bu form e-posta uygulamanızda bir taslak açar. Mesajı göndermek için uygulamanızdaki Gönder düğmesini kullanın.',
    draft: 'E-posta taslağı açılması istendi. Otomatik gönderim yapılmadı. Uygulama açılmadıysa aşağıdaki e-posta adresinden bize ulaşabilirsiniz.',
  },
  en: {
    title: 'Contact', subtitle: 'Get in touch for a free site visit and price quote. Emergency service available 24/7.',
    heading: 'Get in Touch', information: 'Contact Information', address: 'Address',
    location: 'Muratpaşa, Antalya, Turkey', phone: 'Phone', email: 'Email', hours: 'Working Hours',
    weekdays: 'Monday – Friday: 09:00 – 18:00', saturday: 'Saturday: 09:00 – 18:00',
    formTitle: 'Prepare a Message', mapTitle: 'Location', name: 'Full Name', namePlaceholder: 'Your full name',
    emailPlaceholder: 'you@example.com', phonePlaceholder: '+44 7700 900000', subject: 'Subject',
    chooseSubject: 'Select a Subject', subjects: ['Price Quote', 'General Information', 'Technical Support', 'Other'],
    message: 'Your Message', messagePlaceholder: 'Write your message here...',
    submit: 'Open in Email App',
    note: 'This form opens a draft in your email app. Use the Send button in that app to send your message.',
    draft: 'An email draft was requested. Nothing was sent automatically. If your app did not open, contact us at the email address below.',
  },
  ru: {
    title: 'Контакты', subtitle: 'Свяжитесь с нами для бесплатного выезда и расчёта стоимости. Экстренная помощь круглосуточно.',
    heading: 'Свяжитесь с нами', information: 'Контактная информация', address: 'Адрес',
    location: 'Муратпаша, Анталья, Турция', phone: 'Телефон', email: 'Эл. почта', hours: 'Рабочие часы',
    weekdays: 'Понедельник – Пятница: 09:00 – 18:00', saturday: 'Суббота: 09:00 – 18:00',
    formTitle: 'Подготовить сообщение', mapTitle: 'Местоположение', name: 'Имя и фамилия', namePlaceholder: 'Ваше имя и фамилия',
    emailPlaceholder: 'you@example.com', phonePlaceholder: '+7 900 000 00 00', subject: 'Тема',
    chooseSubject: 'Выберите тему', subjects: ['Расчёт стоимости', 'Общая информация', 'Техническая поддержка', 'Другое'],
    message: 'Ваше сообщение', messagePlaceholder: 'Напишите ваше сообщение...',
    submit: 'Открыть в почтовом приложении',
    note: 'Форма откроет черновик в вашем почтовом приложении. Чтобы отправить сообщение, нажмите «Отправить» в приложении.',
    draft: 'Запрошено открытие черновика. Сообщение не отправлено автоматически. Если приложение не открылось, свяжитесь с нами по адресу ниже.',
  },
} as const

export interface ContactMessage {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function contactMailto(data: ContactMessage, locale: Locale) {
  const t = contactCopy[locale]
  const body = `${t.name}: ${data.name}\n${t.email}: ${data.email}\n${t.phone}: ${data.phone}\n\n${data.message}`
  return `mailto:${contactEmail}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`
}
