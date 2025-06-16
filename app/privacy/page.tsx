import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200">
              About
            </Link>
          </div>
        </div>
      </nav>

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
                <h2 className="text-3xl font-bold mb-4 text-white">Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  At FanCoach, we are committed to protecting your privacy. This policy outlines 
                  how we collect, use, and protect your personal information when you use our 
                  sports education app and related services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  including delivering personalized sports education content and real-time game 
                  explanations tailored to your interests and skill level.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. Your data is encrypted both in transit and at rest.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at privacy@fancoach.app. We are committed to addressing 
                  your concerns and ensuring your privacy is protected.
                </p>
              </section>
            </div>

            <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-sm text-gray-400">
                <strong>Note:</strong> This is a placeholder privacy policy for the FanCoach 
                pre-launch landing page. A comprehensive privacy policy will be implemented 
                before the app launch, in compliance with applicable privacy laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 