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

          <p className="mt-6 text-base text-ink-faint">Last updated: September 15, 2026</p>

          <div className="mt-10 space-y-10">
            <Section title="Overview">
              <p>
                FanCoach is a personalized sports companion with live commentary, AI questions and
                answers, recaps, virtual FanCoin predictions, friends, and tournaments. This policy
                explains what information FanCoach collects through the mobile app, website, and
                related services, why we use it, when it is shared, and the choices available to you.
              </p>
            </Section>

            <Section title="Information we collect">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Account and profile information:</strong> FanCoach creates an anonymous
                  authenticated account when you first use the app. If you later connect Apple or
                  Google sign-in, we may receive the name, email address, and account identifier that
                  provider makes available. We also store your display name, invite code, favorite
                  teams, custom commentary style, and app and notification preferences.
                </li>
                <li>
                  <strong>Content and activity:</strong> questions and chat messages you send, saved or
                  shared commentary cards, reminders, games you open and time spent watching, FanCoin
                  picks, wagers, balances, and transactions, friendships, tournament participation,
                  and other feature interactions.
                </li>
                <li>
                  <strong>Device, analytics, and technical information:</strong> push-notification
                  tokens, Firebase and AppsFlyer identifiers, device or advertising identifiers where
                  permitted, app and operating-system versions, crash reports, diagnostics, and events
                  describing how the app performs and is used. When you open certain FanCoach QR or
                  campaign links, we may also receive an IP address, browser user agent, referrer, and
                  campaign source.
                </li>
                <li>
                  <strong>Information stored on your device:</strong> the app stores certain settings
                  and progress locally, such as theme and tutorial choices, recently viewed sports or
                  games, invitation state, and engagement progress.
                </li>
              </ul>
            </Section>

            <Section title="How we use information">
              <p>We use this information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>create and secure accounts and provide personalized FanCoach features;</li>
                <li>generate commentary, answer questions, create recaps, and operate predictions;</li>
                <li>support friends, tournaments, saved content, and optional notifications;</li>
                <li>
                  measure app performance and engagement, understand feature usage, prevent abuse, and
                  fix crashes;
                </li>
                <li>
                  attribute installs and measure or optimize advertising campaigns where allowed; and
                </li>
                <li>respond to support, privacy, and account-deletion requests.</li>
              </ul>
            </Section>

            <Section title="AI processing">
              <p>
                To generate a response, FanCoach sends Anthropic the question or message you submit,
                portions of your recent chat, your custom commentary instructions when relevant, and
                related game or commentary context. FanCoach stores chat history so you can continue a
                conversation and access it later. Please do not include sensitive personal information
                in a sports question or custom commentary instruction.
              </p>
            </Section>

            <Section title="Analytics, attribution, and advertising">
              <p>
                We use Firebase Analytics to understand app usage and Firebase Crashlytics to diagnose
                errors. Analytics events can include your FanCoach user identifier, screens or games
                opened, watch time, notification activity, prediction settings, and feature actions.
              </p>
              <p>
                We use AppsFlyer for install attribution and campaign measurement. FanCoach may send
                AppsFlyer a FanCoach user identifier, device or advertising identifier where permitted,
                and engagement events such as games watched, predictions or FanCoin amounts, card
                interactions, daily rewards, and purchase-intent actions. AppsFlyer may make selected
                events available to advertising partners configured for FanCoach so campaigns can be
                attributed and optimized.
              </p>
              <p>
                On iOS, access to the advertising identifier is subject to the App Tracking
                Transparency choice presented by the operating system. You can also limit advertising
                identifiers and personalized advertising through your iOS or Android device settings.
              </p>
            </Section>

            <Section title="When we share information">
              <p>We use the following categories of providers to operate FanCoach:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Google Firebase for authentication, analytics, crash reporting, cloud messaging, and
                  some app data;
                </li>
                <li>Amazon Web Services for backend hosting and data storage;</li>
                <li>Anthropic for AI-generated content;</li>
                <li>AppsFlyer and configured advertising partners for attribution and campaign measurement;</li>
                <li>Expo for app updates and related technical delivery services;</li>
                <li>Apple or Google when you choose to connect their sign-in services; and</li>
                <li>sports-data providers that supply game information.</li>
              </ul>
              <p>
                We may also disclose information when required by law, to protect users, FanCoach, or
                others, or in connection with a merger, financing, acquisition, or sale of assets. We do
                not sell personal information for money. Some privacy laws define a “sale” or “sharing”
                more broadly to include certain advertising and measurement disclosures; the AppsFlyer
                and advertising-partner activity described above may fall within those definitions.
              </p>
            </Section>

            <Section title="Friends, tournaments, and sharing">
              <p>
                Your display name and information you choose to use in friend or tournament features,
                such as participation, standings, or picks, may be visible to other participants. When
                you choose to share a card, game, or invitation, the app sends the selected content or
                link through the sharing service you choose. Please share only with people you trust.
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
                Deletion removes your Firebase authentication identity, FanCoach profile and preferences,
                reminders, saved content, chats, user picks and wagers, FanCoin balance and transaction
                history, friendships, and tournament memberships. It does not remove global game data,
                prediction questions used for all users, or information that has been aggregated or
                de-identified. Information already processed by analytics, attribution, or other service
                providers may remain subject to their retention practices. Limited records may also be
                retained where required for legal, security, fraud-prevention, or backup purposes, then
                removed or de-identified when no longer needed.
              </p>
            </Section>

            <Section title="Your choices">
              <p>
                You can update profile preferences in the app, control notifications in the app or
                device settings, respond to the iOS tracking prompt, and manage platform privacy or
                advertising controls through your device. Depending on where you live, you may have the
                right to request access, correction, deletion, or a copy of personal information, or to
                object to or restrict certain processing. Contact us to make a request. We may need to
                verify your account before completing it.
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
                FanCoach is intended for users age 13 and older and is not directed to children under
                13. We do not knowingly collect personal information from children under 13. If you
                believe a child has provided information, contact us so we can investigate and remove it.
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
