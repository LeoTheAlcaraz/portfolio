'use client'

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useMemo } from 'react'

/**
 * Global background system with layered gradients and parallax.
 * Sits behind all content to keep the experience continuous.
 */
export default function BackgroundLayers() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.7])
  const hue = useTransform(scrollYProgress, [0, 1], [0, 12])
  const filter = useMotionTemplate`hue-rotate(${hue}deg)`

  const gradients = useMemo(
    () => [
      'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.18), transparent 45%)',
      'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.12), transparent 40%)',
      'radial-gradient(circle at 30% 80%, rgba(236, 72, 153, 0.10), transparent 45%)',
      'radial-gradient(circle at 70% 75%, rgba(14, 165, 233, 0.12), transparent 50%)',
    ],
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: y1, opacity, filter }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gradients.join(', '),
            backgroundRepeat: 'no-repeat',
            backgroundSize: '120% 120%',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity: 0.5 }}
        className="absolute inset-0 mix-blend-screen"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.04), transparent 55%), radial-gradient(circle at 15% 70%, rgba(255,255,255,0.03), transparent 60%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '120% 120%',
          }}
        />
      </motion.div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 160 160%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')",
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  )
}

