import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroShowcase from '@/components/HeroShowcase'
import PhoneFrame from '@/components/PhoneFrame'
import VideoShowcase from '@/components/VideoShowcase'
import AppStoreBadge from '@/components/AppStoreBadge'
import { Radio, Sparkles, Trophy, ArrowUpRight } from 'lucide-react'

const LEAGUES = ['MLB', 'NBA', 'NFL', 'Soccer']

const BENEFITS = [
  {
    icon: Radio,
    title: 'Real-time play-by-play',
    body: 'Plain-English explanations land the moment something happens — what went down, and why it actually matters. No jargon, no rewinding.',
  },
  {
    icon: Sparkles,
    title: 'An expert in your pocket',
    body: 'Ask why a call went the way it did, what a term means, or what to watch for next. FanCoach answers in seconds.',
  },
  {
    icon: Trophy,
    title: 'Skin in the game',
    body: 'Predictions, FanCoins and a friends leaderboard turn passive watching into a contest you actually want to win.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-ground">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Subtle field grid + wash */}
        <div aria-hidden className="field-grid pointer-events-none absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-fancoach-mint/60 to-transparent"
        />

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-16">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-10">
            {/* Left: pitch + CTA */}
            <div className="animate-slide-up text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 shadow-card">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-fancoach-green" />
                </span>
                <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Now live on the App Store
                </span>
              </div>

              <h1 className="font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
                Watch sports like you{' '}
                <span className="gradient-text">actually get it.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
                FanCoach explains every play the second it happens, answers any question about the
                game, and lets you go head-to-head with friends. The whole sport — finally making
                sense.
              </p>

              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <AppStoreBadge />
                <div className="text-center sm:text-left">
                  <p className="font-display text-sm font-bold text-ink">Free to download</p>
                  <p className="text-sm text-ink-faint">iPhone · MLB, NBA, NFL &amp; soccer</p>
                </div>
              </div>
            </div>

            {/* Right: rotating phone tour */}
            <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEAGUE BAND ============ */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-8">
          <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            One app, every league
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {LEAGUES.map((l) => (
              <span key={l} className="font-display text-lg font-extrabold tracking-tight text-ink">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFITS TRIO ============ */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-fancoach-green">
            Why FanCoach
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            You don&apos;t need to know everything. You just need FanCoach.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Sitting with friends who know more? Catching your first season? FanCoach keeps you a step
            ahead of the broadcast.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-3xl border border-line bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fancoach-mint text-fancoach-forest">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DEEP DIVE: PLAY-BY-PLAY ============ */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="flex justify-center lg:order-1 lg:justify-start">
            <PhoneFrame src="/screen-play-feed.png" alt="FanCoach narrating a soccer match play by play" />
          </div>
          <div className="lg:order-2">
            <p className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-fancoach-green">
              Live play-by-play
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Follow the story of the game as it&apos;s written.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Every meaningful moment becomes a card — a goal, a foul, a momentum swing — written in
              language anyone can follow. Scroll back any time to see exactly how the game got here.
            </p>
            <ul className="mt-6 space-y-3">
              {['What just happened, in plain words', 'Why the moment matters', 'A running history you can scroll'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-soft">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-fancoach-green" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ DEEP DIVE: ASK AI ============ */}
      <section className="border-t border-line bg-ground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="lg:order-2 flex justify-center lg:justify-end">
            <PhoneFrame src="/screen-ask-ai.png" alt="FanCoach AI answering a question about a play" />
          </div>
          <div className="lg:order-1">
            <p className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-fancoach-green">
              Ask FanCoach AI
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              The question you&apos;d be embarrassed to ask out loud.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Tap any play and ask whatever&apos;s on your mind — &ldquo;what just happened?&rdquo;,
              &ldquo;why does this matter?&rdquo;, &ldquo;break down the matchup.&rdquo; You get a
              straight answer, no judgment, no commercial break.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {['What just happened on this play?', 'Why does this play matter?', 'What should I watch for next?'].map(
                (q) => (
                  <span
                    key={q}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft shadow-card"
                  >
                    {q}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIDEO SHOWCASE ============ */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-fancoach-green">
              See the vibe
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Made for the way real fans watch.
            </h2>
          </div>
          <div className="mt-12">
            <VideoShowcase />
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-fancoach-green/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-fancoach-forest/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-surface sm:text-5xl">
            Become the smartest fan in the room.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Download FanCoach free and let the next game explain itself.
          </p>
          <div className="mt-10 flex justify-center">
            <AppStoreBadge />
          </div>
          <p className="mt-10 text-sm text-white/55">
            Questions or ideas?{' '}
            <a
              href="mailto:fancoachai@gmail.com"
              className="inline-flex items-center gap-1 font-medium text-fancoach-green transition-colors hover:text-white"
            >
              fancoachai@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
