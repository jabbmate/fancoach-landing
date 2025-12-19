'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/hiring', label: "We're Hiring" },
    ]

    return (
        <nav className="relative z-50 p-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-fancoach-teal transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-fancoach-teal transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gray-800 p-6 md:hidden animate-fade-in">
                    <div className="flex flex-col space-y-4 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xl text-gray-300 hover:text-fancoach-teal transition-colors duration-200 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
