'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Web Platform',
    description: 'Full-stack application handling real-time data flows. Built with React, Node.js, and PostgreSQL. Integrated AI features that feel native, not bolted on.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AI Integration'],
    link: '#',
  },
  {
    title: 'Data Analytics Work',
    description: 'Python-based data analysis and visualization projects. Processing datasets, extracting insights, building dashboards. See more on DataCamp.',
    stack: ['Python', 'Pandas', 'React', 'D3.js'],
    link: 'https://www.datacamp.com/portfolio/LeoTheAlcaraz',
  },
  {
    title: 'Automation Systems',
    description: 'Built ML-powered tools that cut manual work significantly. Python, TensorFlow, containerized deployments. Focus on reliability over flash.',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    link: '#',
  },
  {
    title: 'Design Systems',
    description: 'Component libraries and design systems. TypeScript, React, documented patterns. Making teams move faster with consistent, reusable primitives.',
    stack: ['React', 'TypeScript', 'Storybook', 'Figma'],
    link: '#',
  },
]

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Work</h2>
            <div className="h-px bg-gradient-to-r from-[#1a1a1a] via-[#6366f1]/20 to-transparent flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
