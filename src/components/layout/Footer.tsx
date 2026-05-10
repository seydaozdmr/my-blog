import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { getT, Locale } from '@/lib/translations'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/crownprotr/',
    icon: FaInstagram,
    hoverColor: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400',
    bg: 'bg-white/5',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@crownprotr',
    icon: FaTiktok,
    hoverColor: 'hover:bg-black',
    bg: 'bg-white/5',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/crownprotr',
    icon: FaFacebook,
    hoverColor: 'hover:bg-[#1877f2]',
    bg: 'bg-white/5',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@crownprotr',
    icon: FaYoutube,
    hoverColor: 'hover:bg-[#ff0000]',
    bg: 'bg-white/5',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/905511672228',
    icon: FaWhatsapp,
    hoverColor: 'hover:bg-[#25d366]',
    bg: 'bg-white/5',
  },
]

interface FooterProps {
  locale?: Locale
  basePath?: string
}

export function Footer({ locale = 'tr', basePath = '' }: FooterProps) {
  const t = getT(locale)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
          <div>
            <Link href={basePath || '/'} className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Logo variant="white" width={180} />
            </Link>
            <p className="text-gray-400 mb-4">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Muratpaşa, Antalya</p>
              <p className="mb-2">Antalya, Türkiye</p>
              <p className="mb-2">
                <a href="tel:+905511672228" className="hover:text-white transition-colors">
                  +90 (551) 167 22 28
                </a>
              </p>
              <p>
                <a href="mailto:ruzgarozdemir@crownprotr.com" className="hover:text-white transition-colors">
                  ruzgarozdemir@crownprotr.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={basePath || '/'} className="hover:text-white transition-colors">{t.footer.home}</Link></li>
              <li><Link href={`${basePath}/products`} className="hover:text-white transition-colors">{t.footer.services}</Link></li>
              <li><Link href={`${basePath}/contact`} className="hover:text-white transition-colors">{t.footer.contactLink}</Link></li>
              <li>
                <a href="tel:+905511672228" className="hover:text-white transition-colors">
                  {t.footer.getQuote}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm tracking-wide uppercase font-medium">
              {t.footer.follow}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, hoverColor, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`
                    group relative w-12 h-12 rounded-2xl ${bg} border border-white/10
                    flex items-center justify-center
                    transition-all duration-300
                    ${hoverColor} hover:border-transparent hover:scale-110 hover:shadow-lg
                  `}
                >
                  <Icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs font-medium px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-5 text-center text-gray-600 text-sm flex flex-col sm:flex-row items-center justify-center gap-3">
          <p>© {currentYear} CrownPro — {t.footer.rights}</p>
          <span className="hidden sm:inline">·</span>
          <Link href={`${basePath}/privacy`} className="hover:text-gray-400 transition-colors">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
