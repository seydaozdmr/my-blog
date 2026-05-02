import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  try {
    const headersList = headers()
    const forwardedFor = (await headersList).get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown'

    const data = await request.json()
    const { name, email, phone, subject, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      )
    }

    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0]
    const timestamp = date.toISOString().replace(/[:.]/g, '-')

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
`

    const messagesDir = path.join(process.cwd(), 'src/content/messages')
    if (!fs.existsSync(messagesDir)) {
      fs.mkdirSync(messagesDir, { recursive: true })
    }

    const fileName = `${formattedDate}-${timestamp}-${subject.toLowerCase().replace(/\s+/g, '-')}.md`
    const filePath = path.join(messagesDir, fileName)
    fs.writeFileSync(filePath, markdownContent)

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}
