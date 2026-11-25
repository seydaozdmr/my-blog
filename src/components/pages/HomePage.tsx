import Image from 'next/image'
import Link from 'next/link'
import { HeroSlider } from '@/components/hero/HeroSlider'
import { Logo } from '@/components/ui/Logo'
import { localePath } from '@/lib/i18n'
import { homeCopy } from '@/lib/homeCopy'
import { getAllServices } from '@/lib/mdUtils'
import { getT, type Locale } from '@/lib/translations'
import '../../../public/tirmanis/anasayfa.css'

const featured = [
  { slug: 'guvenli-agac-kesimi', image: 'IMG_0029', width: 1440 },
  { slug: 'palmiye-budama', image: 'IMG_1612', width: 1080 },
  { slug: 'agac-kablolama-destekleme', image: 'IMG_1378', width: 1440 },
]

export async function HomePage({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const copy = homeCopy[locale]
  const services = await getAllServices(locale)
  const selected = featured.flatMap(({ slug, image, width }, i) => {
    const service = services.find(item => item.slug === slug && !item.comingSoon)
    return service ? [{ slug, image, width, title: copy.services[i], description: copy.descriptions[i], link: service.title }] : []
  })

  return (
    <div className="field-home" id="baslangic">
      <a className="skip" href="#hizmetler">{copy.discover}</a>
      <div className="opening">
        <header className="wrap">
          <Link className="brand" href={localePath(locale)} aria-label={t.footer.home}><Logo variant="white" width={144} /></Link>
          <nav aria-label={t.footer.quickLinks}><a href="#hizmetler">{t.footer.services}</a><a href="#ekip">{copy.team}</a></nav>
          <a className="header-link" href="#iletisim">{copy.contact}<span aria-hidden="true">↗</span></a>
        </header>
        <HeroSlider locale={locale}>
          <div className="hero-content wrap">
            <p className="place"><span aria-hidden="true" />{t.hero.tagline}</p>
            <h1 id="hero-title">{copy.headline[0]}<br /><em>{copy.headline[1]}</em></h1>
            <p className="lead">{copy.lead}</p>
            <a className="action" href="#hizmetler">{copy.discover}<span aria-hidden="true">↓</span></a>
          </div>
        </HeroSlider>
      </div>
      <dl className="facts wrap">
        <div><dt>{locale === 'ru' ? 'Года опыта' : t.stats.experience}</dt><dd>4</dd></div>
        <div><dt>{t.stats.projects}</dt><dd>500<span>+</span></dd></div>
        <div><dt>{t.stats.emergency}</dt><dd>{locale === 'tr' ? '7' : '24'}<span>/</span>{locale === 'tr' ? '24' : '7'}</dd></div>
      </dl>
      <section id="hizmetler" className="services wrap">
        <div className="section-heading">
          <h2>{copy.expertise[0]} <em>{copy.expertise[1]}</em></h2>
          <Link className="ink-link" href={localePath(locale, '/products')}>{t.services.viewAll} ↗</Link>
        </div>
        <div className="service-grid interactive native-services">
          <div className="service-plate" aria-hidden="true">
            {selected[0] && <Image src={'/new_images/' + selected[0].image + '.webp'} alt="" width={selected[0].width} height={1920} sizes="45vw" />}
          </div>
          <div className="service-list">
            {selected.map((service, index) => (
              <details key={service.slug} name="bakim" open={index === 0}>
                <summary>{service.title}<span className="toggle" aria-hidden="true" /></summary>
                <div className="service-body">
                  <Image src={'/new_images/' + service.image + '.webp'} alt={service.title} width={service.width} height={1920} sizes="(max-width: 760px) 90vw, 45vw" />
                  <p>{service.description}</p>
                  <Link className="ink-link" href={localePath(locale, '/products/' + service.slug)}>{service.link} ↗</Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="ekip" className="team">
        <div className="team-inner wrap">
          <div className="team-copy">
            <p className="kicker">{copy.teamLabel}</p>
            <h2>{copy.teamTitle[0]} <em>{copy.teamTitle[1]}</em></h2>
            <p>{copy.teamBody}</p><Link className="ink-link" href={localePath(locale, '/about')}>{copy.teamLink} ↗</Link>
          </div>
          <figure><Image src="/new_images/IMG_2053.webp" alt={copy.teamLabel} width={1440} height={1920} sizes="(max-width: 760px) 90vw, 43vw" /></figure>
        </div>
      </section>
      <section id="iletisim" className="home-contact">
        <div className="wrap foot-inner">
          <div><p className="kicker">{copy.visit}</p><h2>{copy.contactTitle[0]} <em>{copy.contactTitle[1]}</em></h2></div>
          <div className="contact"><a href="tel:+905511672228">+90 551 167 22 28 ↗</a><Link className="ink-link" href={localePath(locale, '/contact')}>{t.footer.contactLink} ↗</Link></div>
        </div>
      </section>
    </div>
  )
}
