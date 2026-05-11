'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:leo@example.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-[#d6d3cd] dark:border-[#3a3a3a] bg-white/50 dark:bg-[#0f0f0f]/50 backdrop-blur-sm">
      <div className="layout-shell py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Left Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#111111] dark:text-[#f5f5f0]">Leo Alcaraz</h3>
              <p className="text-sm text-[#6b6b6b] dark:text-[#909090]">
                Full-stack developer crafting elegant digital experiences
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-lg bg-[#f9f9f7] dark:bg-[#242424] hover:bg-[#6b5b95] text-[#6b5b95] dark:text-[#4a9b8e] hover:text-white transition-all duration-300"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#d6d3cd] dark:via-[#3a3a3a] to-transparent" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6b6b6b] dark:text-[#909090]">
            <div>
              © {currentYear} Leo Alcaraz Jr. All rights reserved. Built with Next.js, TypeScript, and Tailwind CSS.
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#6b5b95] dark:text-[#4a9b8e] hover:text-[#111111] dark:hover:text-[#f5f5f0] transition-colors font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
