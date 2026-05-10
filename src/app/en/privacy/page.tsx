import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'CrownPro privacy policy — information about your personal data and cookie usage.',
  robots: { index: false, follow: false },
}

export default function EnPrivacyPage() {
  return (
    <div className="bg-[#f5f2ed] min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-8">
          <Link href="/en" className="text-sm text-green-700 hover:underline">← Home</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: May 2025</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">1. Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              This privacy policy explains how <strong>CrownPro</strong> (<a href="https://antalyaagacbudama.com" className="text-green-700 hover:underline">antalyaagacbudama.com</a>) collects, uses and protects data belonging to visitors of this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">2. Data Collected</h2>
            <h3 className="font-semibold text-gray-700">Contact Form</h3>
            <p className="text-gray-600 leading-relaxed">
              When you submit our contact form, the following information is collected: full name, email address, phone number (optional), subject and message content. This information is used solely to respond to your enquiry and is not shared with third parties.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4">IP Address</h3>
            <p className="text-gray-600 leading-relaxed">
              Your IP address is recorded when you submit the contact form to prevent spam and abuse. This information is retained for security purposes only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">3. Cookie Usage</h2>
            <p className="text-gray-600 leading-relaxed">
              This website uses <strong>one functional cookie only</strong>:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
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
                    <td className="pt-3 font-mono text-green-700">NEXT_LOCALE</td>
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
              As this cookie is necessary for the basic functionality of the site, it falls under the &quot;strictly necessary cookie&quot; category under GDPR and does not require separate consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">4. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              This website does not use Google Analytics, Facebook Pixel or similar tracking tools. Social media links (Instagram, Facebook, YouTube, TikTok, WhatsApp) are governed by their own respective privacy policies.
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
              To exercise your rights: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-700 hover:underline">ruzgarozdemir@crownprotr.com</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              CrownPro — Muratpaşa, Antalya, Turkey<br />
              Email: <a href="mailto:ruzgarozdemir@crownprotr.com" className="text-green-700 hover:underline">ruzgarozdemir@crownprotr.com</a><br />
              Phone: <a href="tel:+905511672228" className="text-green-700 hover:underline">+90 551 167 22 28</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
