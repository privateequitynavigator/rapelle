import { Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

export const metadata = {
  metadataBase: new URL('https://rapelle.app'),

  title: 'Rapelle - Save and Reload ChatGPT & Claude Chats',

  description:
    'Save ChatGPT and Claude chats, conversations, files, and AI context locally in your browser. Reload previous AI conversations anytime.',

  keywords: [
    'Rapelle',
    'ChatGPT memory',
    'Claude memory',
    'save ChatGPT chats',
    'save Claude chats',
    'save ChatGPT conversations',
    'save Claude conversations',
    'ChatGPT extension',
    'Claude extension',
    'ChatGPT history',
    'Claude history',
    'AI memory tool',
    'AI chat memory',
    'AI conversation manager',
    'ChatGPT context manager',
    'Claude context manager',
    'local ChatGPT storage',
    'local Claude storage',
    'ChatGPT recall',
    'Claude recall',
  ],

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NJVMF7SSNR"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NJVMF7SSNR');
          `}
        </Script>
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}