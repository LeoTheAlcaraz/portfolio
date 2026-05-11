'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/leothealcaraz/',
    icon: Linkedin,
    description: 'Professional network and career updates',
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/LeoTheAlcaraz',
    icon: Facebook,
    description: 'Connect and stay updated',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/leoalcrz/',
    icon: Instagram,
    description: 'Behind the scenes and daily life',
  },
  {
    name: 'DataCamp Portfolio',
    url: 'https://www.datacamp.com/portfolio/LeoTheAlcaraz',
    icon: ExternalLink,
    description: 'Data science projects and achievements',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#6366f1]/20 to-transparent w-24 mx-auto" />
            <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just talk shop? Find me here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 border border-[#1a1a1a] rounded-xl hover:border-[#6366f1]/30 bg-[#121212]/50 backdrop-blur-sm transition-all duration-300 text-left overflow-hidden"
                >
                  {/* Ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 bg-[#1a1a1a] rounded-lg group-hover:bg-[#6366f1]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#ededed] group-hover:text-[#6366f1] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 text-[#111111] dark:text-[#f5f5f0] group-hover:text-[#ededed] dark:group-hover:text-[#ffffff] transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-sm text-[#a0a0a0] dark:text-[#9aa0a6]">{social.description}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
