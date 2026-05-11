import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        premium: {
          bg: {
            primary: '#f5f5f0',
            secondary: '#f1f0ea',
            tertiary: '#ece8df',
            quaternary: '#e7e3da',
          },
          card: {
            bg: '#ffffff',
            alt: '#fafaf8',
            glass: 'rgba(255,255,255,0.75)',
          },
          border: {
            primary: '#d6d3cd',
            secondary: '#dcd8d1',
          },
          text: {
            primary: '#111111',
            secondary: '#1a1a1a',
            muted: '#5f5f5f',
            mutedDark: '#6b6b6b',
          },
          accent: {
            indigo: '#6b5b95',
            blue: '#5b8ac5',
            teal: '#4a9b8e',
            warm: '#8b7355',
            sage: '#7a9b7f',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'magnetic': 'magnetic 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--tx), var(--ty)))' },
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(107, 91, 149, 0.15)',
        'glow-sm': '0 0 12px rgba(107, 91, 149, 0.1)',
        'glow-lg': '0 0 40px rgba(107, 91, 149, 0.2)',
        'glow-teal': '0 0 20px rgba(74, 155, 142, 0.15)',
        'premium-sm': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'premium-md': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'premium-lg': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '40px',
      },
    },
  },
  plugins: [],
}
export default config

