import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Rapelle - Organize Your AI Conversations',
  description: 'Save ChatGPT conversations and files locally. Search, organize, and restore context whenever you need it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}