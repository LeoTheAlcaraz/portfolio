'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SkillChip from './SkillChip'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'AI / Data / Automation',
    skills: ['Python', 'TensorFlow', 'Pandas', 'Automation', 'Data Analysis', 'ML Integration'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma', 'DataCamp'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Stack</h2>
            <div className="h-px bg-gradient-to-r from-[#1a1a1a] via-[#6366f1]/20 to-transparent flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-[#ededed] mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillChip
                      key={skill}
                      skill={skill}
                      index={categoryIndex * category.skills.length + skillIndex}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
