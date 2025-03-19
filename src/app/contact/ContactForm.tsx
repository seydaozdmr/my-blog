'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // API'ye form verilerini gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Başarılı
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Mesajınız başarıyla gönderildi!' }
        });
        
        // Form alanlarını temizle
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        // Hata
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' }
        });
      }
    } catch (error) {
      console.log(error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">Ad Soyad *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">E-posta *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-700 mb-1">Konu *</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seçiniz</option>
            <option value="Genel Bilgi">Genel Bilgi</option>
            <option value="Fiyat Teklifi">Fiyat Teklifi</option>
            <option value="Teknik Destek">Teknik Destek</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-1">Mesajınız *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      
      {status.info.msg && (
        <div className={`px-4 py-3 rounded ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status.info.msg}
        </div>
      )}
      
      <div>
        <button
          type="submit"
          disabled={status.submitting}
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {status.submitting ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </div>
    </form>
  );
}