import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Logo />
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 FanCoach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 