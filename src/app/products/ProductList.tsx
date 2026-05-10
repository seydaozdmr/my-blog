'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMarkdownContent } from '@/hooks/useMarkdownContent'
import { FadeInSection } from '@/components/ui/FadeInSection'

interface Service {
  id: string
  title?: string
  description?: string
  content: string
  image?: string
  slug: string
  key: string
  comingSoon?: boolean
  imagePosition?: string
}

interface ProductListProps {
  services: Service[]
}

function ServiceArticle({ service }: { service: Service }) {
  const { htmlContent } = useMarkdownContent(service.content)

  return (
    <article id={service.key} className="scroll-mt-24">
      <FadeInSection delay={0.1}>
        {/* Featured Image */}
        <div className="relative w-full h-72 md:h-96 rounded-t-2xl overflow-hidden">
          {service.image && (
            <Image
              src={service.image}
              alt={service.title || ''}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              style={{ objectFit: 'cover', objectPosition: service.imagePosition ?? 'center' }}
              className="hover:scale-105 transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </FadeInSection>

      {/* Content area */}
      <FadeInSection delay={0.2}>
        <div className="bg-white rounded-b-2xl p-8 md:p-12 shadow-sm">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            <Link href={`/products/${service.slug}`} className="hover:text-green-700 transition-colors">
              {service.title}
            </Link>
          </h2>

          {/* Meta line */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Antalya
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Profesyonel Hizmet
            </span>
          </div>

          {/* Description lead */}
          {service.description && (
            <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-green-500 pl-5 italic">
              {service.description}
            </p>
          )}

          {/* Markdown content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-li:text-gray-600
              prose-strong:text-gray-800
              prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 text-sm"
            >
              Bu Hizmet İçin Teklif Al
            </Link>
            <a
              href="tel:+905511672228"
              className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Hemen Ara
            </a>
          </div>
        </div>
      </FadeInSection>
    </article>
  )
}

function ComingSoonArticle({ service }: { service: Service }) {
  return (
    <article id={service.key} className="scroll-mt-24">
      <FadeInSection delay={0.1}>
        <div className="relative rounded-2xl overflow-hidden border border-dashed border-green-200">

          {/* Blurred image background */}
          <div className="relative w-full h-56 md:h-72 overflow-hidden">
            {service.image && (
              <Image
                src={service.image}
                alt={service.title || ''}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                style={{ objectFit: 'cover', objectPosition: service.imagePosition ?? 'center' }}
                className="scale-110 blur-sm brightness-50"
              />
            )}
            <div className="absolute inset-0 bg-[#1a2e1a]/70" />

            {/* Centered badge */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              {/* Lock icon */}
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              {/* "Çok Yakında" pill */}
              <span className="inline-flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Çok Yakında
              </span>
            </div>
          </div>

          {/* Content area – lightly muted */}
          <div className="bg-white/80 p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 leading-tight">
                {service.title}
              </h2>
              <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Yakında
              </span>
            </div>

            {service.description && (
              <p className="text-base text-gray-400 leading-relaxed italic border-l-4 border-green-200 pl-4 mb-6">
                {service.description}
              </p>
            )}

            {/* Placeholder lines */}
            <div className="space-y-2.5 mb-8 select-none" aria-hidden="true">
              {[80, 95, 65, 90, 70].map((w, i) => (
                <div key={i} className={`h-3 rounded-full bg-gray-100`} style={{ width: `${w}%` }} />
              ))}
            </div>

            {/* Disabled CTA */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
              <button
                disabled
                className="bg-gray-200 text-gray-400 font-bold py-3 px-8 rounded-full text-sm cursor-not-allowed select-none"
              >
                Yakında Hizmetinizdeyiz
              </button>
              <span className="text-xs text-gray-400 italic">Bildirim almak için bizi arayabilirsiniz.</span>
            </div>
          </div>
        </div>
      </FadeInSection>
    </article>
  )
}

export function ProductList({ services }: ProductListProps) {
  const activeServices = services.filter(s => !s.comingSoon)
  const comingSoonServices = services.filter(s => s.comingSoon)

  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <FadeInSection>
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-600 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Ana Sayfa
          </Link>
          <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-gray-700 font-medium">Hizmetlerimiz</span>
        </nav>
      </FadeInSection>

      {/* Quick nav */}
      <FadeInSection>
        <nav className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Hızlı Erişim
          </h3>
          <div className="flex flex-wrap gap-3">
            {activeServices.map((service, idx) => (
              <Link
                key={service.id}
                href={`/products/${service.slug}`}
                className="inline-flex items-center gap-2 bg-[#f5f2ed] hover:bg-green-600 hover:text-white text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
              >
                <span className="w-6 h-6 bg-green-600/10 text-green-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-white/20">
                  {idx + 1}
                </span>
                {service.title}
              </Link>
            ))}
            {comingSoonServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.key}`}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-400 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 cursor-default"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                {service.title}
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Yakında</span>
              </a>
            ))}
          </div>
        </nav>
      </FadeInSection>

      {/* Active service articles */}
      {activeServices.map((service) => (
        <ServiceArticle key={service.id} service={service} />
      ))}

      {/* Coming soon divider */}
      {comingSoonServices.length > 0 && (
        <FadeInSection>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
            <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-5 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Çok Yakında
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
          </div>
        </FadeInSection>
      )}

      {/* Coming soon articles */}
      {comingSoonServices.map((service) => (
        <ComingSoonArticle key={service.id} service={service} />
      ))}
    </div>
  )
}
