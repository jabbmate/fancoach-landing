import React from 'react'
import Link from 'next/link'
import { Play, BookOpen, MessageCircle } from 'lucide-react'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'


export default function About() {
  const features = [
    {
      icon: Play,
      title: "Real-Time Cards",
      description: "Get instant explanations for every play as it happens. No more confusion about what just occurred on the field."
    },
    {
      icon: BookOpen,
      title: "Beginner Glossary",
      description: "Tap any term to get simple, clear definitions. Build your sports vocabulary one play at a time."
    },
    {
      icon: MessageCircle,
      title: "Interactive Chat",
      description: "Ask questions and get detailed breakdowns with diagrams. Your personal coach is always ready to help."
    }
  ]

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
            <Link href="/privacy" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/hiring" className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200 font-medium">
              We're Hiring
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Personal Sports{' '}
            <span className="text-fancoach-teal">Coach</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            FanCoach transforms how new and casual fans experience live sports.
            Never feel lost during a game again.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-fancoach-teal bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-fancoach-teal" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Level Up Your{' '}
            <span className="text-fancoach-teal">Game Knowledge?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of fans who are already signed up for early access.
          </p>
          <Link
            href="/"
            className="inline-block bg-fancoach-teal text-black font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 hover:transform hover:scale-105 transition-all duration-200"
          >
            Get Early Access
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
} 