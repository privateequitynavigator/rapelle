'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/images/rapelle-logo-500x500.png" alt="Rapelle" className="h-9 w-9" />
            <span className="text-xl font-bold text-gray-900">Rapelle</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#features" className="transition hover:text-gray-900">Features</a>
            <a href="#how" className="transition hover:text-gray-900">How it Works</a>
            <a href="#technical" className="transition hover:text-gray-900">Technical</a>
          </div>

          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-[#00c76a] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00b862]"
          >
            <img src="/images/chrome-store-web.png" alt="Chrome" className="h-4 w-4" />
            Add to Chrome
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                <span>Built for</span>
                <img src="/images/chatgpt-logo.png" alt="ChatGPT" className="h-5 w-auto object-contain" />
              </div>

              <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-gray-900 lg:text-7xl">
                YOUR AI CONVERSATIONS,
                <br />
                <span className="bg-gradient-to-r from-[#00c76a] to-[#00a858] bg-clip-text text-transparent">
                  ORGANIZED & RECALLED
                </span>
              </h1>

              <p className="max-w-xl text-xl leading-relaxed text-gray-600">
                Save ChatGPT conversations and files locally. Search, organize, and restore context whenever you need it.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#00c76a] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#00b862] hover:shadow-xl hover:shadow-green-500/30"
                >
                  <img src="/images/chrome-store-web.png" alt="Chrome" className="h-5 w-5" />
                  Add to Chrome
                </a>
                <a
                  href="#how"
                  className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  Learn More
                </a>
              </div>

              {/* Compatibility badges */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <img src="/images/chrome-store-web.png" alt="Chrome" className="h-5 w-5" />
                  <span>Chrome Web Store</span>
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <img src="/images/mac-compatible.png" alt="Mac" className="h-5 w-5" />
                  <span>macOS</span>
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <img src="/images/windows-compatible.png" alt="Windows" className="h-5 w-5" />
                  <span>Windows</span>
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>100% Local Storage</span>
                </div>
              </div>
            </div>

            {/* Right: Extension Preview */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#00c76a]/10 to-blue-500/5 blur-2xl" />
              
              <div className="relative mx-auto max-w-[360px]">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl">
                  <img 
                    src="/images/rapelle-extension.png" 
                    alt="Rapelle Extension Interface" 
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Stat badges */}
                <div className="absolute -right-6 top-12 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00c76a]/10">
                      <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">253</div>
                      <div className="text-xs text-gray-500">Saved Chats</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-6 bottom-32 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">26</div>
                      <div className="text-xs text-gray-500">Saved Files</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats visualization */}
          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#00c76a]/5 to-transparent p-8 text-center">
              <div className="mb-3 text-4xl font-black text-[#00c76a]">Local</div>
              <div className="text-sm font-medium text-gray-600">Saved Conversations</div>
              <div className="mt-4 text-xs text-gray-500">Stored locally in your browser</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-500/5 to-transparent p-8 text-center">
              <div className="mb-3 text-4xl font-black text-blue-600">10+</div>
              <div className="text-sm font-medium text-gray-600">File Types Supported</div>
              <div className="mt-4 text-xs text-gray-500">PDF, XLSX, TXT, MD, JS, CSV, DOCX, etc.</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-500/5 to-transparent p-8 text-center">
              <div className="mb-3 text-4xl font-black text-purple-600">100%</div>
              <div className="text-sm font-medium text-gray-600">Local Storage</div>
              <div className="mt-4 text-xs text-gray-500">All data stays on your device</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black text-gray-900">How Rapelle works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Three simple steps to organize your AI conversations
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="relative">
              <div className="mb-6 inline-block rounded-lg bg-[#00c76a] px-4 py-2 text-sm font-bold text-white">
                STEP 1
              </div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                <img src="/images/how-it-works-save.png" alt="Save" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Save Conversations</h3>
              <p className="mt-3 text-gray-600">
                Click save on any ChatGPT chat. Rapelle stores the entire conversation including all messages, code blocks, and attached files locally on your device.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One-click save from ChatGPT interface</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Captures full conversation context</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stores files and attachments locally</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="mb-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                STEP 2
              </div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                <img src="/images/how-it-works-remember.png" alt="Organize" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Search & Organize</h3>
              <p className="mt-3 text-gray-600">
                Rapelle indexes everything using BM25 search algorithm. Find any conversation or file instantly with smart search and filtering.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>BM25 relevance ranking</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filter by file type and date</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>View detailed statistics</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="mb-6 inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-bold text-white">
                STEP 3
              </div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                <img src="/images/how-it-works-restore.png" alt="Restore" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Restore Context</h3>
              <p className="mt-3 text-gray-600">
                Arm saved conversations to inject their context into new ChatGPT chats. Access your knowledge base on demand.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Arm multiple chats simultaneously</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Context injected at send time</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insert-only mode for manual review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black text-gray-900">Key features</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Everything you need for organized AI conversations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureBlock
              title="BM25 Search"
              description="Industry-standard search algorithm ranks results by relevance, finding the most useful conversations instantly."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Local Storage"
              description="All data stored on your device using IndexedDB. No cloud uploads, no tracking, complete privacy."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Multi-File Support"
              description="Save and organize conversations, PDFs, text files, code snippets, spreadsheets, and supported documents locally."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Armed Chats"
              description="Activate multiple saved conversations simultaneously to bring complex context into new chats."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Smart Summaries"
              description="Generate organized summaries of armed chat content, categorized by topic for quick reference."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
            />
            <FeatureBlock
              title="Insert-Only Mode"
              description="Write context to ChatGPT input without auto-sending, giving you full control over what gets submitted."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Supported File Types */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-gray-900">Supported file types</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Save and organize multiple file formats alongside conversations
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <FileTypeCard icon="/images/what-rapelle-remembers-chats.png" title="Conversations" />
            <FileTypeCard icon="/images/what-rapelle-remembers-pdf.png" title="PDF" />
            <FileTypeCard icon="/images/what-rapelle-remembers-xls.png" title="Excel/XLSX" />
            <FileTypeCard icon="/images/what-rapelle-remembers-doc.png" title="Word/DOCX" />
            <FileTypeCard icon="/images/what-rapelle-remembers-txt.png" title="TXT" />
            <FileTypeCard icon="/images/what-rapelle-remembers-markdown.png" title="Markdown" />
            <FileTypeCard icon="/images/what-rapelle-remembers-js.png" title="JavaScript" />
            <FileTypeCard icon="/images/what-rapelle-remembers-csv.png" title="CSV" />
            <FileTypeCard icon="/images/what-rapelle-remembers-code-snippets.png" title="Code" />
            <FileTypeCard icon="/images/what-rapelle-remembers-research-notes.png" title="Notes" />
          </div>
        </div>
      </section>

      {/* What You Get - Blue Accent Section */}
      <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-blue-600">
            WHAT YOU GET
          </div>
          <h2 className="mb-16 text-center text-5xl font-black text-gray-900">
            Everything in one extension
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              title="Complete Privacy"
              description="100% local storage. Zero cloud uploads. Your data never leaves your device."
            />
            <ValueCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Lightning Fast"
              description="Sub-100ms search. Instant saves. No lag. No loading screens."
            />
            <ValueCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="Smart Organization"
              description="BM25 search ranking finds exactly what you need, when you need it."
            />
            <ValueCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              }
              title="Local Storage"
              description="Save your conversations and supported files locally in your browser storage."
            />
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="technical" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black text-gray-900">Built with privacy & performance</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Modern architecture that respects your data
            </p>
          </div>

          {/* Architecture diagram visualization */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-[#00c76a]/30 bg-gradient-to-br from-[#00c76a]/5 to-transparent p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#00c76a]/10">
                <svg className="h-8 w-8 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">IndexedDB</h3>
              <p className="mt-2 text-sm text-gray-600">Fast local database storage with no server dependencies</p>
            </div>

            <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">BM25 Algorithm</h3>
              <p className="mt-2 text-sm text-gray-600">Industry-standard search ranking for precision recall</p>
            </div>

            <div className="rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/10">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Manifest V3</h3>
              <p className="mt-2 text-sm text-gray-600">Latest Chrome extension API for security and performance</p>
            </div>
          </div>

          {/* Performance metrics */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">Performance Metrics</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-5xl font-black text-[#00c76a]">&lt;2MB</div>
                <div className="text-sm font-medium text-gray-600">Extension Size</div>
                <div className="mt-2 text-xs text-gray-500">Lightweight and fast</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-black text-blue-600">&lt;100ms</div>
                <div className="text-sm font-medium text-gray-600">Average Search Time</div>
                <div className="mt-2 text-xs text-gray-500">Instant retrieval</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-black text-purple-600">0</div>
                <div className="text-sm font-medium text-gray-600">Server Requests</div>
                <div className="mt-2 text-xs text-gray-500">Everything runs locally</div>
              </div>
            </div>
          </div>

          {/* Privacy guarantees */}
          <div className="mt-12 rounded-2xl border-2 border-gray-900 bg-gray-900 p-8 text-white">
            <h3 className="mb-6 text-2xl font-bold">Privacy Guarantees</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">No Cloud Storage</div>
                  <div className="mt-1 text-sm text-gray-400">All data stays on your device. We never upload your conversations or files to our servers.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">No Tracking</div>
                  <div className="mt-1 text-sm text-gray-400">We don't collect analytics, usage data, or any personal information about your ChatGPT usage.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Open Architecture</div>
                  <div className="mt-1 text-sm text-gray-400">Standard browser APIs mean you can inspect exactly what the extension does with your data.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">You Own Your Data</div>
                  <div className="mt-1 text-sm text-gray-400">Export or delete your saved conversations anytime. Complete control over your data.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-blue-600">
            GOT QUESTIONS?
          </div>
          <h2 className="mb-12 text-center text-5xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Everything you need to know about Rapelle and how it works.
          </p>

          <div className="space-y-4">
            <FAQItem
              question="Where is my data stored?"
              answer="Rapelle stores your saved conversations and context locally in your browser storage. Your data is not uploaded to external servers by default."
            />
            <FAQItem
              question="Does it work with all ChatGPT plans?"
              answer="Rapelle is designed to work with standard ChatGPT web accounts, including Free and Plus plans. The extension operates at the browser level and may vary in managed workspaces or enterprise environments."
            />
            <FAQItem
              question="What file types can I save?"
              answer="Rapelle supports ChatGPT conversations, code snippets, PDFs, images, markdown files, JSON, CSV, spreadsheets, and other text-based content."
            />
            <FAQItem
              question="How much does Rapelle cost?"
              answer="Rapelle Pro is priced at $5.90/month. Additional pricing tiers and features may be introduced in the future."
            />
            <FAQItem
              question="Can I sync across multiple devices?"
              answer="Cross-device sync is not available yet. Current saved data is tied to your local browser storage."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/rapelle-logo-500x500.png" alt="Rapelle" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">Rapelle</span>
            </div>
            <p className="text-center text-sm text-gray-600">
              Organize your AI conversations with local storage and smart search.
            </p>
          </div>

          {/* Legal Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <a href="/data-disclaimer" className="transition hover:text-gray-900">
              Data Disclaimer
            </a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/privacy-policy" className="transition hover:text-gray-900">
              Privacy Policy
            </a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/terms-of-service" className="transition hover:text-gray-900">
              Terms of Service
            </a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/changelog" className="transition hover:text-gray-900">
              Changelog
            </a>
            <div className="h-4 w-px bg-gray-300" />
            <a href="/contact" className="transition hover:text-gray-900">
              Contact
            </a>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2026 Rapelle. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

// Component Definitions
function FeatureBlock({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[#00c76a]/50 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00c76a]/10 text-[#00c76a]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function FileTypeCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:border-[#00c76a]/50 hover:shadow-md">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center">
        <img src={icon} alt={title} className="h-10 w-10 object-contain" />
      </div>
      <div className="text-sm font-semibold text-gray-900">{title}</div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-gray-50/50 p-6 transition hover:bg-gray-50">
      <summary className="cursor-pointer text-lg font-bold text-gray-900 marker:text-blue-600">
        {question}
      </summary>
      <p className="mt-4 leading-relaxed text-gray-600">{answer}</p>
    </details>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-6 text-center transition hover:shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}