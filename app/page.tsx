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
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 sm:px-6 lg:px-8 overflow-hidden">
        {/* Base Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"></div>
        
        {/* Lava Lamp Animated Blobs */}
        <div className="absolute inset-0 z-10">
          {/* Blob 1 - Teal */}
          <div className="absolute w-96 h-96 bg-gradient-radial from-fancoach-teal/40 via-fancoach-teal/20 to-transparent rounded-full blur-xl animate-lava-blob-1 top-1/4 left-1/4"></div>
          
          {/* Blob 2 - Purple */}
          <div className="absolute w-80 h-80 bg-gradient-radial from-purple-600/35 via-purple-600/15 to-transparent rounded-full blur-xl animate-lava-blob-2 top-1/3 right-1/4"></div>
          
          {/* Blob 3 - Blue */}
          <div className="absolute w-72 h-72 bg-gradient-radial from-blue-600/40 via-blue-600/20 to-transparent rounded-full blur-xl animate-lava-blob-3 bottom-1/3 left-1/3"></div>
          
          {/* Blob 4 - Teal-Purple Mix */}
          <div className="absolute w-64 h-64 bg-gradient-radial from-cyan-500/30 via-teal-600/15 to-transparent rounded-full blur-xl animate-lava-blob-4 bottom-1/4 right-1/3"></div>
          
          {/* Blob 5 - Purple-Blue Mix */}
          <div className="absolute w-88 h-88 bg-gradient-radial from-indigo-600/35 via-purple-700/18 to-transparent rounded-full blur-xl animate-lava-blob-5 top-1/2 left-1/2"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto animate-slide-up px-4 md:px-0 py-8 md:py-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-3 leading-tight" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
            Understand Every Play.{' '}
            <span style={{ color: 'rgba(0, 212, 170, 0.85)' }}>Instantly.</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 md:mb-6 max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgba(209, 213, 219, 0.7)' }}>
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