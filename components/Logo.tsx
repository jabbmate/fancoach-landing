import React from 'react'

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`text-2xl font-bold ${className}`}>
      <span className="text-white">Fan</span>
      <span className="text-fancoach-teal">Coach</span>
    </div>
  )
} 