import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { localePath } from '@/lib/i18n'
import { getT, type Locale } from '@/lib/translations'

interface Props {
  locale: Locale
  section: 'about' | 'products' | 'contact' | 'privacy'
  title: string
  children?: React.ReactNode
  image?: string
  position?: string
}

export function PageMasthead({ locale, section, title, children, image, position }: Props) {
  const t = getT(locale)
  const links = [
    { page: 'products', label: t.footer.services },
    { page: 'about', label: t.about.label },
    { page: 'contact', label: t.footer.contactLink },
  ]

  return (
    <header className={image ? 'masthead' : 'masthead masthead-plain'}>
      {image && <div className="masthead-photo">
        <Image src={image} alt="" fill priority sizes="(max-width: 720px) 100vw, 63vw" style={{ objectPosition: position }} />
      </div>}
      <div className="inner-wrap masthead-nav">
        <Link href={localePath(locale)} aria-label={t.footer.home}><Logo variant="white" width={136} /></Link>
        <nav aria-label={t.footer.quickLinks}>
          {links.map(({ page, label }) => (
            <Link key={page} href={localePath(locale, '/' + page)} aria-current={section === page ? 'location' : undefined}>{label}</Link>
          ))}
        </nav>
      </div>
      <div className="inner-wrap masthead-copy">
        <p className="page-kicker">{t.hero.tagline}</p>
        <h1>{title}</h1>
        {children && <p className="masthead-intro">{children}</p>}
      </div>
    </header>
  )
}

export function ContactBand({ locale, title, children, message }: {
  locale: Locale
  title: string
  children: React.ReactNode
  message: string
}) {
  return (
    <section className="contact-band">
      <div className="inner-wrap contact-band-inner">
        <div><h2>{title}</h2><p>{children}</p></div>
        <div className="contact-band-actions">
          <a href="tel:+905511672228">+90 551 167 22 28 ↗</a>
          <Link className="editorial-link" href={localePath(locale, '/contact')}>{message} ↗</Link>
        </div>
      </div>
    </section>
  )
}
