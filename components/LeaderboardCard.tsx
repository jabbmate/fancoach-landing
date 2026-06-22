import React from 'react'
import { Trophy, TrendingUp, TrendingDown, Sparkles } from 'lucide-react'

/** Small gold "FanCoin" token — the app's play-money currency. */
function Coin({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[0.6rem] font-bold text-amber-900 ring-1 ring-amber-500/40 ${className}`}
    >
      F
    </span>
  )
}

type Podium = { initial: string; name: string; coins: string; rank: 1 | 2 | 3 }

const PODIUM: Podium[] = [
  { initial: 'D', name: 'Dev', coins: '1,905', rank: 3 },
  { initial: 'M', name: 'Maya', coins: '2,480', rank: 1 },
  { initial: 'Y', name: 'You', coins: '2,310', rank: 2 },
]

// rank → styling
const RING = {
  1: 'ring-amber-400',
  2: 'ring-zinc-300',
  3: 'ring-amber-700/60',
} as const
const BAR_H = { 1: 'h-20', 2: 'h-14', 3: 'h-10' } as const
const MEDAL = { 1: '🥇', 2: '🥈', 3: '🥉' } as const

export default function LeaderboardCard() {
  return (
    <div className="relative w-full max-w-md">
      {/* floating "no real money" badge */}
      <div className="absolute -right-3 -top-4 z-20 flex items-center gap-1.5 rounded-full border border-fancoach-green/30 bg-surface px-3 py-1.5 shadow-card sm:-right-5">
        <Coin />
        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-fancoach-forest">
          $0 real money
        </span>
      </div>

      {/* Leaderboard card */}
      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line bg-fancoach-mint/50 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-fancoach-forest" strokeWidth={2.5} />
            <span className="font-display text-sm font-bold text-ink">Friends leaderboard</span>
          </div>
          <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            This week
          </span>
        </div>

        {/* podium */}
        <div className="flex items-end justify-center gap-3 px-5 pt-6">
          {PODIUM.map((p) => (
            <div key={p.name} className="flex flex-1 flex-col items-center">
              <div className="relative mb-2">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-ground font-display text-base font-extrabold text-ink ring-2 ${RING[p.rank]}`}
                >
                  {p.initial}
                </div>
                <span className="absolute -right-1.5 -top-1.5 text-sm">{MEDAL[p.rank]}</span>
              </div>
              <span className={`text-xs font-semibold ${p.name === 'You' ? 'text-fancoach-forest' : 'text-ink'}`}>
                {p.name}
              </span>
              <span className="mb-2 mt-0.5 flex items-center gap-1 text-[0.7rem] font-bold text-ink-soft">
                <Coin className="h-3.5 w-3.5" />
                {p.coins}
              </span>
              <div
                className={`w-full rounded-t-lg ${BAR_H[p.rank]} ${
                  p.rank === 1
                    ? 'bg-gradient-to-t from-fancoach-green to-fancoach-green/70'
                    : 'bg-line'
                }`}
              />
            </div>
          ))}
        </div>

        {/* ranked rows */}
        <div className="space-y-1 px-3 pb-3 pt-1">
          {/* You — climbing */}
          <div className="animate-rank-pulse flex items-center gap-3 rounded-2xl border border-fancoach-green/30 bg-fancoach-mint/70 px-3 py-2.5">
            <span className="w-4 text-center font-mono text-xs font-bold text-fancoach-forest">2</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fancoach-green text-xs font-bold text-white">
              Y
            </span>
            <span className="flex-1 text-sm font-bold text-ink">You</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-fancoach-forest">
              <TrendingUp className="h-3.5 w-3.5" /> climbing
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-ink">
              <Coin />
              2,310
            </span>
          </div>
          {/* Jordan */}
          <div className="flex items-center gap-3 rounded-2xl px-3 py-2.5">
            <span className="w-4 text-center font-mono text-xs font-bold text-ink-faint">4</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ground text-xs font-bold text-ink-soft ring-1 ring-line">
              J
            </span>
            <span className="flex-1 text-sm font-medium text-ink-soft">Jordan</span>
            <span className="flex items-center gap-1 text-xs font-medium text-rose-500">
              <TrendingDown className="h-3.5 w-3.5" />
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-ink-soft">
              <Coin />
              1,640
            </span>
          </div>
        </div>
      </div>

      {/* "why you missed" explainer card */}
      <div className="relative z-10 mt-4 rounded-3xl border border-line bg-ink p-5 shadow-card">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/15 text-rose-400">
            ✕
          </span>
          <span className="text-sm font-semibold text-white/90">
            Your call: <span className="text-white">Scotland to win</span> — missed
          </span>
        </div>
        <p className="mt-3 flex gap-2 text-sm leading-relaxed text-white/70">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-fancoach-green" />
          <span>
            <span className="font-semibold text-fancoach-green">FanCoach:</span> Scotland rested
            their starters at halftime — momentum had already swung. Watch the lineup next time.
          </span>
        </p>
        <p className="mt-3 border-t border-white/10 pt-3 font-display text-sm font-bold text-white">
          Now you know for next time. 🧠
        </p>
      </div>
    </div>
  )
}
