/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // FanCoach light "white-mode" system
        ground: '#F4F7F4',
        surface: '#FFFFFF',
        ink: '#0A1612',
        'ink-soft': '#3C4B44',
        'ink-faint': '#6B7B73',
        line: '#E3EAE6',
        fancoach: {
          green: '#07B27E',
          'green-bright': '#02BA89',
          forest: '#0A6E4E',
          mint: '#E6F6EF',
        },
        // legacy alias kept so older markup doesn't break
        'fancoach-teal': '#07B27E',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-dot': 'pulseDot 1.6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.7)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        phone: '0 40px 80px -20px rgba(10, 22, 18, 0.35)',
        card: '0 1px 2px rgba(10,22,18,0.04), 0 12px 32px -12px rgba(10,22,18,0.12)',
        'card-hover': '0 2px 4px rgba(10,22,18,0.05), 0 24px 48px -16px rgba(7,178,126,0.22)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
