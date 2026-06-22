import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { APP_STORE_URL } from './AppStoreBadge'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Logo />
            <p className="max-w-xs text-center text-sm text-ink-faint md:text-left">
              The sports companion that explains the game while you watch.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm md:flex-row md:gap-8">
            <Link href="/about" className="text-ink-soft transition-colors hover:text-fancoach-green">
              About
            </Link>
            <Link href="/privacy" className="text-ink-soft transition-colors hover:text-fancoach-green">
              Privacy
            </Link>
            <Link href="/hiring" className="text-ink-soft transition-colors hover:text-fancoach-green">
              We&apos;re hiring
            </Link>
            <a
              href="mailto:fancoachai@gmail.com"
              className="text-ink-soft transition-colors hover:text-fancoach-green"
            >
              Support
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fancoach-green transition-colors hover:text-fancoach-forest"
            >
              App Store
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} FanCoach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
