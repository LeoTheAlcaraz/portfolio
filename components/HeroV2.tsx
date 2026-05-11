'use client'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight, Award, CheckCircle2, Download, Mail, Sparkles, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const certificateSrc = (path: string) => encodeURI(path)

const certificates = [
  {
    title: 'Associate Data Analyst',
    issuer: 'DataCamp',
    year: '2024',
    description: 'Verified analytics certification focused on data analysis workflows and Python-based problem solving.',
    image: certificateSrc('/certificates/DAA.jpg'),
    accent: 'from-[#f7efe3] to-[#efe4d2]',
  },
  {
    title: 'Academic Excellence',
    issuer: 'PUP Senior High School',
    year: '2021',
    description: 'Recognition for maintaining a strong academic record during STEM 11-1.',
    image: certificateSrc('/certificates/1-1.png'),
    accent: 'from-[#fbf5e6] to-[#f2e3bc]',
  },
  {
    title: 'Academic Excellence with High Honors',
    issuer: 'PUP Senior High School',
    year: '2021',
    description: 'High-honors distinction for STEM 11-1 during the 1st semester of AY 2020-2021.',
    image: certificateSrc('/certificates/11-1 HH.jpg'),
    accent: 'from-[#fff7ee] to-[#f4dfbf]',
  },
  {
    title: 'Certificate of Achievement',
    issuer: 'PUP Senior High School',
    year: '2022',
    description: 'Recognition for academic performance during STEM 12-1 in AY 2021-2022.',
    image: certificateSrc('/certificates/12-1 Cert.jpg'),
    accent: 'from-[#f5efe5] to-[#e7d2ad]',
  },
  {
    title: 'Certificate of Appreciation',
    issuer: 'CIS / PUP Community',
    year: '2025',
    description: 'Appreciation award for sharing database management knowledge with students.',
    image: certificateSrc('/certificates/2 (2).png'),
    accent: 'from-[#f7f0e2] to-[#e8d4a1]',
  },
  {
    title: 'Academic Excellence with Honors',
    issuer: 'PUP Senior High School',
    year: '2022',
    description: 'Honors distinction for STEM 12-1 during the 2nd semester of AY 2021-2022.',
    image: certificateSrc('/certificates/11-1 Cert.jpg'),
    accent: 'from-[#f3ecdf] to-[#e1c58e]',
  },
  {
    title: 'Amazon Connect',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Cloud and contact-center related certification.',
    image: certificateSrc('/certificates/additionals/Amazon Connect.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Amazon EC2 Master Cert',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Amazon EC2 training credential.',
    image: certificateSrc('/certificates/additionals/Amazon EC2 Master Cert.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'AWS Certified System Ops',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'AWS system operations certification asset.',
    image: certificateSrc('/certificates/additionals/AWS Certified System Ops.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'AWS Services for Solutions Architect',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'AWS architecture and services certificate asset.',
    image: certificateSrc('/certificates/additionals/AWS Services for Solutions Architect.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Cloud Management',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Cloud management training certificate asset.',
    image: certificateSrc('/certificates/additionals/Cloud Management.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Crypto',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Cryptography or crypto-related certificate asset.',
    image: certificateSrc('/certificates/additionals/Crypto.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Edge Computing',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Edge computing training certificate asset.',
    image: certificateSrc('/certificates/additionals/Edge Computing.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Ethical hacking certificate asset.',
    image: certificateSrc('/certificates/additionals/Ethical Hacking.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'ICT Cert',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'ICT certificate asset.',
    image: certificateSrc('/certificates/additionals/ICT Cert.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'ISO 9001',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'ISO 9001 related certificate asset.',
    image: certificateSrc('/certificates/additionals/ISO 9001.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'ISO CERT',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'ISO certificate asset.',
    image: certificateSrc('/certificates/additionals/ISO CERT.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Jarvis Cert',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Jarvis-related training certificate asset.',
    image: certificateSrc('/certificates/additionals/Jarvis Cert.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Java Network Applications',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Java network applications certificate asset.',
    image: certificateSrc('/certificates/additionals/Java Network Applications.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Joining Data Python',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Python data joining certificate asset.',
    image: certificateSrc('/certificates/additionals/Joining Data Python.png'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Master Course Amazon s3',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Amazon S3 master course certificate asset.',
    image: certificateSrc('/certificates/additionals/Master Course Amazon s3.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Master Course in Cloud security',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Cloud security master course certificate asset.',
    image: certificateSrc('/certificates/additionals/Master Course in Cloud security.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Master in Cloud Computing',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Cloud computing master certificate asset.',
    image: certificateSrc('/certificates/additionals/Master in Cloud Computing.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'OCR Master Class in Python',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Python OCR master class certificate asset.',
    image: certificateSrc('/certificates/additionals/OCR Master Class in Python.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Pyomo Bootcamp Cert',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Pyomo bootcamp certificate asset.',
    image: certificateSrc('/certificates/additionals/Pyomo Bootcamp Cert.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Quanty Python',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Quanty Python certificate asset.',
    image: certificateSrc('/certificates/additionals/Quanty Python.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'Software Architecture Cert',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Software architecture certificate asset.',
    image: certificateSrc('/certificates/additionals/Software Architecture Cert.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
  {
    title: 'WebDev Wizardy',
    issuer: 'Additional Certificate',
    year: '2025',
    description: 'Web development wizardry certificate asset.',
    image: certificateSrc('/certificates/additionals/WebDev Wizardy.jpg'),
    accent: 'from-[#f8efe4] to-[#edd7b3]',
  },
]

export default function HeroV2() {
  const containerRef = useRef<HTMLElement>(null)
  const [certificatesOpen, setCertificatesOpen] = useState(false)
  const [activeCertificate, setActiveCertificate] = useState(certificates[0])

  useEffect(() => {
    if (!certificatesOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCertificatesOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [certificatesOpen])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={containerRef} className="relative min-h-[92vh] flex items-center pt-28 pb-10 md:pt-32 md:pb-6 overflow-hidden">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated blob gradients */}
        <motion.div
          className="absolute top-20 -left-32 w-72 h-72 bg-gradient-to-br from-[#6b5b95]/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 -right-40 w-96 h-96 bg-gradient-to-br from-[#4a9b8e]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="layout-shell w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-11">
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <motion.div
                className="h-2 w-2 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-[#5f5f5f] dark:text-[#a0a0a0]">Available for projects</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#111111] dark:text-[#f5f5f0]">
                Software Developer{' '}
                <motion.span 
                  className="text-gradient"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  &
                </motion.span>{' '}
                <span className="relative inline-block">
                  Community Builder
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: 'easeOut',
                    }}
                  />
                </span>
              </h1>
              <motion.p 
                className="text-lg md:text-xl text-[#6b6b6b] dark:text-[#c0c0c0] max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I am a developer and student at PUP with a passion for building tools and growing communities. My background is quite varied, ranging from helping local business owners with digital tools to leading teams in technical hackathons. I prefer to let my work speak for itself and I stay focused on creating software that is both functional and helpful. Feel free to explore my portfolio to see the different projects and roles I have taken on over the years.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 lg:gap-8 py-4">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-[#f5f5f0]">25+</div>
                <div className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-[#f5f5f0]">7+</div>
                <div className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Leadership Roles</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-[#f5f5f0]">AI/ML</div>
                <div className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Specialist</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="grid gap-4 pt-5 sm:grid-cols-2 lg:max-w-[560px]">
              <motion.a
                href="#work"
                className="btn-premium inline-flex w-full items-center justify-center gap-2 group whitespace-nowrap relative overflow-hidden"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-200, 200] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative">View Projects</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              <motion.a
                href="/Resume - Leo Alcaraz Jr.pdf"
                download
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 group whitespace-nowrap"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 group whitespace-nowrap"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Contact
              </motion.a>
              <motion.button
                type="button"
                onClick={() => {
                  setActiveCertificate(certificates[0])
                  setCertificatesOpen(true)
                }}
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 group whitespace-nowrap relative"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Award size={18} />
                <span>Certificates</span>
                <motion.span
                  className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6b5b95]/10 px-1 text-[11px] font-semibold text-[#6b5b95] relative"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {certificates.length}
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right - Profile Image Card */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:flex justify-end items-center group"
          >
            <div className="relative w-[360px] h-[430px] xl:w-[390px] xl:h-[470px]">
              {/* Floating accent glow */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-br from-[#6b5b95]/20 to-[#4a9b8e]/10 rounded-3xl blur-2xl"
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Background card with gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#f1f0ea] to-[#ece8df] dark:from-[#242424] dark:to-[#1a1a1a] rounded-3xl"
                animate={{ rotate: 5, y: 10 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              />

              {/* Image container */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden border border-[#d6d3cd] dark:border-[#3a3a3a] shadow-soft-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(107, 91, 149, 0.2)',
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Image
                  src="/Alcaraz - Formal.png"
                  alt="Leo Alcaraz Jr"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 360px, 390px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Floating accent overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#6b5b95]/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {certificatesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/55 px-4 py-6 backdrop-blur-md"
            onClick={() => setCertificatesOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/30 bg-white/90 shadow-[0_30px_80px_rgba(0,0,0,0.24)] dark:bg-[#121212]/95"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,91,149,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(74,155,142,0.12),_transparent_30%)]" />

              <div className="relative grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d6d3cd] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#5f5f5f] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:text-[#a0a0a0]">
                        <Sparkles size={14} />
                        Certificates
                      </div>
                      <h2 className="text-3xl font-bold text-[#111111] dark:text-[#f5f5f0] sm:text-4xl">
                        A compact showcase of my verified wins
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5f5f5f] dark:text-[#b0b0b0] sm:text-base">
                        A clean, contained gallery that keeps the homepage lightweight while still giving each certificate a proper stage.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCertificatesOpen(false)}
                      className="rounded-full border border-[#d6d3cd] bg-white p-3 text-[#111111] transition-colors hover:bg-[#fafaf8] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:text-[#f5f5f0]"
                      aria-label="Close certificates gallery"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className={`relative overflow-hidden rounded-[24px] border border-[#d6d3cd] bg-gradient-to-br ${activeCertificate.accent} p-4 shadow-soft-lg dark:border-[#3a3a3a]`}>
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                      <div className="order-2 space-y-4 lg:order-1">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#5f5f5f] dark:bg-[#1a1a1a]/80 dark:text-[#a0a0a0]">
                          <CheckCircle2 size={14} className="text-[#4a9b8e]" />
                          {activeCertificate.issuer} · {activeCertificate.year}
                        </div>
                        <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0] sm:text-3xl">
                          {activeCertificate.title}
                        </h3>
                        <p className="max-w-xl text-sm leading-6 text-[#5f5f5f] dark:text-[#b0b0b0] sm:text-base">
                          {activeCertificate.description}
                        </p>
                        <div className="flex flex-wrap gap-3 pt-1">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-medium text-[#111111] dark:bg-[#1a1a1a]/80 dark:text-[#f5f5f0]">
                            <Award size={14} />
                            Local asset preview
                          </span>
                          <a
                            href={activeCertificate.image}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#6b5b95] px-3 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
                          >
                            Open full image
                          </a>
                        </div>
                      </div>

                      <div className="order-1 lg:order-2">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/50 bg-white shadow-soft-lg">
                          <Image
                            src={activeCertificate.image}
                            alt={activeCertificate.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 520px"
                            className="object-contain p-2"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#d6d3cd] bg-white/70 p-6 sm:p-8 lg:border-t-0 lg:border-l dark:border-[#3a3a3a] dark:bg-[#1a1a1a]/70">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#111111] dark:text-[#f5f5f0]">Featured gallery</h3>
                    <span className="rounded-full bg-[#6b5b95]/10 px-3 py-1 text-xs font-semibold text-[#6b5b95] dark:bg-[#6b5b95]/20">
                      {certificates.length} items
                    </span>
                  </div>

                  <div className="max-h-[65vh] space-y-3 overflow-y-auto pr-1 hide-scrollbar">
                    {certificates.map((certificate) => {
                      const isActive = certificate.image === activeCertificate.image

                      return (
                        <button
                          key={certificate.image}
                          type="button"
                          onClick={() => setActiveCertificate(certificate)}
                          className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${
                            isActive
                              ? 'border-[#6b5b95]/40 bg-[#6b5b95]/8 shadow-soft'
                              : 'border-[#d6d3cd] bg-white/80 hover:border-[#bfb9ae] hover:bg-white dark:border-[#3a3a3a] dark:bg-[#121212]/70 dark:hover:bg-[#1f1f1f]'
                          }`}
                        >
                          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-[#d6d3cd] bg-white dark:border-[#3a3a3a]">
                            <Image
                              src={certificate.image}
                              alt={certificate.title}
                              fill
                              sizes="112px"
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-[#111111] dark:text-[#f5f5f0]">
                              {certificate.title}
                            </p>
                            <p className="mt-1 text-xs text-[#5f5f5f] dark:text-[#a0a0a0]">
                              {certificate.issuer} · {certificate.year}
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                              isActive
                                ? 'bg-[#6b5b95] text-white'
                                : 'bg-[#f2efe8] text-[#5f5f5f] dark:bg-[#242424] dark:text-[#a0a0a0]'
                            }`}
                          >
                            View
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
