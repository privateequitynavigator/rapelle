'use client'

export default function PrivacyPolicy() {
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
        <h1 className="text-5xl font-black text-gray-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-500">Last Updated: May 22, 2026</p>

        <div className="mt-12 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p>
              Rapelle ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we handle information when you use the Rapelle browser extension (the "Extension").
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Key Point: Rapelle does not collect, store, or transmit any personal data to our servers. All data 
              remains local on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Do NOT Collect</h2>
            <p>
              Rapelle does not collect, store, process, or transmit any of the following:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Personal information (name, email address, phone number, address)</li>
              <li>ChatGPT conversation content</li>
              <li>Uploaded files or documents</li>
              <li>Browsing history or website activity</li>
              <li>IP addresses or geolocation data</li>
              <li>Device information or browser fingerprints</li>
              <li>Usage analytics or telemetry</li>
              <li>Cookies or tracking technologies</li>
              <li>Payment information (the Extension is free)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Data Storage</h2>
            <p>
              The Extension stores data locally on your device using IndexedDB, including:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Saved ChatGPT conversations</li>
              <li>Files you choose to save (PDFs, documents, spreadsheets, etc.)</li>
              <li>Search indices for content retrieval</li>
              <li>Extension settings and preferences</li>
            </ul>
            <p className="mt-4">
              <strong>This data never leaves your device.</strong> It is stored in your browser's local storage 
              and is accessible only to you through the Extension interface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p>
              Rapelle does not integrate with, share data with, or transmit information to any third-party services, 
              including analytics providers, advertising networks, or cloud storage platforms.
            </p>
            <p className="mt-4">
              The Extension interacts with ChatGPT (operated by OpenAI) only through your existing browser session. 
              We do not create separate API connections or intercept communications with OpenAI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p>
              Because all data is stored locally:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Your device security determines your data security</li>
              <li>Use strong device passwords and enable disk encryption</li>
              <li>Keep your browser and operating system updated</li>
              <li>Protect physical access to your device</li>
              <li>Be aware that anyone with access to your unlocked device may access saved data</li>
            </ul>
            <p className="mt-4">
              We employ standard security practices in our Extension code, but cannot control the security of your 
              local device or browser environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p>
              Rapelle does not knowingly collect information from children under 13 years of age. The Extension is not 
              directed at children, and we do not have mechanisms to determine the age of users since we collect no 
              personal information.
            </p>
            <p className="mt-4">
              If you are a parent or guardian and believe your child has used the Extension, you can remove all stored 
              data by uninstalling the Extension from their browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p>
              Because we do not collect or store your data on our servers, traditional data rights (such as data access, 
              portability, or deletion requests) do not apply in the usual sense. However, you have complete control:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li><strong>Access:</strong> View all stored data through the Extension interface or browser developer tools</li>
              <li><strong>Deletion:</strong> Delete individual items or all data through the Extension or by uninstalling it</li>
              <li><strong>Export:</strong> Export your data using the Extension's export features</li>
              <li><strong>Control:</strong> Choose what conversations and files to save</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Tracking or Cookies</h2>
            <p>
              Rapelle does not use cookies, tracking pixels, or any similar technologies. We do not track your behavior, 
              create user profiles, or engage in targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Users</h2>
            <p>
              Since all data is stored locally on your device and we do not operate servers or process data, international 
              data transfer regulations (such as GDPR, CCPA) apply differently. Your data never crosses borders because it 
              never leaves your device.
            </p>
            <p className="mt-4">
              For users in the European Economic Area, United Kingdom, or other jurisdictions with data protection laws: 
              we do not act as a data controller or processor because we do not collect or process your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be indicated by the "Last Updated" date 
              at the top of this page. We encourage you to review this Privacy Policy periodically.
            </p>
            <p className="mt-4">
              If we make material changes that affect how we handle data (such as introducing server-side storage), we will 
              provide prominent notice through the Extension or through other appropriate channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Warranty Regarding Privacy</h2>
            <p>
              While we design Rapelle to respect your privacy by storing data locally only, we cannot guarantee:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>The security of data stored on your device</li>
              <li>Protection against device theft, loss, or unauthorized access</li>
              <li>Browser vulnerabilities or third-party extension conflicts</li>
              <li>Changes to browser storage APIs or policies</li>
            </ul>
            <p className="mt-4">
              Users accept responsibility for maintaining the security of their devices and local data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:private.equity.navigator@gmail.com" className="text-[#00c76a] font-semibold hover:underline">
                private.equity.navigator@gmail.com
              </a>
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
            <p className="font-semibold">
              In short: Rapelle collects nothing. Your data stays on your device. We have no servers, no tracking, 
              no analytics, and no way to access your information. Your privacy is protected by design because we 
              simply don't have access to your data.
            </p>
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