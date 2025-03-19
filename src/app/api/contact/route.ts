import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { headers } from 'next/headers';

// Rate limiter ayarları
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'contact-form',  // önbellekte kullanılacak anahtar öneki
  points: 3,                 // izin verilen istek sayısı
  duration: 3600,            // süre (saniye cinsinden) - 1 saat
});

export async function POST(request: Request) {
  try {
    // IP adresini al
    const headersList = headers();
    const forwardedFor = (await headersList).get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';
    
    // Rate limit kontrolü
    try {
      await rateLimiter.consume(ip);
    } catch (error) {
      // Rate limit aşıldı
      return NextResponse.json(
        { error: 'Çok fazla mesaj gönderdiniz. Lütfen bir süre bekleyip tekrar deneyin.' },
        { status: 429 }
      );
    }
    
    const data = await request.json();
    const { name, email, phone, subject, message } = data;
    
    // Doğrulama
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }
    
    // Tarih bilgisi
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const timestamp = date.toISOString().replace(/[:.]/g, '-');
    
    // Markdown içeriği oluştur
    const markdownContent = `---
name: ${name}
email: ${email}
phone: ${phone || 'Belirtilmedi'}
subject: ${subject}
date: ${date.toISOString()}
ip: ${ip}
---

# İletişim Mesajı: ${subject}

**Gönderen:** ${name}  
**E-posta:** ${email}  
**Telefon:** ${phone || 'Belirtilmedi'}  
**Tarih:** ${date.toLocaleString('tr-TR')}  
**IP Adresi:** ${ip}

## Mesaj İçeriği

${message}
`;
    
    // messages klasörü yoksa oluştur
    const messagesDir = path.join(process.cwd(), 'src/content/messages');
    if (!fs.existsSync(messagesDir)) {
      fs.mkdirSync(messagesDir, { recursive: true });
    }
    
    // Dosya adı: messages/YYYY-MM-DD-timestamp-konu.md
    const fileName = `${formattedDate}-${timestamp}-${subject.toLowerCase().replace(/\s+/g, '-')}.md`;
    const filePath = path.join(messagesDir, fileName);
    
    // Dosyayı yaz
    fs.writeFileSync(filePath, markdownContent);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Mesajınız başarıyla kaydedildi.'
    });
    
  } catch (error) {
    console.error('Mesaj kaydedilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Mesaj kaydedilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}