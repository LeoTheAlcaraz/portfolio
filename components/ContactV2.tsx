'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MessageSquare, ArrowRight, BarChart3 } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'leoalcarazjr2004@gmail.com',
    href: 'mailto:leoalcarazjr2004@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/leothealcaraz',
    href: 'https://linkedin.com/in/leothealcaraz/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/LeoTheAlcaraz',
    href: 'https://github.com/LeoTheAlcaraz',
  },
  {
    icon: BarChart3,
    label: 'DataCamp',
    value: 'datacamp.com/portfolio/LeoTheAlcaraz',
    href: 'https://www.datacamp.com/portfolio/LeoTheAlcaraz',
  },
]

export default function ContactV2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section ref={ref} id="contact" className="section-padding relative">
      <div className="layout-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#f5f5f0]">
              Let&apos;s work together
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] mx-auto" />
            <p className="text-lg text-[#6b6b6b] dark:text-[#a0a0a0] max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you&apos;d like to collaborate.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="card-premium p-8 text-center hover-lift group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 dark:from-[#6b5b95]/20 dark:to-[#4a9b8e]/20 group-hover:from-[#6b5b95]/20 group-hover:to-[#4a9b8e]/20 dark:group-hover:from-[#6b5b95]/30 dark:group-hover:to-[#4a9b8e]/30 transition-colors">
                    <link.icon
                      size={28}
                      className="text-[#6b5b95] dark:text-[#4a9b8e] group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#111111] dark:text-[#f5f5f0] mb-2">{link.label}</h3>
                <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mb-4 break-all">{link.value}</p>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#6b5b95] dark:text-[#4a9b8e] group-hover:gap-3 transition-all">
                  Contact <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Large CTA Card */}
          <motion.div
            variants={itemVariants}
            className="card-premium p-12 text-center space-y-6 bg-gradient-to-br from-[#f9f9f7] to-[#f1f0ea] dark:from-[#242424] dark:to-[#1a1a1a]"
          >
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 dark:from-[#6b5b95]/20 dark:to-[#4a9b8e]/20">
              <MessageSquare size={32} className="text-[#6b5b95] dark:text-[#4a9b8e]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-2">
                Have a project in mind?
              </h3>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0] mb-6 max-w-xl mx-auto">
                Let&apos;s discuss your ideas, challenges, and goals. I&apos;m ready to help bring your vision to life.
              </p>
            </div>
            <a href="mailto:leo@example.com" className="btn-premium inline-flex items-center gap-2">
              Start a conversation <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-[#6b6b6b] dark:text-[#909090]"
          >
            I typically respond to inquiries within 24 hours. Can&apos;t wait to hear from you!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
