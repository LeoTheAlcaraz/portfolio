'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const experiences = [
  {
    company: 'Department of Trade and Industry (DTI) - Mandaluyong',
    role: 'Intern — Business Development & Infrastructure',
    period: 'Jul 2025 - Present',
    description:
      'On-site internship supporting business development, infrastructure, and administrative operations at TCIPO (Tiger City Investment Promotions Office).',
    achievements: [
      'Guided business owners through application processes and document verification',
      'Coordinated logistics for workshops and trade fairs to support local entrepreneurs',
      'Organized digital and physical records for easy retrieval of permits and documents',
      'Performed data entry and tracking for local business trends and project effectiveness',
    ],
    techs: ['Data Management', 'Administration'],
  },
  {
    company: 'PUP Manila',
    role: 'Data Science Specialist',
    period: 'Dec 2024 - Present',
    description:
      'Developed and implemented AI-based solutions to streamline operations and led training sessions to upskill members in data science and AI.',
    achievements: [
      'Built ML workflows for operational insights and decision support',
      'Organized hands-on seminars and collaborative projects in ML and data analytics',
    ],
    techs: ['Python', 'Machine Learning', 'Data Analytics'],
  },
  {
    company: 'Microsoft Learn Student Ambassadors - PUP Manila',
    role: 'Head of Operations / Executive Vice President',
    period: 'Feb 2024 - Present',
    description:
      'Led operations and programming for the student ambassador chapter, organizing workshops and building partnerships with industry mentors.',
    achievements: [
      'Organized workshops and events promoting technical skills and career development',
      'Coordinated with industry professionals to provide mentorship and networking',
      'Oversaw chapter operations and growth as Executive VP and Head of Operations',
    ],
    techs: ['Leadership', 'Community Building'],
  },
  {
    company: 'Google AI Hackathon',
    role: 'Team Lead',
    period: 'Oct 2024 - Present',
    description:
      'Led the team for the Google AI Hackathon project "VisuAlly", an accessibility-focused sign-language application.',
    achievements: [
      'Managed project development and cross-functional collaboration',
      'Presented the final accessible AI solution to judges and stakeholders',
    ],
    techs: ['AI', 'Accessibility'],
  },
  {
    company: 'Vanar',
    role: 'Ambassador',
    period: 'Oct 2024 - Present',
    description: 'Brand ambassadorship representing Vanar in outreach and community activities.',
    achievements: ['Represented brand in community initiatives and partnerships'],
    techs: ['Community', 'Brand Ambassadorship'],
  },
  {
    company: 'Blue Ocean Student Entrepreneur Competition',
    role: 'Ambassador (Seasonal)',
    period: 'Oct 2024 - Present',
    description: 'Support and promotion of the competition across student networks (remote).',
    achievements: ['Led outreach and cross-functional team coordination for the competition'],
    techs: ['Event Coordination', 'Leadership'],
  },
  {
    company: 'AWS Cloud Club - PUP Manila',
    role: 'Network Specialist / Network & Infrastructure Dept. Head',
    period: 'Oct 2023 - Present',
    description:
      'Managed network infrastructure for club activities, coordinated AWS training, and implemented network security best practices.',
    achievements: [
      'Ensured reliable connectivity for workshops and events',
      'Coordinated cloud training sessions and hands-on labs',
    ],
    techs: ['Networking', 'AWS', 'Security'],
  },
  {
    company: 'Self-employed',
    role: 'Data Analyst',
    period: 'Feb 2024 - Present',
    description: 'Freelance data analysis and project-based work (hybrid).',
    achievements: ['Delivered data-driven insights and reports for small projects'],
    techs: ['Data Analysis', 'Visualization'],
  },
]

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAllExperiences, setShowAllExperiences] = useState(false)

  const techIconMap: { [key: string]: React.ReactNode } = {
    React: <FaReact key="react" size={16} />,
    'Next.js': <SiNextdotjs key="next" size={16} />,
    'Node.js': <FaNodeJs key="node" size={16} />,
    TypeScript: <SiTypescript key="ts" size={16} />,
    'Tailwind CSS': <SiTailwindcss key="tailwind" size={16} />,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 3)

  return (
    <section ref={ref} id="experience" className="section-padding relative">
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative space-y-8"
        >
          <div className="absolute left-4 md:left-5 top-10 bottom-10 w-px bg-gradient-to-b from-[#6b5b95] via-[#4a9b8e] to-[#8b7355]" />

          {visibleExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              variants={itemVariants}
              className="relative pl-10 md:pl-12"
            >
              {/* Timeline marker */}
              <div className="absolute left-4 md:left-5 top-9 -translate-x-1/2 -translate-y-1/2 w-5 h-5">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6b5b95] to-[#4a9b8e] opacity-20 blur-sm"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="relative w-5 h-5 rounded-full bg-white dark:bg-[#242424] border-2 border-[#6b5b95] dark:border-[#4a9b8e] flex items-center justify-center shadow-soft dark:shadow-[0_0_12px_rgba(74,155,142,0.2)]"
                  whileHover={{ scale: 1.2 }}
                  animate={{ boxShadow: ['0 0 0px rgba(107,91,149,0.3)', '0 0 12px rgba(107,91,149,0.6)', '0 0 0px rgba(107,91,149,0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-[#6b5b95] dark:bg-[#4a9b8e]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  />
                </motion.div>
              </div>

              <div className="card-premium p-7 md:p-9 relative overflow-hidden group hover-lift-lg" 
                   style={{
                     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.02)'
                   }}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#6b5b95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="grid md:grid-cols-[minmax(220px,0.9fr)_1.4fr] gap-6 md:gap-10 items-start relative z-10">
                {/* Left - Company & Role */}
                <div>
                  <p className="text-sm font-semibold text-[#6b5b95] dark:text-[#4a9b8e] uppercase tracking-wide mb-2">
                    {exp.company}
                  </p>
                  <h3 className="text-xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-2">{exp.role}</h3>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] font-medium">{exp.period}</p>
                </div>

                {/* Center - Description & Achievements */}
                <div className="space-y-5">
                  <p className="text-[#5f5f5f] dark:text-[#c0c0c0] leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm text-[#6b6b6b] dark:text-[#a0a0a0] leading-relaxed"
                      >
                        <span className="text-[#6b5b95] dark:text-[#4a9b8e] font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {exp.techs.map((tech, techIdx) => (
                      <motion.div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[#fafaf8] dark:bg-[#242424] rounded-full text-xs font-medium text-[#111111] dark:text-[#f5f5f0] border border-[#d6d3cd] dark:border-[#3a3a3a] hover-lift-sm"
                        whileHover={{ scale: 1.08, boxShadow: '0 4px 12px rgba(107, 91, 149, 0.1)' }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIdx * 0.05 }}
                      >
                        {techIconMap[tech] && (
                          <span className="text-[#6b5b95] dark:text-[#4a9b8e]">{techIconMap[tech]}</span>
                        )}
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          ))}

          {experiences.length > 3 && (
            <motion.div variants={itemVariants} className="relative pl-10 md:pl-12">
              <div className="absolute left-4 md:left-5 top-8 -translate-x-1/2 -translate-y-1/2 w-5 h-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6b5b95] to-[#4a9b8e] opacity-20 blur-sm" />
                <div className="relative w-5 h-5 rounded-full bg-white dark:bg-[#242424] border-2 border-[#d6d3cd] dark:border-[#4a9b8e] flex items-center justify-center shadow-soft dark:shadow-[0_0_12px_rgba(74,155,142,0.2)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6b5b95] dark:bg-[#4a9b8e]" />
                </div>
              </div>
              <div className="card-premium p-7 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#111111] dark:text-[#f5f5f0]">
                    {showAllExperiences ? 'Condensed view' : 'More experience below'}
                  </p>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0] mt-1">
                    {showAllExperiences
                      ? 'Collapse back to the top 3 experiences.'
                      : `Showing 3 of ${experiences.length} experiences to keep this section concise.`}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllExperiences((current) => !current)}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#d6d3cd] bg-white text-[#111111] hover:bg-[#fafaf8] transition-colors"
                >
                  {showAllExperiences ? 'Show less' : 'Expand experience'}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
