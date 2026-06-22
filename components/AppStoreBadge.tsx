import React from 'react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/fancoach/id6756193930'

export default function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download FanCoach on the App Store"
      className={`inline-flex transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1703030400"
        alt="Download on the App Store"
        width={168}
        height={56}
        className="h-[56px] w-auto"
      />
    </a>
  )
}

export { APP_STORE_URL }
