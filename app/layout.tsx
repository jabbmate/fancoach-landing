import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FanCoach - Understand Every Play. Instantly.',
  description: 'A mobile-first sports-education app for new and casual fans. Get real-time explanations during live games with simple cards, glossary terms, and interactive breakdowns.',
  keywords: 'sports, education, football, fan, coach, live games, explanations',
  authors: [{ name: 'FanCoach Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  openGraph: {
    title: 'FanCoach - Understand Every Play. Instantly.',
    description: 'A mobile-first sports-education app for new and casual fans.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FanCoach - Understand Every Play. Instantly.',
    description: 'A mobile-first sports-education app for new and casual fans.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 