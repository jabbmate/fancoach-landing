import React from 'react'

const ANDROID_SIDELOAD_URL =
  'https://expo.dev/accounts/yuva2001/projects/fancoach/builds/2cd757fd-3e4b-4612-9692-4aa516ec75dc'

export default function AndroidDownloadBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={ANDROID_SIDELOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download the FanCoach Android APK"
      title="Download the FanCoach Android APK from the FanCoach install page"
      className={`group inline-flex h-[56px] min-w-[168px] items-center rounded-[9px] border border-black bg-black px-3.5 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fancoach-green ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="mr-2.5 h-8 w-8 shrink-0 fill-current text-white"
      >
        <path d="M17.6 9.48 19.44 6.3a.63.63 0 0 0-1.09-.63l-1.87 3.24A11.4 11.4 0 0 0 12 8c-1.59 0-3.11.32-4.48.91L5.65 5.67a.63.63 0 0 0-1.09.63L6.4 9.48C3.31 11.16 1.2 14.28 1 18h22c-.2-3.72-2.31-6.84-5.4-8.52ZM7 15.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[0.58rem] font-medium uppercase tracking-[0.08em] text-white/80">
          Download for
        </span>
        <span className="mt-1 font-sans text-[1.2rem] font-semibold tracking-tight">Android</span>
      </span>
      <span className="ml-auto rounded-full bg-white/15 px-1.5 py-1 text-[0.5rem] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors group-hover:bg-white/20">
        APK
      </span>
    </a>
  )
}

export { ANDROID_SIDELOAD_URL }
