import React from 'react'
import Image from 'next/image'

export default function PhoneFrame({
  src,
  alt,
  className = '',
  glow = true,
}: {
  src: string
  alt: string
  className?: string
  glow?: boolean
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="phone-halo pointer-events-none absolute -inset-10 -z-10 rounded-full blur-2xl"
        />
      )}
      <div className="relative rounded-[2.6rem] bg-ink p-[9px] shadow-phone ring-1 ring-black/5">
        <div className="relative h-[472px] w-[218px] overflow-hidden rounded-[2.1rem] bg-black">
          <div className="absolute left-1/2 top-2 z-20 h-[20px] w-[74px] -translate-x-1/2 rounded-full bg-black" />
          <Image src={src} alt={alt} fill sizes="218px" className="object-cover" />
        </div>
      </div>
    </div>
  )
}
