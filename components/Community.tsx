'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Mic, BookOpen, Award } from 'lucide-react'

const experiences = [
  {
    icon: Users,
    title: 'Community Leadership',
    description: 'Leading tech communities and organizing events. Building spaces where people actually learn, not just network.',
  },
  {
    icon: Mic,
    title: 'Speaking & Workshops',
    description: 'Talks on full-stack patterns, AI integration, and practical development. Less theory, more real-world application.',
  },
  {
    icon: BookOpen,
    title: 'Mentoring',
    description: 'Working with developers from fundamentals to production systems. Emphasis on building, shipping, and learning from mistakes.',
  },
  {
    icon: Award,
    title: 'Technical Standards',
    description: 'Contributing to open-source and maintaining code quality. Good architecture isn\'t accidental—it\'s intentional.',
  },
]

export default function Community() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="community" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Community & Leadership</h2>
            <div className="h-px bg-gradient-to-r from-[#1a1a1a] via-[#6366f1]/20 to-transparent flex-1" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 border border-[#1a1a1a] rounded-lg hover:border-[#6366f1]/30 bg-[#121212]/50 backdrop-blur-sm transition-all duration-300 group"
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="relative z-10">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-[#6366f1]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ededed] transition-colors">{exp.title}</h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
