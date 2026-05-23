'use client'

export default function Changelog() {
  const updates = [
    {
      version: 'v1.0.0',
      date: 'May 2026',
      label: 'Launch Version',
      title: 'Rapelle launch preparation',
      description:
        'Initial public version prepared for Chrome Web Store launch with local ChatGPT conversation saving, smart search, and context restore workflow.',
      items: [
        'Save ChatGPT conversations locally in browser storage',
        'Search saved conversations using BM25 relevance ranking',
        'Organize saved chats and files inside the Rapelle extension',
        'Restore saved context into new ChatGPT conversations',
        'Support for PDFs, images, markdown, JSON, CSV, spreadsheets, code snippets, and text-based files',
        'Local-first privacy model with no cloud upload by default',
      ],
    },
    {
      version: 'v0.9.0',
      date: 'May 2026',
      label: 'Beta',
      title: 'Privacy and storage improvements',
      description:
        'Improved the local storage flow, FAQ wording, and launch messaging to make Rapelle clearer, safer, and more transparent for users.',
      items: [
        'Updated website FAQ with accurate local storage information',
        'Clarified that cross-device sync is not available yet',
        'Added pricing information for Rapelle Pro at $5.90/month',
        'Added Changelog page to document product updates',
        'Improved ChatGPT-only launch messaging',
      ],
    },
    {
      version: 'v0.8.0',
      date: 'May 2026',
      label: 'Internal Build',
      title: 'Core extension workflow',
      description:
        'Built the first working version of the save, search, and context injection workflow for ChatGPT.',
      items: [
        'Added save current chat workflow',
        'Added saved chat list and delete flow',
        'Added armed chat context workflow',
        'Added insert-only mode for manual review before sending',
        'Added file parsing foundation for supported file types',
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
          Follow the latest Rapelle updates, improvements, fixes, and launch progress.
        </p>

        <div className="mt-10 rounded-2xl border border-[#00c76a]/30 bg-gradient-to-br from-[#00c76a]/5 to-white p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Current Status</h2>
              <p className="mt-2 text-gray-600">
                Rapelle is currently being prepared for Chrome Web Store launch.
              </p>
            </div>
            <div className="inline-flex w-fit rounded-full bg-[#00c76a] px-4 py-2 text-sm font-bold text-white">
              Launch Prep
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
          <h2 className="text-2xl font-bold text-gray-900">What’s coming next?</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Future updates may include improved file handling, better saved chat organization,
            expanded browser support, and optional sync features once they are ready.
          </p>
        </div>
      </div>
    </main>
  )
}
