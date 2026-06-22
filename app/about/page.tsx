import React from 'react'
import Link from 'next/link'
import { Play, BookOpen, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppStoreBadge from '@/components/AppStoreBadge'

export default function About() {
  const features = [
    {
      icon: Play,
      title: 'Real-time cards',
      description:
        'Instant explanations for every play as it happens. No more confusion about what just occurred on the field.',
    },
    {
      icon: BookOpen,
      title: 'Beginner glossary',
      description:
        'Tap any term to get simple, clear definitions. Build your sports vocabulary one play at a time.',
    },
    {
      icon: MessageCircle,
      title: 'Ask FanCoach AI',
      description:
        'Ask questions and get detailed breakdowns in plain English. Your personal coach is always ready to help.',
    },
  ]

  return (
    <main className="min-h-screen bg-ground text-ink">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Your personal sports <span className="gradient-text">coach.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-ink-soft">
            FanCoach transforms how new and casual fans experience live sports. Never feel lost
            during a game again.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-line bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-fancoach-mint text-fancoach-forest">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink-soft">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Ready to level up your <span className="gradient-text">game knowledge?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            Download FanCoach free and let the next game explain itself.
          </p>
          <div className="mt-9 flex justify-center">
            <AppStoreBadge />
          </div>
          <p className="mt-6 text-sm text-ink-faint">
            <Link href="/" className="text-fancoach-green hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
