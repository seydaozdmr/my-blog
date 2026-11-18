import { ServiceDetailPage, serviceMetadata, serviceParams } from '@/components/pages/ServiceDetailPage'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false
export function generateStaticParams() { return serviceParams('ru') }
export async function generateMetadata({ params }: Props) {
  return serviceMetadata((await params).slug, 'ru')
}
export default async function Page({ params }: Props) {
  return <ServiceDetailPage slug={(await params).slug} locale="ru" />
}
