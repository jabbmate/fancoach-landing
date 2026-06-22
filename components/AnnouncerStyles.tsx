import React from 'react'
import { Check, Globe } from 'lucide-react'

const STYLES = [
  { emoji: '🎓', name: 'The Coach', desc: 'Explains the rules as you go', selected: true },
  { emoji: '🍺', name: 'The Unhinged', desc: 'Drunk, chaotic and totally absurd' },
  { emoji: '📊', name: 'The Analyst', desc: 'Deep stats and strategy' },
  { emoji: '🤫', name: 'The Insider', desc: 'Drama, contracts and beefs' },
]

const LANGS = ['English', 'Español', 'Français', 'Português', 'Deutsch', '日本語', '한국어', 'العربية', 'हिन्दी']

export default function AnnouncerStyles() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Preset announcers */}
      <div className="grid gap-4 sm:grid-cols-2">
        {STYLES.map((s) => (
          <div
            key={s.name}
            className={`group flex items-start gap-4 rounded-3xl border p-5 transition-all duration-300 ${
              s.selected
                ? 'border-fancoach-green/45 bg-fancoach-mint shadow-card'
                : 'border-line bg-surface shadow-card hover:-translate-y-1 hover:shadow-card-hover'
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface text-2xl shadow-card">
              {s.emoji}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className={`font-display text-lg font-bold ${
                    s.selected ? 'text-fancoach-forest' : 'text-ink'
                  }`}
                >
                  {s.name}
                </h3>
                {s.selected && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-fancoach-green px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                    Picked
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-snug text-ink-soft">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom announcer — any language */}
      <div className="mt-4 rounded-3xl border-2 border-dashed border-fancoach-green/50 bg-surface p-6 shadow-card sm:p-7">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-fancoach-mint text-2xl">
            😎
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold text-ink">Create your own announcer</h3>
            <p className="text-sm text-ink-soft">Describe any personality — in any language.</p>
          </div>
        </div>

        {/* faux prompt input */}
        <div className="mt-5 rounded-2xl border border-line bg-ground px-4 py-3.5">
          <p className="text-[0.95rem] italic leading-relaxed text-ink-faint">
            “Explícame cada jugada en español de forma divertida y emocionante.”
          </p>
        </div>

        {/* language chips */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-bold text-fancoach-forest">
            <Globe className="h-4 w-4" strokeWidth={2.25} />
            Any language
          </span>
          {LANGS.map((l) => (
            <span
              key={l}
              className="rounded-full border border-line bg-ground px-2.5 py-1 text-xs font-medium text-ink-soft"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
