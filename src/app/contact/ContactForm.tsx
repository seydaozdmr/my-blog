'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Mesajınız başarıyla gönderildi!' },
        })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.' },
        })
      }
    } catch {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınız Soyadınız"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f2ed] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ornek@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f2ed] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f2ed] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Konu *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f2ed] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800"
          >
            <option value="">Konu Seçiniz</option>
            <option value="Fiyat Teklifi">Fiyat Teklifi</option>
            <option value="Genel Bilgi">Genel Bilgi</option>
            <option value="Teknik Destek">Teknik Destek</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Mesajınızı buraya yazın..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f2ed] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400 resize-none"
        />
      </div>

      {status.info.msg && (
        <div
          className={`px-5 py-4 rounded-xl text-sm font-medium ${
            status.info.error
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}
        >
          {status.info.msg}
        </div>
      )}

      <button
        type="submit"
        disabled={status.submitting}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:hover:scale-100 text-lg"
      >
        {status.submitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      </button>
    </form>
  )
}
