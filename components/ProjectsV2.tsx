'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'CropTech Website',
    summary: 'Agricultural management website with analytics, inventory, profile, and operations views.',
    details:
      'A crop-focused dashboard that combines field analytics, inventory tracking, and management screens into one system.',
    tags: ['Next.js', 'TypeScript', 'React'],
    primaryLink: 'https://github.com/llaight/CropTech-Website',
    primaryLabel: 'Repository',
    secondaryLink: 'https://github.com/llaight/CropTech-Website',
    secondaryLabel: 'Code',
    assetPath: '/project-previews/croptech-website.png',
  },
  {
    title: 'PUPStols',
    summary: 'DBMS for university stall owners with sales, suppliers, menu, finance, and employee modules.',
    details:
      'A full-stack admin system for stall owners built around CRUD workflows, dashboards, and MariaDB-backed operations.',
    tags: ['React', 'Node.js', 'Express', 'MariaDB'],
    primaryLink: 'https://github.com/LeoTheAlcaraz/pup-stalls',
    primaryLabel: 'Repository',
    secondaryLink: 'https://github.com/LeoTheAlcaraz/pup-stalls',
    secondaryLabel: 'Code',
    assetPath: '/project-previews/pupstols.png',
  },
  {
    title: 'Programming Quiz Challenge',
    summary: 'A quiz experience with 10 questions, email results, answer review, and scoring.',
    details: 'Interactive quiz interface focused on programming concepts with a guided review flow.',
    tags: ['JavaScript', 'Quiz UI', 'Responsive Design'],
    primaryLink: 'https://alcarazquiz.netlify.app/',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://alcarazquiz.netlify.app/',
    secondaryLabel: 'Open',
    assetPath: '/project-previews/programming-quiz-challenge.png',
  },
  {
    title: 'PUP Web Audio Site',
    summary: 'Immersive university microsite with history, soundscape, gallery, and video sections.',
    details: 'A multimedia PUP experience that mixes storytelling, audio, visuals, and navigation anchors.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    primaryLink: 'https://pupwebaudiosite.netlify.app/',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://pupwebaudiosite.netlify.app/',
    secondaryLabel: 'Open',
    assetPath: '/project-previews/pup-web-audio-site.png',
  },
  {
    title: 'PUP NavIt',
    summary: 'Campus navigation map for PUP Main Campus with location listings and wayfinding.',
    details: 'A map-based navigation experience that helps users find campus landmarks and facilities quickly.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    primaryLink: 'https://pupnavit.netlify.app/',
    primaryLabel: 'Live Demo',
    secondaryLink: 'https://pupnavit.netlify.app/',
    secondaryLabel: 'Open',
    assetPath: '/project-previews/pup-navit.png',
  },
  {
    title: 'VisuAlly',
    summary: 'Sign-language learning and translation app for inclusive communication.',
    details:
      'A hackathon project that turns sign-language gestures into learning and real-time communication experiences.',
    tags: ['Android', 'Django REST', 'Google Cloud'],
    primaryLink: 'https://devpost.com/software/visually-ei3bpv',
    primaryLabel: 'Devpost',
    secondaryLink: 'https://devpost.com/software/visually-ei3bpv',
    secondaryLabel: 'Story',
    assetPath: '/project-previews/visually.png',
  },
  {
    title: 'Attendance Dashboard',
    summary: 'A classroom attendance dashboard with records, profiles, and admin controls.',
    details: 'Static dashboard mockup showing structured tables, side navigation, and attendance summaries.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    primaryLink: 'https://github.com/LeoTheAlcaraz/Attendance-Dashboard',
    primaryLabel: 'Repository',
    secondaryLink: 'https://github.com/LeoTheAlcaraz/Attendance-Dashboard',
    secondaryLabel: 'Code',
    assetPath: '/project-previews/attendance-dashboard.png',
  },
  {
    title: 'QuickPortfolio',
    summary: 'Python portfolio generator that builds a responsive portfolio from prompts.',
    details:
      'A template-driven generator that turns user inputs into a Bootstrap/Jinja2 portfolio output.',
    tags: ['Python', 'Jinja2', 'Bootstrap'],
    primaryLink: 'https://github.com/LeoTheAlcaraz/QuickPortfolio',
    primaryLabel: 'Repository',
    secondaryLink: 'https://github.com/LeoTheAlcaraz/QuickPortfolio',
    secondaryLabel: 'Code',
    assetPath: '/project-previews/quickportfolio.png',
  },
  {
    title: 'LinkedIn Job Helper',
    summary: 'Python automation script for parsing résumés and streamlining job applications.',
    details:
      'A Selenium-based workflow that extracts résumé data and automates job search and application steps.',
    tags: ['Python', 'Selenium', 'PyPDF2'],
    primaryLink: 'https://github.com/LeoTheAlcaraz/streamlit-chatbot',
    primaryLabel: 'Repository',
    secondaryLink: 'https://github.com/LeoTheAlcaraz/streamlit-chatbot',
    secondaryLabel: 'Code',
    assetPath: '/project-previews/streamlit-chatbot.png',
  },
]

export default function ProjectsV2() {
  const ref = useRef(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    const node = carouselRef.current
    if (!node) return

    const delta = direction === 'left' ? -920 : 920
    node.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="work" className="section-padding relative">
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-4">
            Featured Work
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e]" />
          <p className="text-lg text-[#6b6b6b] dark:text-[#a0a0a0] mt-6 max-w-2xl">
            These are some of the projects I’ve built across web development, AI, data, and community work.
            Swipe through the reel or use the arrows to explore each one and see what it does.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-[#6b6b6b] dark:text-[#909090]">Use the arrows or drag sideways to move between projects.</p>
            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#d6d3cd] dark:border-[#3a3a3a] bg-white dark:bg-[#1a1a1a] text-[#6b5b95] hover:bg-[#fafaf8] dark:hover:bg-[#242424] transition-colors hover-lift-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll projects left"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#d6d3cd] dark:border-[#3a3a3a] bg-white dark:bg-[#1a1a1a] text-[#6b5b95] hover:bg-[#fafaf8] dark:hover:bg-[#242424] transition-colors hover-lift-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll projects right"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pr-1 hide-scrollbar"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="card-premium snap-center shrink-0 overflow-hidden group relative w-[88vw] lg:w-[1100px] hover-lift-lg"
                whileHover={{ boxShadow: '0 0 30px rgba(107, 91, 149, 0.15)' }}
              >
                  <div className="grid lg:grid-cols-2 relative">
                  <div className="relative min-h-[320px] lg:min-h-[520px] bg-gradient-to-br from-[#f5f3f0] to-[#ede9e1] dark:from-[#0b0b0b] dark:to-[#151515] overflow-hidden flex items-center justify-center lg:rounded-l-xl group">
                    <Image
                      src={project.assetPath}
                      alt={project.title}
                      fill
                      className="object-contain p-4 lg:p-8 max-w-full max-h-full group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 88vw, 1100px"
                    />
                    {/* Overlay glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-[#6b5b95]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="p-6 lg:p-8 flex flex-col justify-between bg-transparent lg:rounded-r-xl relative overflow-hidden">
                    {/* Background gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#6b5b95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIdx) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1.5 rounded-full text-xs font-medium text-[#111111] dark:text-[#f5f5f0] bg-[#fafaf8] dark:bg-[#151515] border border-[#d6d3cd] dark:border-[#2b2b2b] hover-lift-sm"
                            whileHover={{ scale: 1.08 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: tagIdx * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <p className="text-[#111111] dark:text-[#f5f5f0] text-lg font-semibold leading-snug mb-3">{project.summary}</p>
                      <p className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0] leading-relaxed mb-6">{project.details}</p>

                      <motion.div 
                        className="rounded-2xl border border-[#e1ddd4] bg-[#fafaf8] dark:bg-[#1a1a1a] dark:border-[#2b2b2b] p-4 mb-6 group-hover:border-[#d6d3cd] dark:group-hover:border-[#3a3a3a] transition-colors"
                        whileHover={{ boxShadow: '0 4px 16px rgba(107, 91, 149, 0.08)' }}
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8b7355] dark:text-[#c9a97a] mb-2">What it shows</p>
                        <p className="text-sm text-[#5f5f5f] dark:text-[#cfcfcf] leading-relaxed">
                          {project.title === 'VisuAlly'
                            ? 'Sign-language translation and learning workflows with accessibility-focused UX.'
                            : project.title === 'PUPStols'
                              ? 'Operational dashboards, records, and CRUD flows for stall management.'
                              : project.title === 'Programming Quiz Challenge'
                                ? 'A timed quiz experience with scoring, answer review, and result email flow.'
                              : project.title === 'PUP Web Audio Site'
                                ? 'An immersive music and storytelling site with audio-driven navigation and media sections.'
                              : project.title === 'PUP NavIt'
                                ? 'Campus wayfinding with location listings, route support, and a clean map-style interface.'
                              : project.title === 'QuickPortfolio'
                                ? 'Template-based portfolio generation with clean output styling.'
                                : project.title === 'LinkedIn Job Helper'
                                  ? 'PDF résumé parsing and browser automation for job application flow.'
                                  : 'A polished visual sample from the curated work archive.'}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2 relative z-10">
                      <motion.a
                        href={project.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6b5b95] text-white text-sm font-medium hover:opacity-90 transition-opacity relative overflow-hidden"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-200, 200] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="relative flex items-center gap-2">
                          <ExternalLink size={16} />
                          {project.primaryLabel}
                        </span>
                      </motion.a>
                      <motion.a
                        href={project.secondaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d6d3cd] dark:border-[#2b2b2b] text-[#6b5b95] dark:text-[#8fb7a8] text-sm font-medium hover:bg-[#fafaf8] dark:hover:bg-[#242424] transition-colors"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                        {project.secondaryLabel}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
