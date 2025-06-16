import React from 'react'

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function PrimaryButton({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false,
  className = ""
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-fancoach-teal text-black font-semibold px-8 py-4 rounded-lg
        hover:bg-opacity-90 hover:transform hover:scale-105
        transition-all duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        focus:outline-none focus:ring-2 focus:ring-fancoach-teal focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  )
} 