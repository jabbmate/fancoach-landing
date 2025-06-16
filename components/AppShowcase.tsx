'use client'

import React, { useState, useEffect } from 'react'

const screenshots = [
  { src: '/IMG_1775.PNG', alt: 'FanCoach App Screenshot 1' },
  { src: '/IMG_1776.PNG', alt: 'FanCoach App Screenshot 2' },
  { src: '/IMG_1777.PNG', alt: 'FanCoach App Screenshot 3' },
  { src: '/IMG_1778.PNG', alt: 'FanCoach App Screenshot 4' },
  { src: '/IMG_1779.PNG', alt: 'FanCoach App Screenshot 5' },
  { src: '/IMG_1780.PNG', alt: 'FanCoach App Screenshot 6' },
]

export default function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See FanCoach in{' '}
            <span className="text-fancoach-teal">Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a preview of how FanCoach will transform your sports viewing experience
          </p>
        </div>

        {/* Mobile Mockup Container */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-gray-900 rounded-[2.5rem] p-1">
                <div className="relative w-[280px] h-[600px] bg-black rounded-[2rem] overflow-hidden">
                  {/* Screenshot Display */}
                  <div className="relative w-full h-full">
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                                             >
                         <img
                           src={screenshot.src}
                           alt={screenshot.alt}
                           className="w-full h-full object-cover rounded-[1.5rem]"
                         />
                       </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-fancoach-teal text-black px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              Live Updates!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm border border-fancoach-teal">
              Real-time Coaching
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-fancoach-teal scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-fancoach-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-fancoach-teal text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
            <p className="text-gray-400">Optimized for your phone during live games</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fancoach-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-fancoach-teal text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-400">Instant explanations as plays happen</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fancoach-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-fancoach-teal text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">FanCoach AI</h3>
            <p className="text-gray-400">Learn more about a play with AI</p>
          </div>
        </div>
      </div>
    </section>
  )
} 