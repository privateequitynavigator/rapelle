'use client'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/rapelle-logo-500x500.png" alt="Rapelle" className="h-9 w-9" />
            <span className="text-xl font-bold text-gray-900">Rapelle</span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-32">
        <h1 className="text-5xl font-black text-gray-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-gray-500">Last Updated: May 22, 2026</p>

        <div className="mt-12 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By installing, accessing, or using the Rapelle browser extension ("Extension," "Service"), you agree to 
              be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Extension.
            </p>
            <p className="mt-4">
              These Terms constitute a legally binding agreement between you and Rapelle ("we," "us," or "our").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p>
              Rapelle is a browser extension that allows users to:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Save ChatGPT conversations locally on their device</li>
              <li>Store files and documents in local browser storage</li>
              <li>Search and organize saved content using BM25 search algorithm</li>
              <li>Restore conversation context in new ChatGPT sessions</li>
            </ul>
            <p className="mt-4">
              All data is stored locally on your device. We do not operate servers or cloud storage for user data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. License and Use Rights</h2>
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
              revocable license to use the Extension for your personal, non-commercial use.
            </p>
            <p className="mt-4"><strong>You may NOT:</strong></p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Modify, reverse engineer, decompile, or disassemble the Extension</li>
              <li>Use the Extension for illegal purposes or to violate any laws</li>
              <li>Interfere with or disrupt the Extension's functionality</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Remove, alter, or obscure any proprietary notices</li>
              <li>Use the Extension to infringe on intellectual property rights of others</li>
              <li>Resell, redistribute, or sublicense the Extension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p>You are solely responsible for:</p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>The security of your device and browser where the Extension is installed</li>
              <li>All content you choose to save using the Extension</li>
              <li>Backing up important data (we provide no backup services)</li>
              <li>Ensuring your use of the Extension complies with all applicable laws</li>
              <li>Your interactions with third-party services like ChatGPT</li>
              <li>Maintaining the confidentiality of any sensitive information you save</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="font-semibold uppercase">
              THE EXTENSION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="mt-4">
              We disclaim all warranties, including but not limited to:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties regarding accuracy, reliability, or availability of the Extension</li>
              <li>Warranties that the Extension will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding data preservation, storage integrity, or compatibility</li>
            </ul>
            <p className="mt-4">
              We make no representations about the suitability, reliability, or accuracy of the Extension for any purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="font-semibold uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OR 
              INABILITY TO USE THE EXTENSION.
            </p>
            <p className="mt-4">
              This includes but is not limited to:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Loss of data, files, or conversations</li>
              <li>Device damage, malfunction, or security breaches</li>
              <li>Browser crashes, conflicts, or compatibility issues</li>
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Damages resulting from third-party services (e.g., ChatGPT/OpenAI)</li>
            </ul>
            <p className="mt-4 font-semibold">
              Our total liability to you for all claims shall not exceed $10 USD or the amount you paid for the Extension 
              (which is $0), whichever is greater.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Loss and Backups</h2>
            <p>
              <strong>CRITICAL NOTICE:</strong> Because all data is stored locally on your device, you acknowledge and agree that:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>We cannot recover, restore, or retrieve lost data</li>
              <li>Device failure, theft, damage, or browser issues may result in permanent data loss</li>
              <li>We provide no backup, cloud storage, or data recovery services</li>
              <li>You are solely responsible for backing up important information</li>
              <li>We have no liability for any data loss, regardless of cause</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p>
              The Extension interacts with ChatGPT, a service operated by OpenAI. Your use of ChatGPT is subject to 
              OpenAI's terms of service and privacy policy. We are not responsible for:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>OpenAI's services, availability, or changes to ChatGPT</li>
              <li>OpenAI's data handling, privacy practices, or terms</li>
              <li>Any issues, damages, or disputes arising from your use of ChatGPT</li>
              <li>Changes to ChatGPT that affect Extension functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p>
              The Extension, including its code, design, features, and documentation, is owned by Rapelle and is protected 
              by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-4">
              You retain all rights to content you create and save using the Extension. We claim no ownership or rights 
              to your saved conversations, files, or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications to Service</h2>
            <p>
              We reserve the right to:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Modify, suspend, or discontinue the Extension at any time without notice</li>
              <li>Update features, functionality, or compatibility requirements</li>
              <li>Change these Terms at any time (updated "Last Updated" date will reflect changes)</li>
            </ul>
            <p className="mt-4">
              Continued use of the Extension after changes constitutes acceptance of modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p>
              You may stop using the Extension at any time by uninstalling it from your browser. We may terminate or 
              suspend your access to the Extension immediately, without notice, for any reason, including violation of 
              these Terms.
            </p>
            <p className="mt-4">
              Upon termination, all data stored locally will remain on your device until you manually delete it or 
              uninstall the Extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Rapelle, its developers, and affiliates from any claims, 
              damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Your use or misuse of the Extension</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Content you save, store, or process using the Extension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law and Disputes</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without 
              regard to its conflict of law principles.
            </p>
            <p className="mt-4">
              Any disputes arising from these Terms or the Extension shall be resolved through binding arbitration in 
              accordance with the rules of [Arbitration Organization], or in the courts of [Your Jurisdiction] if 
              arbitration is not available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or 
              eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and Data Disclaimer, constitute the entire agreement between 
              you and Rapelle regarding the Extension and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:private.equity.navigator@gmail.com" className="text-[#00c76a] font-semibold hover:underline">
                private.equity.navigator@gmail.com
              </a>
            </p>
          </section>

          <section className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ Important Acknowledgment</h2>
            <p className="font-semibold">
              BY USING RAPELLE, YOU ACKNOWLEDGE THAT:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>All data is stored locally on your device</li>
              <li>We cannot recover lost data</li>
              <li>You are responsible for data backups</li>
              <li>The Extension is provided "as is" with no warranties</li>
              <li>We have limited liability for any damages</li>
              <li>You accept all risks associated with local data storage</li>
            </ul>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <a href="/" className="inline-flex items-center gap-2 text-[#00c76a] font-semibold hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}