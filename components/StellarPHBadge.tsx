'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'

export default function StellarPHBadge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.a
        href="https://stellarph.io/programs/ph100/2025"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block p-6 md:p-8 border border-[#1a1a1a] rounded-2xl bg-gradient-to-br from-[#121212] to-[#0a0a0a] hover:border-[#6366f1]/30 transition-all duration-500 overflow-hidden"
        whileHover={{ y: -4, scale: 1.02 }}
      >
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/5 via-[#06b6d4]/5 to-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-[#6366f1]/20 to-[#06b6d4]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Award className="w-6 h-6 text-[#6366f1]" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-[#ededed]">StellarPH Top 100</h3>
              <ExternalLink className="w-4 h-4 text-[#a0a0a0] group-hover:text-[#6366f1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              Recognized as one of the PH100 (2025) — a select group of emerging leaders and innovators.
            </p>
          </div>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
        />
      </motion.a>
    </motion.div>
  )
}


