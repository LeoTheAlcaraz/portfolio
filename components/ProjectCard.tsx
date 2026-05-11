'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    stack: string[]
    link: string
  }
  index: number
  isInView: boolean
}

export default function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (e.clientX - centerX) / 15
    const distanceY = (e.clientY - centerY) / 15
    
    x.set(distanceX)
    y.set(distanceY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={project.link}
      target={project.link !== '#' ? '_blank' : undefined}
      rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="group relative p-8 border border-[#1a1a1a] rounded-2xl hover:border-[#6366f1]/30 bg-[#121212]/50 backdrop-blur-sm transition-all duration-500 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        initial={{ x: '-100%' }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold group-hover:text-[#ededed] transition-colors">
            {project.title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-[#6366f1]" />
          </div>
        </div>
        
        <p className="text-[#a0a0a0] leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-[#1a1a1a] border border-[#1a1a1a] rounded-full text-[#a0a0a0] group-hover:border-[#6366f1]/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
