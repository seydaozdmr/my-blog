'use client'

import { useState, type FormEvent } from 'react'
import { contactCopy, contactEmail, contactMailto } from '@/lib/contact'
import type { Locale } from '@/lib/translations'

export default function ContactForm({ locale = 'tr' }: { locale?: Locale }) {
  const t = contactCopy[locale]
  const [draftRequested, setDraftRequested] = useState(false)
  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f2ed] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400'
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-2'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const field = (key: string) => String(fields.get(key) ?? '').trim()
    window.location.href = contactMailto({
      name: field('name'), email: field('email'), phone: field('phone'),
      subject: field('subject'), message: field('message'),
    }, locale)
    setDraftRequested(true)
  }

  return (
    <form action={`mailto:${contactEmail}`} method="post" encType="text/plain" onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-form-note">
      <p id="contact-form-note" className="text-sm text-gray-600">{t.note}</p>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>{t.name} *</label>
          <input type="text" id="name" name="name" autoComplete="name" required maxLength={100} placeholder={t.namePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{t.email} *</label>
          <input type="email" id="email" name="email" autoComplete="email" required maxLength={254} placeholder={t.emailPlaceholder} className={inputClass} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>{t.phone}</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" maxLength={40} placeholder={t.phonePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>{t.subject} *</label>
          <select id="subject" name="subject" required defaultValue="" className={inputClass}>
            <option value="" disabled>{t.chooseSubject}</option>
            {t.subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>{t.message} *</label>
        <textarea id="message" name="message" required rows={5} maxLength={2000} placeholder={t.messagePlaceholder} className={`${inputClass} resize-none`} />
      </div>
      {draftRequested && <p role="status" className="text-sm text-green-800 bg-green-50 rounded-xl p-4">{t.draft}</p>}
      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">{t.submit}</button>
      <a href={`mailto:${contactEmail}`} className="block text-sm text-green-700 underline break-all">{contactEmail}</a>
    </form>
  )
}
