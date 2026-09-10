import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-display text-2xl font-bold">{title}</h2>
    <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">{children}</div>
  </section>
)

export default function Privacy() {
  return (
    <main className="min-h-screen bg-ground text-ink">
      <Navbar />

      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Privacy <span className="gradient-text">policy.</span>
          </h1>

          <p className="mt-6 text-base text-ink-faint">Last updated: September 10, 2026</p>

          <div className="mt-10 space-y-10">
            <Section title="Overview">
              <p>
                FanCoach is a personalized sports companion with live commentary, AI questions and
                answers, recaps, virtual FanCoin predictions, friends, and tournaments. This policy
                explains what information FanCoach collects, why we use it, and the choices available
                to you.
              </p>
            </Section>

            <Section title="Information we collect">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Account and profile information:</strong> email address, display name,
                  authentication and user identifiers, favorite teams, commentary preferences, and
                  notification preferences.
                </li>
                <li>
                  <strong>Content and activity:</strong> questions and chat messages you send, saved or
                  shared commentary cards, game activity, FanCoin predictions and results, friendships,
                  tournament participation, and feature interactions.
                </li>
                <li>
                  <strong>Device and technical information:</strong> push-notification tokens, device or
                  advertising identifiers where permitted, app version, diagnostics, crash reports, and
                  analytics about how the app performs and is used.
                </li>
              </ul>
            </Section>

            <Section title="How we use information">
              <p>We use this information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>create and secure accounts and provide personalized FanCoach features;</li>
                <li>generate commentary, answer questions, create recaps, and operate predictions;</li>
                <li>support friends, tournaments, saved content, and optional notifications;</li>
                <li>measure app performance, understand feature usage, prevent abuse, and fix crashes;</li>
                <li>measure marketing and install attribution where allowed; and</li>
                <li>respond to support, privacy, and account-deletion requests.</li>
              </ul>
            </Section>

            <Section title="AI processing and service providers">
              <p>
                FanCoach sends the questions or chat messages you submit, together with relevant game
                context, to an AI service provider to generate a response. Please do not include
                sensitive personal information in a sports question or custom commentary prompt.
              </p>
              <p>
                We use service providers to operate FanCoach, including Google Firebase for
                authentication, analytics, crash reporting, and messaging; Amazon Web Services for
                backend hosting and data storage; Anthropic for AI-generated content; and AppsFlyer for
                install and marketing attribution. These providers process information under their own
                terms and privacy commitments. Sports-data providers supply game information.
              </p>
              <p>
                We may also disclose information when required by law, to protect users or FanCoach, or
                as part of a business transaction. We do not sell personal information for money.
              </p>
            </Section>

            <Section title="Retention and account deletion">
              <p>
                We generally retain account information and activity while your account remains active
                and as reasonably needed to provide FanCoach. You can permanently delete your account
                from Profile → Preferences → Delete Account. You can also submit a request through our{' '}
                <Link href="/delete-account" className="text-fancoach-green hover:underline">
                  account-deletion page
                </Link>
                .
              </p>
              <p>
                Deletion removes the account and associated profile, saved content, chats, predictions,
                FanCoin history, friendships, and tournament memberships. Limited records may be retained
                where required for legal, security, fraud-prevention, or backup purposes and are removed
                or de-identified when no longer needed.
              </p>
            </Section>

            <Section title="Your choices">
              <p>
                You can update profile preferences in the app, control notifications in the app or
                device settings, and manage platform privacy or advertising controls through your device.
                You may contact us to request access, correction, or deletion of personal information.
              </p>
            </Section>

            <Section title="Security and international processing">
              <p>
                We use reasonable technical and organizational safeguards, including encryption in
                transit and access controls. No storage or transmission system is completely secure.
                FanCoach and its providers may process information in the United States and other
                countries where they operate.
              </p>
            </Section>

            <Section title="Age requirements">
              <p>
                FanCoach is intended for adults age 18 and older. We do not knowingly collect personal
                information from children. If you believe a child has provided information, contact us
                so we can investigate and remove it.
              </p>
            </Section>

            <Section title="Changes and contact">
              <p>
                We may update this policy as FanCoach changes. The date above identifies the latest
                version. For questions or privacy requests, email{' '}
                <a href="mailto:fancoachai@gmail.com" className="text-fancoach-green hover:underline">
                  fancoachai@gmail.com
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
