'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function VideoShowcase() {
    const [isMuted1, setIsMuted1] = useState(true)
    const [isMuted2, setIsMuted2] = useState(true)
    const videoReference1 = useRef<HTMLVideoElement>(null)
    const videoReference2 = useRef<HTMLVideoElement>(null)

    const toggleMute1 = () => {
        setIsMuted1(!isMuted1)
    }

    const toggleMute2 = () => {
        setIsMuted2(!isMuted2)
    }

    useEffect(() => {
        if (videoReference1.current) {
            videoReference1.current.muted = isMuted1
        }
    }, [isMuted1])

    useEffect(() => {
        if (videoReference2.current) {
            videoReference2.current.muted = isMuted2
        }
    }, [isMuted2])

    return (
        <div className="relative w-full max-w-3xl mx-auto mt-8">
            {/* Video Container */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center">
                {/* Video 1 */}
                <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black group">
                    <div className="aspect-[9/16] relative">
                        <video
                            ref={videoReference1}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted={isMuted1}
                            playsInline
                            src="/frat-bro-ad.mov"
                        />
                        {/* Individual Volume Control 1 */}
                        <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={toggleMute1}
                                className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
                                aria-label={isMuted1 ? "Unmute video 1" : "Mute video 1"}
                            >
                                {isMuted1 ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-fancoach-teal" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Video 2 */}
                <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black group">
                    <div className="aspect-[9/16] relative">
                        <video
                            ref={videoReference2}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted={isMuted2}
                            playsInline
                            src="/girl-fantasy-ad.mov"
                        />
                        {/* Individual Volume Control 2 */}
                        <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={toggleMute2}
                                className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
                                aria-label={isMuted2 ? "Unmute video 2" : "Mute video 2"}
                            >
                                {isMuted2 ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-fancoach-teal" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
