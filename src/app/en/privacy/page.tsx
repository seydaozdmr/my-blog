import { getAlternates } from '@/lib/i18n'
import { Metadata } from 'next'
import { PageMasthead } from '@/components/layout/PageMasthead'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'CrownPro privacy policy — information about your personal data and cookie usage.',
  alternates: getAlternates('en', '/privacy'),
  robots: { index: false, follow: false },
}

export default function EnPrivacyPage() {
  return (
    <>
      <PageMasthead locale="en" section="privacy" title="Privacy Policy" />
      <div className="inner-wrap policy-page">
        <div className="reading-column space-y-8">
          <div>
            <p className="text-sm text-stone-600">Last updated: 18 November 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">1. Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              This privacy policy explains how <strong>CrownPro</strong> (<a href="https://antalyaagacbudama.com" className="text-[#37543d] hover:underline">antalyaagacbudama.com</a>) collects, uses and protects data belonging to visitors of this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">2. Data Collected</h2>
            <h3 className="font-semibold text-gray-700">Contact Form</h3>
            <p className="text-gray-600 leading-relaxed">
              The name, email address, optional phone number, subject and message entered in the contact form are used to prepare a draft in your email app. The form does not send these details to the website server or save them to a file. If you send the draft in your email app, we receive your message and use it to respond to your enquiry.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4">IP Address</h3>
            <p className="text-gray-600 leading-relaxed">
              The form does not make a submission request to this website, so it does not create a form-submission IP record.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">3. Cookie Usage</h2>
            <p className="text-gray-600 leading-relaxed">
              This website uses <strong>one functional cookie only</strong>:
            </p>
            <div className="overflow-x-auto bg-[#eae9dd] p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="pb-2 font-semibold">Cookie Name</th>
                    <th className="pb-2 font-semibold">Purpose</th>
                    <th className="pb-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700">
                    <td className="pt-3 font-mono text-[#37543d]">NEXT_LOCALE</td>
                    <td className="pt-3">Remember your language preference</td>
                    <td className="pt-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              This cookie saves the language (Turkish, English or Russian) automatically selected based on your browser settings. It contains no personal data and is not used for tracking, advertising or analytics.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can change your preference with the language buttons or delete the cookie in your browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">4. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              This website does not use Google Analytics, Facebook Pixel or similar tracking tools. Loading the Google Maps embed on the contact page connects your browser to Google. Email you send is transmitted through your email provider. Map, email and social media services process data under their own privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">5. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              Under GDPR you have the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Right to access your data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to rectification</li>
              <li>Right to object to processing</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To exercise your rights: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-[#37543d] hover:underline">ruzgarozdemir@crownprotr.com</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              CrownPro — Muratpaşa, Antalya, Turkey<br />
              Email: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-[#37543d] hover:underline">ruzgarozdemir@crownprotr.com</a><br />
              Phone: <a href="tel:+905511672228" className="text-[#37543d] hover:underline">+90 551 167 22 28</a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
