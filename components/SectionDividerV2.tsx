'use client'

import { motion } from 'framer-motion'

export default function SectionDividerV2() {
  return (
    <div className="py-12 md:py-16 flex flex-col items-center gap-8">
      {/* Main gradient line */}
      <motion.div
        className="w-12 h-1 bg-gradient-to-r from-[#6b5b95] via-[#4a9b8e] to-[#8b7355] rounded-full shadow-glow"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      />

      {/* Subtle accent dots */}
      <motion.div
        className="flex gap-3 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#6b5b95]/40"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#4a9b8e]/40"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#8b7355]/40"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
      </motion.div>
    </div>
  )
}
