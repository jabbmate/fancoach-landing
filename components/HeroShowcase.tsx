'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

type Screen = {
  src: string
  alt: string
  title: string
  desc: string
}

const SCREENS: Screen[] = [
  {
    src: '/screen-live-scores.png',
    alt: 'FanCoach live scoreboard for a Blue Jays vs Cubs game',
    title: 'Live scores, every league',
    desc: 'MLB, NBA, NFL and soccer in one feed. Drop into any game and follow it live.',
  },
  {
    src: '/screen-play-feed.png',
    alt: 'FanCoach play-by-play feed explaining a soccer match',
    title: 'Every play, explained',
    desc: 'FanCoach narrates the game as it happens — what just occurred, and why it matters.',
  },
  {
    src: '/screen-ask-ai.png',
    alt: 'FanCoach AI answering questions about a play',
    title: 'Ask FanCoach anything',
    desc: 'Confused by a call? Ask in plain English and get a clear answer in seconds.',
  },
  {
    src: '/screen-predict.png',
    alt: 'FanCoach predict-the-winner prompt',
    title: 'Call the winner',
    desc: 'Make your pick before kickoff and put your read on the game to the test.',
  },
  {
    src: '/screen-cards.png',
    alt: 'FanCoach prediction card with coin stakes',
    title: 'Stake your coins',
    desc: 'Back bold predictions with FanCoins and watch them settle as the game unfolds.',
  },
  {
    src: '/screen-leaderboard.png',
    alt: 'FanCoach friends leaderboard and all-time stats',
    title: 'Beat your friends',
    desc: 'Climb the leaderboard, track your record, and earn the bragging rights.',
  },
  {
    src: '/screen-recaps.png',
    alt: 'FanCoach recaps of finished games',
    title: 'Catch up fast',
    desc: "Missed it? Get a clean recap of every final so you're never out of the loop.",
  },
]

const INTERVAL = 4200

export default function HeroShowcase() {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SCREENS.length)
    }, INTERVAL)
  }, [])

  useEffect(() => {
    start()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [start])

  const select = (i: number) => {
    setIndex(i)
    start() // restart the dwell timer on manual selection
  }

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
      {/* Phone */}
      <div className="relative shrink-0">
        {/* Halo */}
        <div
          aria-hidden
          className="phone-halo pointer-events-none absolute -inset-12 -z-10 rounded-full blur-2xl"
        />

        {/* "LIVE" tag floating off the phone */}
        <div className="absolute -left-5 top-12 z-20 hidden animate-float-slow items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 shadow-card sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-fancoach-green" />
          </span>
          <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink">
            Live now
          </span>
        </div>

        <div className="animate-float-slow">
          <div className="relative rounded-[2.9rem] bg-ink p-[10px] shadow-phone ring-1 ring-black/5">
            <div className="relative h-[572px] w-[264px] overflow-hidden rounded-[2.3rem] bg-black">
              {/* Dynamic island */}
              <div className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[82px] -translate-x-1/2 rounded-full bg-black" />
              {SCREENS.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="264px"
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-700 ease-out ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tour stepper */}
      <div className="w-full max-w-md">
        <p className="mb-4 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-faint">
          A quick tour
        </p>
        <ul className="flex flex-col gap-1">
          {SCREENS.map((s, i) => {
            const isActive = i === index
            return (
              <li key={s.src}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group flex w-full items-start gap-3.5 rounded-2xl px-3.5 py-3 text-left transition-colors duration-300 ${
                    isActive ? 'bg-surface shadow-card' : 'hover:bg-surface/60'
                  }`}
                >
                  <span
                    className={`mt-0.5 font-mono text-xs font-bold tabular-nums transition-colors ${
                      isActive ? 'text-fancoach-green' : 'text-ink-faint'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-display text-base font-bold leading-tight transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-soft group-hover:text-ink'
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`grid transition-all duration-500 ease-out ${
                        isActive ? 'mt-1.5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block text-sm leading-relaxed text-ink-soft">{s.desc}</span>
                        {/* dwell progress bar */}
                        <span className="mt-3 block h-[3px] w-full overflow-hidden rounded-full bg-line">
                          <span
                            key={index}
                            className="block h-full rounded-full bg-fancoach-green motion-reduce:hidden"
                            style={{ animation: `fc-progress ${INTERVAL}ms linear forwards` }}
                          />
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <style jsx>{`
        @keyframes fc-progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
