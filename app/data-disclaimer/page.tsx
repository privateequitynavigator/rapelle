'use client'

export default function DataDisclaimer() {
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
        <h1 className="text-5xl font-black text-gray-900">Data Disclaimer</h1>
        <p className="mt-4 text-sm text-gray-500">Last Updated: May 22, 2026</p>

        <div className="mt-12 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Storage Only</h2>
            <p>
              Rapelle stores ALL data locally on your device using IndexedDB, a browser-native database system. 
              <strong> We do not have servers, cloud storage, or any external infrastructure that collects, stores, or processes your data.</strong>
            </p>
            <p className="mt-4">
              This means:
            </p>
            <ul className="mt-2 ml-6 space-y-2 list-disc">
              <li>Your saved ChatGPT conversations never leave your computer</li>
              <li>Your uploaded files remain on your local device only</li>
              <li>We cannot access, view, or retrieve any of your saved content</li>
              <li>Your data is as secure as your device and browser security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Store Locally</h2>
            <p>
              When you use Rapelle, the following data is stored in your browser's IndexedDB:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li><strong>ChatGPT Conversations:</strong> Full conversation text, timestamps, and metadata</li>
              <li><strong>Uploaded Files:</strong> PDFs, documents, spreadsheets, and other files you manually save</li>
              <li><strong>Search Index:</strong> BM25 search index for fast retrieval</li>
              <li><strong>User Preferences:</strong> Extension settings and armed chat selections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do NOT Collect</h2>
            <p>
              Rapelle does not collect, transmit, or store any of the following:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Analytics or usage data</li>
              <li>Personal information (name, email, IP address)</li>
              <li>Conversation content or file contents</li>
              <li>Browsing history or activity tracking</li>
              <li>Device information or system specifications</li>
              <li>Any data that leaves your local device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p>
              Since all data is stored locally on your device:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li><strong>Your device security is your data security.</strong> Use strong passwords, enable disk encryption, and keep your system updated.</li>
              <li><strong>Browser security matters.</strong> Keep your browser updated and use security extensions if needed.</li>
              <li><strong>Physical access risks.</strong> Anyone with access to your unlocked device can potentially access your saved data.</li>
              <li><strong>No account system.</strong> There are no passwords, accounts, or authentication systems because there is nothing to authenticate against.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Deletion</h2>
            <p>
              You have complete control over your data:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li><strong>Delete individual items:</strong> Remove specific conversations or files from the extension interface</li>
              <li><strong>Clear all data:</strong> Uninstalling the extension will remove all stored data from IndexedDB</li>
              <li><strong>Browser controls:</strong> You can clear site data through your browser settings</li>
              <li><strong>No server-side deletion needed:</strong> Since we don't store anything, there's nothing to request deletion of</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p>
              Rapelle interacts with ChatGPT (OpenAI) only through your existing browser session. We do not:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Create our own API connections to OpenAI</li>
              <li>Intercept or modify your ChatGPT communications</li>
              <li>Send your ChatGPT data to any third-party services</li>
              <li>Share data with analytics providers, advertisers, or other parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Local Storage</h2>
            <p>
              Because Rapelle uses local-only storage:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li><strong>No cross-device sync:</strong> Data saved on one device is not available on other devices</li>
              <li><strong>No cloud backup:</strong> If your device is lost, stolen, or damaged, your saved data cannot be recovered</li>
              <li><strong>Browser-specific:</strong> Data is tied to the specific browser where Rapelle is installed</li>
              <li><strong>Storage limits:</strong> Subject to browser IndexedDB storage quotas (typically several GB)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Liability for Data Loss</h2>
            <p>
              <strong>IMPORTANT:</strong> Because all data is stored locally on your device, Rapelle and its developers are not responsible for:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Data loss due to device failure, theft, or damage</li>
              <li>Data corruption or browser issues</li>
              <li>Accidental deletion by the user</li>
              <li>Storage quota limitations imposed by the browser</li>
              <li>Browser updates that affect IndexedDB functionality</li>
            </ul>
            <p className="mt-4 font-semibold">
              Users are responsible for backing up important data through export features or other means.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Source Transparency</h2>
            <p>
              Rapelle's code is open and inspectable. You can:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Review the source code to verify our local-storage claims</li>
              <li>Inspect network activity to confirm no data transmission</li>
              <li>Audit the extension's permissions and data access</li>
              <li>Monitor IndexedDB directly through browser developer tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
            <p>
              We may update this Data Disclaimer to reflect changes in our practices or for legal compliance. 
              The "Last Updated" date at the top will indicate when changes were made. Continued use of Rapelle 
              after updates constitutes acceptance of the revised disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              For questions about data storage or this disclaimer, contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:private.equity.navigator@gmail.com" className="text-[#00c76a] font-semibold hover:underline">
                private.equity.navigator@gmail.com
              </a>
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