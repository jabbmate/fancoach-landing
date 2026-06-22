'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Menu, X } from 'lucide-react'
import { APP_STORE_URL } from '@/components/AppStoreBadge'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/hiring', label: "We're hiring" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ground/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="FanCoach home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-fancoach-green"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-surface transition-transform duration-200 hover:-translate-y-0.5"
          >
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="p-2 text-ink transition-colors hover:text-fancoach-green md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="animate-fade-in border-t border-line bg-surface px-6 py-6 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-lg font-medium text-ink-soft transition-colors hover:text-fancoach-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full rounded-full bg-ink py-3 text-center text-base font-semibold text-surface"
              onClick={() => setIsMenuOpen(false)}
            >
              Download on the App Store
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
