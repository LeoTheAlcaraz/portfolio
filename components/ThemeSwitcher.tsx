'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Check if user has a saved preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved ? saved === 'dark' : prefersDark

    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
    setIsMounted(true)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      html.style.colorScheme = 'dark'
    } else {
      html.classList.remove('dark')
      html.style.colorScheme = 'light'
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const newDark = !isDark
    const html = document.documentElement

    // Temporarily disable transitions while flipping theme classes to avoid frame drops.
    html.classList.add('theme-switching')
    setIsDark(newDark)
    applyTheme(newDark)

    window.setTimeout(() => {
      html.classList.remove('theme-switching')
    }, 200)
  }

  if (!isMounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-primary)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-[var(--card-bg-alt)] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark/light mode"
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center"
      >
        {isDark ? (
          <Moon size={18} className="text-[#6b5b95]" />
        ) : (
          <Sun size={18} className="text-[#f59e0b]" />
        )}
      </motion.div>
      <span className="text-sm font-medium">{isDark ? 'Dark' : 'Light'}</span>
    </motion.button>
  )
}
