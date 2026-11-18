import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'İletişim',
  description: "CrownPro ile iletişime geçin. Antalya ağaç budama ve bakım hizmetlerimiz için ücretsiz fiyat teklifi alın. 7/24 hizmetinizdeyiz.",
  alternates: getAlternates('tr', '/contact'),
  openGraph: {
    images: socialImages('tr'),
    title: 'İletişim | CrownPro',
    description: "CrownPro ile iletişime geçin. Ücretsiz fiyat teklifi için hemen arayın.",
    url: 'https://antalyaagacbudama.com/contact',
  },
};

export default function Page() { return <ContactPage locale="tr" /> }
