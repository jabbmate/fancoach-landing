import React from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Privacy <span className="text-fancoach-teal">Policy</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Last updated: December 2024
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">No Personal Information Collected</h2>
                <p className="text-gray-300 leading-relaxed">
                  FanCoach does not require you to create an account or log in. We do not collect, store, or process
                  any personal information such as your name, email address, phone number, or physical location.
                  Because there are no user accounts, we do not hold any data that can be linked back to you as an individual.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">Anonymized Analytics</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use third-party analytics tools to collect anonymized usage data. This helps us understand specific
                  interactions within the app, such as which features are most popular or where crashes occur.
                  This data is completely aggregated and cannot be used to identify you personally. We use this information
                  solely to improve the app's performance and user experience.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  Since we do not collect personal data, there is no risk of your personal information being exposed.
                  The anonymized analytics data is stored securely by our analytics providers and is restricted to
                  authorized personnel for development purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at
                  <a href="mailto:fancoachai@gmail.com" className="text-fancoach-teal hover:underline ml-1">fancoachai@gmail.com</a>.
                </p>
              </section>
            </div>


          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 