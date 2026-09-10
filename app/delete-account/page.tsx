import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const DELETE_REQUEST_EMAIL =
  'mailto:fancoachai@gmail.com?subject=FanCoach%20account%20deletion%20request&body=Please%20delete%20my%20FanCoach%20account.%0A%0AFanCoach%20account%20email%3A%20%0ADisplay%20name%20(optional)%3A%20%0A%0AI%20understand%20this%20is%20permanent.'

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-ground text-ink">
      <Navbar />

      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fancoach-green">
            FanCoach account help
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Delete your <span className="gradient-text">account.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            You can permanently delete your FanCoach account either inside the app or by sending us a
            deletion request. Deletion cannot be undone.
          </p>

          <div className="mt-12 space-y-10">
            <section className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Delete inside FanCoach</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-ink-soft">
                <li>Open FanCoach and sign in to the account you want to delete.</li>
                <li>Open Profile, then choose the Preferences tab.</li>
                <li>Scroll down and tap Delete Account.</li>
                <li>Read the warning and confirm Delete Account.</li>
              </ol>
              <p className="mt-4 text-sm leading-relaxed text-ink-faint">
                This is the fastest option because your signed-in session verifies ownership of the
                account automatically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">Request deletion without the app</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Email us from the address associated with your FanCoach account. Include your account
                email and, if available, your display name. Never send your password, verification code,
                or authentication token. We may ask for limited additional information to verify account
                ownership before deleting it.
              </p>
              <a
                href={DELETE_REQUEST_EMAIL}
                className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 font-semibold text-surface transition-transform hover:-translate-y-0.5"
              >
                Email a deletion request
              </a>
              <p className="mt-3 text-sm text-ink-faint">
                Contact: fancoachai@gmail.com. We aim to complete verified requests within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">What deletion removes</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                FanCoach deletes your authentication account, profile and preferences, saved commentary
                cards, chats, FanCoin balance and transaction history, predictions and wagers,
                friendships, and tournament memberships. Limited information may be retained when
                required for legal, security, fraud-prevention, or backup purposes, then removed or
                de-identified when no longer needed.
              </p>
            </section>

            <p className="border-t border-line pt-8 text-sm leading-relaxed text-ink-faint">
              For more information about how FanCoach handles data, read our{' '}
              <Link href="/privacy" className="text-fancoach-green hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
