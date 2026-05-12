'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

export default function NavigationV2() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      {/* Floating Pill Container */}
      <div className="flex justify-center px-4 sm:px-6">
          <div
            className={`relative flex items-center justify-between rounded-full transition-all duration-300 ${
              scrolled
                ? 'glass-effect-xl w-full max-w-3xl shadow-lg'
                : 'glass-effect w-full max-w-4xl shadow-soft'
            }`}
          >
          {/* Animated gradient glow background (only visible on scroll) */}
          {scrolled && (
            <motion.div
              className="absolute inset-0 rounded-full opacity-30 blur-xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'radial-gradient(circle, rgba(107, 91, 149, 0.3), transparent)',
              }}
            />
          )}

          <div className="flex items-center justify-between w-full px-4 md:px-8 py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className="shrink-0 z-10">
              <motion.div
                className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] bg-clip-text text-transparent cursor-pointer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
              >
                LA
              </motion.div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className="px-4 py-2 text-sm lg:text-base font-medium text-[#5f5f5f] dark:text-[#a0a0a0] relative group transition-colors duration-300"
                      whileHover={{ color: '#111111' }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                      {/* Animated underline */}
                      <motion.span
                        className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] rounded-full"
                        initial={{ scaleX: 0, originX: 0.5 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </motion.span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Theme & CTA (desktop) */}
            <div className="hidden md:flex items-center justify-end gap-3 shrink-0 z-10">
              <ThemeSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 ml-auto z-10"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X size={20} className="text-[#111111] dark:text-[#f5f5f0]" />
                ) : (
                  <Menu size={20} className="text-[#111111] dark:text-[#f5f5f0]" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from top */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`md:hidden mt-3 mx-4 rounded-2xl overflow-hidden ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="glass-effect-xl divide-y divide-white/10">
          <div className="space-y-1 p-3">
            {navItems.map((item, idx) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className="px-4 py-3 text-sm font-medium text-[#5f5f5f] dark:text-[#a0a0a0] hover:text-[#6b5b95] dark:hover:text-[#6b5b95] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-center">
              <ThemeSwitcher />
            </div>
            <motion.a
              href="/Resume - Leo Alcaraz Jr.pdf"
              download
              className="block w-full px-4 py-2 rounded-lg bg-[#6b5b95] text-white font-medium text-sm text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
