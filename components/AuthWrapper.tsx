'use client'

import React, { useState, useEffect } from 'react'
import PasswordAuth from './PasswordAuth'

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('fancoach_authenticated')
    setIsAuthenticated(authStatus === 'true')
    setIsLoading(false)
  }, [])

  const handleAuthenticated = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('fancoach_authenticated')
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <PasswordAuth onAuthenticated={handleAuthenticated} />
  }

  return (
    <div className="relative">
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
      >
        Logout
      </button>
      {children}
    </div>
  )
} 