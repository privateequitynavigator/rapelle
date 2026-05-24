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
            <a href="#faq" className="transition hover:text-gray-900">FAQ</a>
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
                SAVE YOUR CHATGPT CHATS.
                <br />
                <span className="bg-gradient-to-r from-[#00c76a] to-[#00a858] bg-clip-text text-transparent">
                  RELOAD THEM ANYTIME.
                </span>
              </h1>

              <p className="max-w-xl text-xl leading-relaxed text-gray-600">
                Rapelle saves your ChatGPT conversations and files locally on your device. When you need that context back, arm a saved chat and it automatically loads into your next conversation.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#00c76a] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#00b862] hover:shadow-xl hover:shadow-green-500/30"
                >
                  <img src="/images/chrome-store-web.png" alt="Chrome" className="h-5 w-5" />
                  Add to Chrome — It's Free
                </a>
                <a
                  href="#how"
                  className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  See How It Works
                </a>
              </div>

              {/* Compatibility badges */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <img src="/images/chrome-store-web.png" alt="Chrome" className="h-4 w-4" />
                  <span>Chrome Extension</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-2">
                  <img src="/images/mac-compatible.png" alt="Mac" className="h-4 w-4" />
                  <span>macOS</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-2">
                  <img src="/images/windows-compatible.png" alt="Windows" className="h-4 w-4" />
                  <span>Windows</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>100% Local — Nothing Uploaded</span>
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

          {/* Stats row */}
          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#00c76a]/5 to-transparent p-8 text-center">
              <div className="mb-3 text-4xl font-black text-[#00c76a]">Local</div>
              <div className="text-sm font-medium text-gray-600">Saved on Your Device</div>
              <div className="mt-4 text-xs text-gray-500">Stored in your browser — never on our servers</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-500/5 to-transparent p-8 text-center">
              <div className="mb-3 text-4xl font-black text-blue-600">10+</div>
              <div className="text-sm font-medium text-gray-600">File Types Supported</div>
              <div className="mt-4 text-xs text-gray-500">PDF, XLSX, DOCX, TXT, MD, JS, CSV, JSON and more</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-500/5 to-transparent p-8 text-center">
              <div className="mb-3 text-4xl font-black text-purple-600">0</div>
              <div className="text-sm font-medium text-gray-600">Server Requests</div>
              <div className="mt-4 text-xs text-gray-500">Everything runs in your browser, nothing leaves your device</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black text-gray-900">How to save and reload ChatGPT chats</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Three steps. No setup. Works on any ChatGPT conversation.
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
              <h3 className="text-2xl font-bold text-gray-900">Save your ChatGPT chats</h3>
              <p className="mt-3 text-gray-600">
                Open any ChatGPT conversation and click Save in the Rapelle extension. It captures the full chat — messages, code, files, and attachments — and stores everything locally on your device.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One click from any ChatGPT conversation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Saves the full conversation, not just a summary</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Attached files and PDFs saved alongside the chat</span>
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
              <h3 className="text-2xl font-bold text-gray-900">Browse and find old chats</h3>
              <p className="mt-3 text-gray-600">
                All your saved chats appear in the Rapelle panel. You can see what was discussed, how many files were attached, and when it was saved. Everything is searchable and stays on your device.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>See all saved chats and their attached files</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>View a summary of any saved conversation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Delete chats you no longer need</span>
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
              <h3 className="text-2xl font-bold text-gray-900">Reload context into a new chat</h3>
              <p className="mt-3 text-gray-600">
                Arm a saved chat and Rapelle will automatically load that conversation's context into your next ChatGPT message. ChatGPT reads it and answers as if it already knows the history.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Context injects automatically on your first message</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Injects once — ChatGPT remembers the rest of the thread</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Disarm anytime to stop loading that context</span>
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
            <h2 className="text-5xl font-black text-gray-900">What Rapelle does</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Simple tools for saving, organizing, and reloading your ChatGPT conversations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureBlock
              title="Save ChatGPT Conversations"
              description="Save any ChatGPT chat with one click. The full conversation is stored locally in your browser — messages, code blocks, and attached files included."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              }
            />
            <FeatureBlock
              title="Reload Previous Context"
              description="Arm a saved chat and it automatically loads into your next ChatGPT conversation. No copy-pasting, no manual setup — it just works."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Save PDFs, Code Files, and More"
              description="Attach PDFs, spreadsheets, Word docs, markdown, JSON, CSV, code files, and plain text. Rapelle saves them alongside the conversation and loads them back with it."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Everything Stays on Your Device"
              description="Rapelle uses your browser's built-in storage (IndexedDB). Nothing is uploaded to our servers. Your conversations stay private and local."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
            <FeatureBlock
              title="Chat Summaries"
              description="Not sure what's in a saved chat? Generate a quick summary to see what was discussed, what files are attached, and what was decided — before loading it."
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
            />
            <FeatureBlock
              title="Active / Inactive Toggle"
              description="Turn Rapelle off when you don't need it. When inactive, it stops reading or intercepting anything. Flip it back on when you want to save or reload a chat."
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
            <h2 className="text-4xl font-black text-gray-900">Supported ChatGPT attachments and file types</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Save these file types alongside your conversations and reload them into new ChatGPT chats
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <FileTypeCard icon="/images/what-rapelle-remembers-chats.png" title="Conversations" />
            <FileTypeCard icon="/images/what-rapelle-remembers-pdf.png" title="PDF" />
            <FileTypeCard icon="/images/what-rapelle-remembers-xls.png" title="Excel / XLSX" />
            <FileTypeCard icon="/images/what-rapelle-remembers-doc.png" title="Word / DOCX" />
            <FileTypeCard icon="/images/what-rapelle-remembers-txt.png" title="TXT" />
            <FileTypeCard icon="/images/what-rapelle-remembers-markdown.png" title="Markdown" />
            <FileTypeCard icon="/images/what-rapelle-remembers-js.png" title="JavaScript" />
            <FileTypeCard icon="/images/what-rapelle-remembers-csv.png" title="CSV" />
            <FileTypeCard icon="/images/what-rapelle-remembers-code-snippets.png" title="Code" />
            <FileTypeCard icon="/images/what-rapelle-remembers-research-notes.png" title="Notes" />
          </div>
        </div>
      </section>

      {/* Privacy section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black text-gray-900">Private by design</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Your ChatGPT conversations are personal. Rapelle keeps them that way.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-900 bg-gray-900 p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">No cloud storage</div>
                  <div className="mt-1 text-sm text-gray-400">Your saved chats stay in your browser's local storage. We never see them, and they never leave your device.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">No tracking or analytics</div>
                  <div className="mt-1 text-sm text-gray-400">We don't collect data about how you use Rapelle or what you save. No usage logs, no personal data.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Standard browser APIs only</div>
                  <div className="mt-1 text-sm text-gray-400">Rapelle uses IndexedDB — a standard browser storage API. You can inspect exactly what it stores and clear it anytime.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Delete anytime</div>
                  <div className="mt-1 text-sm text-gray-400">Remove any saved chat or file from inside Rapelle. Uninstalling the extension removes everything — no residual data left behind.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-blue-600">
            GOT QUESTIONS?
          </div>
          <h2 className="mb-12 text-center text-5xl font-black text-gray-900">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Where are my saved ChatGPT chats stored?"
              answer="Everything is stored locally in your browser using IndexedDB — a standard browser storage API. Your conversations and files never leave your device and are never uploaded to any server, including ours."
            />
            <FAQItem
              question="Does Rapelle work with ChatGPT Free and Plus?"
              answer="Yes. Rapelle works at the browser level on the ChatGPT website and is compatible with both Free and Plus accounts. It may not work correctly in managed workspaces or enterprise environments where browser extensions are restricted."
            />
            <FAQItem
              question="Can I save PDFs, spreadsheets, and code files from ChatGPT?"
              answer="Yes. When you upload a file to ChatGPT and save that conversation with Rapelle, the file is extracted and saved alongside the chat. Supported formats include PDF, XLSX, DOCX, TXT, MD, CSV, JSON, and most code file types."
            />
            <FAQItem
              question="What happens when I reload a saved chat — does the whole thing get sent to ChatGPT?"
              answer="Yes, for most conversations. When you arm a saved chat, Rapelle injects the full saved content into your first message. For very large saved chats (roughly over 80,000 characters), Rapelle loads the most relevant parts instead of everything. Most normal-length conversations are well within this limit."
            />
            <FAQItem
              question="How much does Rapelle cost?"
              answer="Rapelle is free to use with up to 2 saved chats. Rapelle Pro is $5.90/month and gives you unlimited saved chats."
            />
            <FAQItem
              question="Can I use Rapelle across multiple devices?"
              answer="Not yet. Because everything is stored locally in your browser, saved chats are tied to the device and browser you saved them on. Cross-device sync is not available in this version."
            />
            <FAQItem
              question="Does Rapelle slow down ChatGPT?"
              answer="No. Rapelle only activates when you send a message and a chat is armed. When nothing is armed or the extension is set to inactive, it does nothing at all — there is no background processing or performance impact."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-black text-gray-900">Start saving your ChatGPT chats</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Free to install. No account needed. Your chats stay on your device.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-[#00c76a] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#00b862]"
            >
              <img src="/images/chrome-store-web.png" alt="Chrome" className="h-5 w-5" />
              Add to Chrome — It's Free
            </a>
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
              Save, search, and reload your ChatGPT conversations locally.
            </p>
          </div>

          {/* Legal Links */}
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