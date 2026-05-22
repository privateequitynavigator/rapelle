'use client'

export default function Contact() {
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
        <h1 className="text-5xl font-black text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions, feedback, or need support? We're here to help.
        </p>

        <div className="mt-12 space-y-8">
          {/* Email Contact */}
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
            <p className="text-gray-600 mb-4">
              For general inquiries, support requests, feedback, or legal questions, please email us at:
            </p>
            <a 
              href="mailto:private.equity.navigator@gmail.com" 
              className="inline-flex items-center gap-2 rounded-lg bg-[#00c76a] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#00b862]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              private.equity.navigator@gmail.com
            </a>
          </section>

          {/* What to Include */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Include in Your Email</h2>
            <p className="text-gray-600 mb-4">
              To help us assist you better, please include:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Subject:</strong> Clear description of your inquiry or issue</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Browser:</strong> Which browser you're using (Chrome, Edge, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Extension Version:</strong> Found in the Extension settings</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#00c76a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Details:</strong> Steps to reproduce the issue, error messages, or screenshots</span>
              </li>
            </ul>
          </section>

          {/* Response Time */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Response Time</h2>
            <p className="text-gray-600">
              We aim to respond to all inquiries within <strong>48-72 hours</strong> during business days. 
              For urgent issues, please mark your email as "URGENT" in the subject line.
            </p>
          </section>

          {/* Common Topics */}
          <section className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Topics</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-sm text-gray-600">Extension errors, bugs, or compatibility issues</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-2">Feature Requests</h3>
                <p className="text-sm text-gray-600">Suggestions for new features or improvements</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-2">Data & Privacy</h3>
                <p className="text-sm text-gray-600">Questions about data storage or privacy</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-2">General Feedback</h3>
                <p className="text-sm text-gray-600">Share your experience or suggestions</p>
              </div>
            </div>
          </section>

          {/* Note */}
          <section className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Because Rapelle stores all data locally on your device, we cannot access, 
              view, or recover your saved conversations or files. For data recovery issues, we can only provide 
              general troubleshooting guidance.
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