'use client'

import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'

interface PasswordAuthProps {
  onAuthenticated: () => void
}

export default function PasswordAuth({ onAuthenticated }: PasswordAuthProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Check if password matches
    if (password === 'fancoach123$') {
      // Store authentication in localStorage
      localStorage.setItem('fancoach_authenticated', 'true')
      onAuthenticated()
    } else {
      setError('Incorrect password. Please try again.')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Access Required
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Please enter the password to continue
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-fancoach-teal focus:border-transparent"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <PrimaryButton
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Checking...' : 'Access Site'}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  )
} 