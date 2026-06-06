'use client'

export default function Changelog() {
  const updates = [
    {
      version: 'v1.1.0',
      date: 'June 2026',
      label: 'Update',
      title: 'Claude support added',
      description:
        'Rapelle now works with Claude in addition to ChatGPT. You can save conversations from Claude, browse them in the Rapelle panel, and reload their context into new Claude or ChatGPT threads.',
      items: [
        'Save Claude conversations with one click — full messages, code blocks, and attached files',
        'Arm a saved Claude chat to automatically inject its context into your next Claude or ChatGPT conversation',
        'Context injection works the same way on Claude as it does on ChatGPT — silent, automatic, and fires on the first message',
        'File attachments saved from Claude conversations are supported with the same file types as ChatGPT',
        'Active / Inactive toggle now controls Rapelle across both ChatGPT and Claude simultaneously',
        'Status pill on the Claude page shows whether Rapelle is injecting, on standby, or inactive',
      ],
    },
    {
      version: 'v1.0.0',
      date: 'May 2026',
      label: 'Launch Version',
      title: 'Public launch on Chrome Web Store',
      description:
        'Rapelle is now available on the Chrome Web Store. This version includes everything needed to save ChatGPT conversations, reload them into new chats, and keep your files alongside the context.',
      items: [
        'Save any ChatGPT conversation with one click — full messages, code blocks, and attached files',
        'Arm a saved chat to automatically load its context into your next ChatGPT conversation',
        'Context injects once per thread, then ChatGPT remembers it for the rest of the conversation',
        'Supports PDF, XLSX, DOCX, TXT, Markdown, CSV, JSON, and most code file types',
        'Generate a plain-text summary of any saved chat to review what was discussed',
        'Active / Inactive toggle — turn Rapelle off completely when you do not need it',
        'Free plan: up to 2 saved chats. Pro plan: unlimited saved chats at $5.90/month',
        'All data stored locally in your browser — nothing is uploaded to any server',
      ],
    },
    {
      version: 'v0.9.0',
      date: 'May 2026',
      label: 'Beta',
      title: 'Injection reliability and payload improvements',
      description:
        'Fixed a storage access bug that was silently preventing context from being injected. Improved how saved content is formatted when loaded into ChatGPT so the model reads it cleanly.',
      items: [
        'Fixed a critical bug where context injection was silently failing due to a browser storage permission issue',
        'Context now injects on the first message in a new thread — no longer skipping the user\'s first question',
        'Injected payload now uses a clean structured format with clear start and end markers so ChatGPT reads it correctly',
        'Conversation and file content are now separated into labeled sections inside the injected payload',
        'Added a status pill on the ChatGPT page showing whether Rapelle is injecting, on standby, or inactive',
        'Removed the confirm bubble that appeared before injection — the pill alone is enough feedback',
        'Raised the injection size limit to handle larger saved conversations without falling back to partial content',
        'Fixed an issue where re-opening ChatGPT in a new thread would sometimes show a stale status indicator',
      ],
    },
    {
      version: 'v0.8.0',
      date: 'May 2026',
      label: 'Internal Build',
      title: 'File support, monetization, and storage foundation',
      description:
        'Built the complete file handling pipeline and subscription system. This version established the core save, arm, and inject workflow that everything else is built on.',
      items: [
        'Save ChatGPT conversations to local IndexedDB storage with full message and block structure',
        'Arm a saved chat from the popup to load its context into new conversations',
        'PDF support — extract and save text from PDF attachments alongside conversations',
        'Spreadsheet support — save XLSX files with data converted to a clean key-value format for better context injection',
        'Word document support — save DOCX files and extract their text content',
        'Text file support — save TXT, Markdown, JSON, CSV, and most code file formats',
        'Multi-file upload handling — upload several files at once without them interfering with each other',
        'Subscription system via ExtPay — free tier capped at 2 saved chats, Pro tier for unlimited',
        'PRO badge and upgrade prompt shown inside the extension popup based on subscription status',
        'Active / Inactive toggle with full state sync between the popup and the ChatGPT page',
        'Removed image and OCR support to keep the extension lightweight (under 2MB)',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/rapelle-logo-500x500.png" alt="Rapelle" className="h-9 w-9" />
            <span className="text-xl font-bold text-gray-900">Rapelle</span>
          </a>

          <a
            href="/"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
          >
            Back to Home
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-32">
        <div className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
          Product Updates
        </div>

        <h1 className="text-5xl font-black text-gray-900">Changelog</h1>

        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          A running record of what has changed in Rapelle — fixes, improvements, and new features.
        </p>

        <div className="mt-10 rounded-2xl border border-[#00c76a]/30 bg-gradient-to-br from-[#00c76a]/5 to-white p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Current Status</h2>
              <p className="mt-2 text-gray-600">
                Rapelle v1.1 is live on the Chrome Web Store. Now supports ChatGPT and Claude.
              </p>
            </div>
            <div className="inline-flex w-fit rounded-full bg-[#00c76a] px-4 py-2 text-sm font-bold text-white">
              Live
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {updates.map((update) => (
            <section
              key={update.version}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-gray-900 px-3 py-1 text-sm font-bold text-white">
                      {update.version}
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                      {update.label}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-gray-900">{update.title}</h2>
                </div>

                <div className="text-sm font-medium text-gray-500">{update.date}</div>
              </div>

              <p className="mt-4 leading-relaxed text-gray-600">{update.description}</p>

              <ul className="mt-6 space-y-3">
                {update.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">What is coming next?</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Planned improvements include better handling of very large saved chats, improved file organization inside the extension, and cross-device sync once a reliable approach is ready. Feature requests and bug reports are welcome via the link below.
          </p>
          <a
            href="https://tally.so/r/RGVZVl"
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
          >
            Report an issue or suggest a feature →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/rapelle-logo-500x500.png" alt="Rapelle" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">Rapelle</span>
            </div>
            <p className="text-center text-sm text-gray-600">
              Save, search, and reload your ChatGPT conversations locally.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <a href="/data-disclaimer" className="transition hover:text-gray-900">Data Disclaimer</a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/privacy-policy" className="transition hover:text-gray-900">Privacy Policy</a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/terms-of-service" className="transition hover:text-gray-900">Terms of Service</a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/changelog" className="transition hover:text-gray-900">Changelog</a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/contact" className="transition hover:text-gray-900">Contact</a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="https://tally.so/r/RGVZVl" target="_blank" rel="noopener" className="transition hover:text-gray-900">Report issue</a>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2026 Rapelle. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}