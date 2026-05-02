import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'CrownPro hakkinda kisaca bilgi'
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">Hakkimizda</h1>
      <p className="text-lg leading-8 text-slate-600">
        CrownPro, agac bakimi ve budama hizmetleri sunan ekip icin hazirlanan
        Next.js uygulamasidir. Bu sayfa gecici olarak sadeleştirildi.
      </p>
    </section>
  )
}
