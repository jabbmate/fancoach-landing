'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function VideoShowcase() {
    const [isMuted, setIsMuted] = useState(true)
    const videoReference1 = useRef<HTMLVideoElement>(null)
    const videoReference2 = useRef<HTMLVideoElement>(null)

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    useEffect(() => {
        if (videoReference1.current) {
            videoReference1.current.muted = isMuted
        }
        if (videoReference2.current) {
            videoReference2.current.muted = isMuted
        }
    }, [isMuted])

    return (
        <div className="relative w-full max-w-5xl mx-auto mt-8">
            {/* Video Container */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center">
                {/* Video 1 */}
                <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black">
                    <div className="aspect-[9/16] relative">
                        <video
                            ref={videoReference1}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            src="/frat-bro-ad.mov"
                        />
                    </div>
                </div>

                {/* Video 2 */}
                <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black">
                    <div className="aspect-[9/16] relative">
                        <video
                            ref={videoReference2}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            src="/girl-fantasy-ad.mov"
                        />
                    </div>
                </div>
            </div>

            {/* Volume Control - Centered Overlay or Button */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30">
                <button
                    onClick={toggleMute}
                    className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
                    aria-label={isMuted ? "Unmute videos" : "Mute videos"}
                >
                    {isMuted ? (
                        <VolumeX className="w-6 h-6" />
                    ) : (
                        <Volume2 className="w-6 h-6 text-fancoach-teal" />
                    )}
                </button>
            </div>
        </div>
    )
}
