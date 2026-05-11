'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative py-6">
      <motion.div
        initial={{ opacity: 0, scaleX: 0.7 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.3, 1] }}
        className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent blur-[1px]"
      />
    </div>
  )
}



