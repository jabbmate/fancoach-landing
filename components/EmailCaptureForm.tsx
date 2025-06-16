'use client'

import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="text-center animate-fade-in">
        <div className="bg-fancoach-teal bg-opacity-10 border border-fancoach-teal rounded-lg p-6">
          <h3 className="text-xl font-semibold text-fancoach-teal mb-2">
            Thanks for joining!
          </h3>
          <p className="text-gray-300">
            We'll notify you when FanCoach launches.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="
            flex-1 px-4 py-4 rounded-lg bg-gray-900 border border-gray-700
            text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-fancoach-teal focus:border-transparent
            transition-all duration-200
          "
        />
        <PrimaryButton 
          type="submit" 
          disabled={isLoading || !email}
          className="whitespace-nowrap"
        >
          {isLoading ? 'Joining...' : 'Get Updates'}
        </PrimaryButton>
      </div>
    </form>
  )
} 