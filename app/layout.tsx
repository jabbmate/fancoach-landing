import type { Metadata, Viewport } from 'next'
import { Inter, Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fancoach.ai'),
  title: 'FanCoach — Watch sports like you actually get it.',
  description:
    'FanCoach explains every play as it happens, lets you ask anything about the game, and turns watching into a contest with friends. Live scores for MLB, NBA, NFL and soccer. Free on the App Store.',
  keywords:
    'sports, education, football, baseball, basketball, soccer, fan, coach, live scores, play explanations, predictions',
  authors: [{ name: 'FanCoach' }],
  icons: {
    icon: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
  openGraph: {
    title: 'FanCoach — Watch sports like you actually get it.',
    description:
      'Real-time play explanations, an AI you can ask anything, live scores, and predictions with friends. Free on the App Store.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FanCoach — Watch sports like you actually get it.',
    description:
      'Real-time play explanations, an AI you can ask anything, live scores, and predictions with friends.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07B27E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-ground text-ink min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
