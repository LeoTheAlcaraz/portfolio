'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    const updateEnabledState = () => {
      setIsEnabled(mediaQuery.matches)
    }

    updateEnabledState()

    if (!mediaQuery.matches) {
      return
    }

    let frameId = 0
    let latestX = 0
    let latestY = 0
    let lastHoverState = false

    const updateCursor = () => {
      x.set(latestX)
      y.set(latestY)
      frameId = 0
    }

    const handlePointerMove = (event: PointerEvent) => {
      latestX = event.clientX - 12
      latestY = event.clientY - 12

      const target = event.target instanceof Element ? event.target : null
      const isInteractive =
        Boolean(target?.closest('a, button, input, textarea, select, summary')) ||
        target?.classList.contains('cursor-pointer') === true ||
        target?.closest('[data-cursor="interactive"]') !== null

      if (isInteractive !== lastHoverState) {
        lastHoverState = isInteractive
        setIsHovering(isInteractive)
      }

      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateCursor)
      }
    }

    const handlePointerLeave = () => {
      lastHoverState = false
      setIsHovering(false)
    }

    mediaQuery.addEventListener('change', updateEnabledState)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('blur', handlePointerLeave)
    document.addEventListener('visibilitychange', handlePointerLeave)

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }

      mediaQuery.removeEventListener('change', updateEnabledState)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', handlePointerLeave)
      document.removeEventListener('visibilitychange', handlePointerLeave)
    }
  }, [x, y])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        style={{ x, y }}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
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
      </motion.div>
    </>
  )
}
