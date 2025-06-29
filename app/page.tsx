import React from 'react'
import Logo from '@/components/Logo'
import EmailCaptureForm from '@/components/EmailCaptureForm'
import AppShowcase from '@/components/AppShowcase'
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 sm:px-6 lg:px-8">
        {/* Background with Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-gray-900"
            style={{
              backgroundImage: "url('/hero.jpg')",
              filter: 'blur(2px)',
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto animate-slide-up px-4 md:px-0 py-8 md:py-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-3 leading-tight">
            Understand Every Play.{' '}
            <span className="text-fancoach-teal">Instantly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-6 max-w-4xl mx-auto leading-relaxed">
            No more sitting around totally and utterly confused while your expert sports friends dominate the conversation... 
            <br /><br />
            FanCoach will train you to be the best fan you can be... get real-time explanations after each play, definitions, and interactive breakdowns that make every game easy to follow.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <EmailCaptureForm />
          </div>

          {/* Featured Image */}
          <div className="mt-8 flex justify-center">
            <div className="border-2 border-fancoach-teal rounded-lg p-2 bg-black/20 backdrop-blur-sm">
              <img
                src="/hero-screenshot.png"
                alt="FanCoach Feature"
                className="rounded-md max-w-full h-auto max-h-64 md:max-h-80"
              />
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Starting with American Football • Coming Soon to iOS & Android
          </p>
        </div>
      </section>

      <AppShowcase />

      <Footer />
    </main>
  )
} 