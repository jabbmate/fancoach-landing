import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-ground text-ink">
      <Navbar />

      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Privacy <span className="gradient-text">policy.</span>
          </h1>

          <p className="mt-6 text-base text-ink-faint">Last updated: December 2024</p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="font-display text-2xl font-bold">No personal information collected</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                FanCoach does not require you to create an account or log in. We do not collect,
                store, or process any personal information such as your name, email address, phone
                number, or physical location. Because there are no user accounts, we do not hold any
                data that can be linked back to you as an individual.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">Anonymized analytics</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                We use third-party analytics tools to collect anonymized usage data. This helps us
                understand specific interactions within the app, such as which features are most
                popular or where crashes occur. This data is completely aggregated and cannot be
                used to identify you personally. We use this information solely to improve the
                app&apos;s performance and user experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">Data security</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Since we do not collect personal data, there is no risk of your personal information
                being exposed. The anonymized analytics data is stored securely by our analytics
                providers and is restricted to authorized personnel for development purposes only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">Contact us</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                If you have any questions about this Privacy Policy, please contact us at
                <a
                  href="mailto:fancoachai@gmail.com"
                  className="ml-1 text-fancoach-green hover:underline"
                >
                  fancoachai@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
