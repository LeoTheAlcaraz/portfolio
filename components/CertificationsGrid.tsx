'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'

interface Certification {
  name: string
  issuer: string
  year?: string
  category: 'data' | 'cloud' | 'fullstack' | 'leadership'
  link?: string
}

const certifications: Certification[] = [
  {
    name: 'Data Science with Python',
    issuer: 'DataCamp',
    category: 'data',
    link: 'https://www.datacamp.com/portfolio/LeoTheAlcaraz',
  },
  {
    name: 'Machine Learning Fundamentals',
    issuer: 'DataCamp',
    category: 'data',
    link: 'https://www.datacamp.com/portfolio/LeoTheAlcaraz',
  },
  {
    name: 'Data Analysis with Pandas',
    issuer: 'DataCamp',
    category: 'data',
    link: 'https://www.datacamp.com/portfolio/LeoTheAlcaraz',
  },
  {
    name: 'Full-Stack Web Development',
    issuer: 'Self-Certified',
    category: 'fullstack',
  },
  {
    name: 'Community Leadership',
    issuer: 'StellarPH',
    year: '2025',
    category: 'leadership',
    link: 'https://stellarph.io/programs/ph100/2025',
  },
]

const categoryColors = {
  data: 'from-[#6366f1]/20 to-[#06b6d4]/20',
  cloud: 'from-[#f59e0b]/20 to-[#ef4444]/20',
  fullstack: 'from-[#6366f1]/20 to-[#8b5cf6]/20',
  leadership: 'from-[#06b6d4]/20 to-[#10b981]/20',
}

export default function CertificationsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Licenses & Certifications</h2>
            <div className="h-px bg-gradient-to-r from-[#1a1a1a] via-[#6366f1]/20 to-transparent flex-1" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${cert.issuer}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-6 border border-[#1a1a1a] rounded-xl hover:border-[#6366f1]/30 bg-[#121212]/50 backdrop-blur-sm transition-all duration-300 h-full"
                  >
                    {/* Ambient glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[cert.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-br ${categoryColors[cert.category]} rounded-lg`}>
                          <Award className="w-5 h-5 text-[#6366f1]" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#a0a0a0] group-hover:text-[#6366f1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-[#ededed] mb-1 group-hover:text-[#ededed] transition-colors">
                        {cert.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-[#a0a0a0]">
                        <span>{cert.issuer}</span>
                        {cert.year && (
                          <>
                            <span>•</span>
                            <span>{cert.year}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="group relative p-6 border border-[#1a1a1a] rounded-xl hover:border-[#6366f1]/30 bg-[#121212]/50 backdrop-blur-sm transition-all duration-300 h-full">
                    {/* Ambient glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[cert.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                    
                    <div className="relative z-10">
                      <div className={`p-3 bg-gradient-to-br ${categoryColors[cert.category]} rounded-lg mb-4 inline-block`}>
                        <Award className="w-5 h-5 text-[#6366f1]" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-[#ededed] mb-1">
                        {cert.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-[#a0a0a0]">
                        <span>{cert.issuer}</span>
                        {cert.year && (
                          <>
                            <span>•</span>
                            <span>{cert.year}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


