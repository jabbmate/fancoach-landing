import React from 'react'
import Logo from '@/components/Logo'
import EmailCaptureForm from '@/components/EmailCaptureForm'
import AppShowcase from '@/components/AppShowcase'
import VideoShowcase from '@/components/VideoShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a href="/about" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200">
              About
            </a>
            <a href="/privacy" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200">
              Privacy
            </a>
            <a href="/hiring" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200 font-medium">
              We're Hiring
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 sm:px-6 lg:px-8 overflow-hidden">
        {/* Base Background */}
        {/* Base Background - Solid Black */}
        <div className="absolute inset-0 z-0 bg-black"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto animate-slide-up px-4 md:px-0 py-8 md:py-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-3 leading-tight" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
            Understand Every Play.{' '}
            <span className="gradient-text">Instantly.</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 md:mb-6 max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgba(209, 213, 219, 0.7)' }}>
            No more sitting around totally and utterly confused while your expert sports friends dominate the conversation...
            <br /><br />
            FanCoach will train you to be the best fan you can be... get real-time explanations after each play, definitions, and interactive breakdowns that make every game easy to follow.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <EmailCaptureForm />
          </div>

          {/* Featured Videos */}
          <div className="mt-8 mb-12">
            <VideoShowcase />
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Starting with American Football • Coming soon to the Google Play Store
          </p>


        </div>
      </section>

      {/* App Store & Support Section */}
      <section className="bg-gray-900 py-16 px-6 relative z-10 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Get FanCoach Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Now available on the iOS App Store. Start your journey to becoming a smarter fan.
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="https://apps.apple.com/us/app/fancoach/id6756193930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1703030400"
                alt="Download on the App Store"
                style={{ width: '160px', height: '53px' }}
              />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              Need help or have suggestions?
              <br />
              <a href="mailto:fancoachai@gmail.com" className="text-fancoach-teal hover:underline mt-2 inline-block">
                fancoachai@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <AppShowcase />

      <Footer />
    </main >
  )
} 