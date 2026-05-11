'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'

interface SkillChipProps {
  skill: string
  index: number
  isInView: boolean
}

export default function SkillChip({ skill, index, isInView }: SkillChipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    x.set(distanceX * 0.1)
    y.set(distanceY * 0.1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      className="relative cursor-default"
    >
      <motion.div
        className={`px-4 py-2 bg-white dark:bg-[#121212] border rounded-full text-sm transition-colors ${
          isHovered
            ? 'border-[#6366f1]/50 text-[#111111] dark:text-[#ededed] bg-[#fafafa] dark:bg-[#1a1a1a] shadow-lg shadow-[#6366f1]/20'
            : 'border-[#e6e6e6] dark:border-[#1a1a1a] text-[#4b5563] dark:text-[#a0a0a0] hover:border-[#cfcfcf] dark:hover:border-[#2a2a2a]'
        }`}
      >
        {skill}
      </motion.div>
    </motion.div>
  )
}


