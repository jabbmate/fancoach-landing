import React from 'react'
import Image from 'next/image'

export default function Logo({
  className = '',
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="FanCoach"
        width={34}
        height={34}
        priority
        className="h-8 w-8 object-contain"
      />
      {showWordmark && (
        <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-ink">
          Fan<span className="text-fancoach-green">Coach</span>
        </span>
      )}
    </div>
  )
}
