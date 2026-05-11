'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get to know me<span className="text-[#6366f1]"> —</span> Leo Alcaraz Jr.
            </h2>
            <div className="h-px bg-gradient-to-r from-[#1a1a1a] via-[#6366f1]/20 to-transparent flex-1" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#a0a0a0]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              I write code that reads well, build systems that scale, and design interfaces people
              actually want to use. The details matter—performance, accessibility, and how it feels
              to interact with what I&apos;ve built.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Currently working across the stack: React and Next.js for frontends, Node.js for backends,
              Python for data work and AI integrations. I reach for the right tool for the problem,
              not the trendy one.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              When I&apos;m not coding, I&apos;m leading communities, mentoring, and speaking about what I&apos;ve learned.
              Teaching clarifies thinking. Leading builds perspective. Both make me a better engineer.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Full-Stack', value: 'Web' },
                { label: 'AI & ML', value: 'Integration' },
                { label: 'Data', value: 'Analysis' },
                { label: 'Design', value: 'Systems' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="p-6 border border-[#1a1a1a] rounded-lg hover:border-[#6366f1]/30 hover:bg-[#121212]/50 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold mb-1 group-hover:text-[#6366f1] transition-colors">{item.value}</div>
                  <div className="text-sm text-[#a0a0a0]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
