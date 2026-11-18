import type { Metadata } from 'next'
import { getAlternates, socialImages } from '@/lib/i18n'
import { ProductsPage } from '@/components/pages/ProductsPage'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri. Uzman ekibimizle 7/24 hizmetinizdeyiz.",
  keywords: [
    'ağaç budama', 'ağaç kesme', 'antalya ağaç budama', 'palmiye budama', 'kontrollü ağaç kesimi', 'acil durum ağaç kesimi',
    'tree trimming Antalya', 'tree pruning Antalya', 'palm tree service Antalya', 'arborist services Antalya', 'tree cutting Turkey',
    'обрезка деревьев Анталья', 'спил деревьев Анталья', 'обрезка пальм Анталья', 'уход за деревьями Турция',
  ],
  alternates: getAlternates('tr', '/products'),
  openGraph: {
    images: socialImages('tr'),
    title: 'Hizmetlerimiz | CrownPro',
    description: "Antalya'da profesyonel ağaç budama, kesme ve bakım hizmetleri.",
    url: 'https://antalyaagacbudama.com/products',
  },
}

export default function Page() { return <ProductsPage locale="tr" /> }
