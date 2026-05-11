'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - 12)
      y.set(event.clientY - 12)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null
      if (!target) return

      const isInteractive =
        Boolean(target.closest('a, button, input, textarea, select, summary')) ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[data-cursor="interactive"]') !== null

      setIsHovering(isInteractive)
    }

    const handlePointerLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', handlePointerOver, true)
    document.addEventListener('mouseleave', handlePointerLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handlePointerOver, true)
      document.removeEventListener('mouseleave', handlePointerLeave, true)
    }
  }, [x, y])

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        {/* Pointer tip */}
        <div className="absolute top-0 left-2 w-0 h-0 border-l-2 border-r-2 border-t-3 border-l-transparent border-r-transparent border-t-[#6b5b95] filter drop-shadow-[0_0_4px_rgba(107,91,149,0.4)]" />
        {/* Outer glow ring */}
        <motion.div
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -top-3 -left-3 w-6 h-6 rounded-full border border-[#6b5b95]/40 shadow-[0_0_12px_rgba(107,91,149,0.3)]"
        />

        {/* Middle accent ring */}
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -top-2.5 -left-2.5 w-5 h-5 rounded-full border border-[#4a9b8e]/30 shadow-[0_0_8px_rgba(74,155,142,0.25)]"
        />

        {/* Inner dot with glow */}
        <motion.div
          animate={{
            scale: isHovering ? 0.6 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-[#6b5b95] to-[#4a9b8e] shadow-[0_0_16px_rgba(107,91,149,0.5),inset_0_0_8px_rgba(255,255,255,0.2)]"
        />

        {/* Subtle shimmer particles on hover */}
        {isHovering && (
          <>
            <motion.div
              animate={{
                x: [0, 8, 0],
                y: [0, -8, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 w-1 h-1 rounded-full bg-[#4a9b8e]/60 blur-sm"
            />
            <motion.div
              animate={{
                x: [0, -8, 0],
                y: [0, 8, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 w-1 h-1 rounded-full bg-[#6b5b95]/60 blur-sm"
            />
          </>
        )}
      </motion.div>
    </>
  )
}
