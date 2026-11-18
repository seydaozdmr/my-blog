import { SiteLayout } from '@/components/layout/SiteLayout'
export { siteMetadata as metadata } from '@/lib/siteMetadata'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="tr">{children}</SiteLayout>
}
