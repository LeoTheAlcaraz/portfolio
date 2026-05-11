'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaGithub,
  FaFigma,
  FaDocker,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiMicrosoft,
  SiMicrosoftteams,
  SiGoogle,
  SiSlack,
  SiTrello,
  SiNotion,
  SiDiscord,
  SiCanva,
  SiAdobecreativecloud,
  SiVisualstudiocode,
  SiWordpress,
  SiDatacamp,
  SiOpenai,
  SiGrammarly,
  SiZapier,
  SiFramer,
  SiWebflow,
  SiZoom,
  SiPostman,
  SiSupabase,
  SiNetlify,
  SiRailway,
  SiRender,
  SiPlanetscale,
  SiKaggle,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiPowerbi,
  SiFigma,
  SiGithub,
} from 'react-icons/si'
import {
  Gamepad2,
  Plane,
  Bike,
  Music,
  Coffee,
  Camera,
  Github,
  Linkedin,
  Mail,
  Bot,
  Search,
  PenSquare,
  Workflow,
  Image as ImageIcon,
  Sparkles,
  Aperture,
  Video,
  Clapperboard,
  Globe,
  ExternalLink,
  X,
} from 'lucide-react'
import { FaCode, FaBrain, FaTools, FaDatabase, FaServer, FaCloud, FaCogs, FaBolt } from 'react-icons/fa'

export default function BentoInfoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeToolCategory, setActiveToolCategory] = useState('All')
  const [activeAiCategory, setActiveAiCategory] = useState('All')
  const [selectedEngagement, setSelectedEngagement] = useState<string | null>(null)

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const techStack = [
    { Icon: FaReact, name: 'React', color: '#61dafb' },
    { Icon: SiNextdotjs, name: 'Next.js', color: '#000' },
    { Icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' },
    { Icon: FaNodeJs, name: 'Node.js', color: '#68a063' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#13aa52' },
    { Icon: FaPython, name: 'Python', color: '#3776ab' },
    { Icon: FaDocker, name: 'Docker', color: '#2496ed' },
    { Icon: FaGit, name: 'Git', color: '#f1502f' },
    { Icon: SiVercel, name: 'Vercel', color: '#000' },
    { Icon: FaFigma, name: 'Figma', color: '#f24e1e' },
  ]

  const interests = [
    { Icon: Gamepad2, label: 'Gaming' },
    { Icon: Plane, label: 'Traveling' },
    { Icon: Bike, label: 'Cycling' },
    { Icon: Music, label: 'Startups' },
    { Icon: Coffee, label: 'Web3' },
    { Icon: Camera, label: 'Community' },
  ]

  const toolCategories = ['All', 'Productivity', 'Design', 'Development', 'Collaboration', 'CMS']

  const tools = [
    {
      name: 'Microsoft 365',
      description: 'Office suite',
      category: 'Productivity',
      Icon: SiMicrosoft,
      color: '#5E5E5E',
    },
    {
      name: 'Microsoft Teams',
      description: 'Team communication',
      category: 'Collaboration',
      Icon: SiMicrosoftteams,
      color: '#6264A7',
    },
    {
      name: 'Google Workspace',
      description: 'Docs, Drive, Meet',
      category: 'Productivity',
      Icon: SiGoogle,
      color: '#4285F4',
    },
    {
      name: 'Slack',
      description: 'Team collaboration',
      category: 'Collaboration',
      Icon: SiSlack,
      color: '#4A154B',
    },
    {
      name: 'Trello',
      description: 'Project management',
      category: 'Collaboration',
      Icon: SiTrello,
      color: '#0052CC',
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace',
      category: 'Productivity',
      Icon: SiNotion,
      color: '#111111',
    },
    {
      name: 'Discord',
      description: 'Community platform',
      category: 'Collaboration',
      Icon: SiDiscord,
      color: '#5865F2',
    },
    {
      name: 'Canva',
      description: 'Graphic design',
      category: 'Design',
      Icon: SiCanva,
      color: '#00C4CC',
    },
    {
      name: 'Adobe Creative Cloud',
      description: 'Creative suite',
      category: 'Design',
      Icon: SiAdobecreativecloud,
      color: '#DA1F26',
    },
    {
      name: 'Visual Studio Code',
      description: 'Code editor',
      category: 'Development',
      Icon: SiVisualstudiocode,
      color: '#007ACC',
    },
    {
      name: 'GitHub',
      description: 'Code hosting & CI',
      category: 'Development',
      Icon: FaGithub,
      color: '#24292f',
    },
    {
      name: 'Zoom',
      description: 'Video meetings',
      category: 'Collaboration',
      Icon: SiZoom,
      color: '#2D8CFF',
    },
    {
      name: 'WordPress',
      description: 'Content management',
      category: 'CMS',
      Icon: SiWordpress,
      color: '#21759B',
    },
  ]

  const filteredTools =
    activeToolCategory === 'All'
      ? tools
      : tools.filter((tool) => tool.category === activeToolCategory)

  const aiCategories = ['All', 'Ideas', 'Writing', 'Automation', 'Image', 'Video', 'Website']

  // core AI tools to show when 'All' is selected (compact view)
  const coreAiTools = [
    { name: 'GitHub Copilot', description: 'AI pair programmer', category: 'Ideas', Icon: SiGithub, color: '#24292f' },
    { name: 'Cursor', description: 'AI-first code editor', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Codeium', description: 'AI coding assistant', category: 'Development', Icon: FaCode, color: '#0ea5a4' },
    { name: 'Tabnine', description: 'AI code completion', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Replit Ghostwriter', description: 'AI coding environment', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Sourcegraph Cody', description: 'Codebase assistant', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Amazon CodeWhisperer', description: 'AI developer assistant', category: 'Development', Icon: FaCode, color: '#FF9900' },
    { name: 'Phind', description: 'AI developer search', category: 'Development', Icon: FaBrain, color: '#6b5b95' },
    { name: 'Hugging Face', description: 'ML model ecosystem', category: 'LLM', Icon: FaBrain, color: '#FF6A00' },
    { name: 'OpenAI API', description: 'LLM integration', category: 'LLM', Icon: SiOpenai, color: '#10A37F' },
  ]

  const fullAiTools = [
    // Main coding assistants
    { name: 'GitHub Copilot', description: 'AI pair programmer', category: 'Ideas', Icon: SiGithub, color: '#24292f' },
    { name: 'Cursor', description: 'AI-first code editor', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Codeium', description: 'AI coding assistant', category: 'Development', Icon: FaCode, color: '#0ea5a4' },
    { name: 'Tabnine', description: 'AI code completion', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Replit Ghostwriter', description: 'AI coding environment', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Sourcegraph Cody', description: 'Codebase assistant', category: 'Development', Icon: FaCode, color: '#111111' },
    { name: 'Amazon CodeWhisperer', description: 'AI developer assistant', category: 'Development', Icon: FaCode, color: '#FF9900' },
    { name: 'JetBrains AI Assistant', description: 'IDE-integrated AI', category: 'Development', Icon: FaCogs, color: '#111111' },
    { name: 'Phind', description: 'AI developer search engine', category: 'Development', Icon: FaBrain, color: '#6b5b95' },
    { name: 'Bolt.new', description: 'AI app generation', category: 'Development', Icon: FaBolt, color: '#111111' },

    // LLM engineering
    { name: 'Hugging Face', description: 'ML model ecosystem', category: 'LLM', Icon: FaBrain, color: '#FF6A00' },
    { name: 'OpenAI API', description: 'LLM integration', category: 'LLM', Icon: SiOpenai, color: '#10A37F' },
    { name: 'LangChain', description: 'AI orchestration', category: 'LLM', Icon: FaTools, color: '#111111' },
    { name: 'Pinecone', description: 'Vector database', category: 'LLM', Icon: FaDatabase, color: '#111111' },
    { name: 'Weights & Biases', description: 'Experiment tracking', category: 'LLM', Icon: FaCloud, color: '#111111' },
    { name: 'Replicate', description: 'Model deployment', category: 'LLM', Icon: FaServer, color: '#111111' },
    { name: 'Ollama', description: 'Local LLM runtime', category: 'LLM', Icon: FaServer, color: '#111111' },
    { name: 'Vercel AI SDK', description: 'AI app development', category: 'LLM', Icon: SiVercel, color: '#000000' },
    { name: 'ElevenLabs', description: 'Voice synthesis', category: 'LLM', Icon: FaBrain, color: '#111111' },
    { name: 'AssemblyAI', description: 'Speech API', category: 'LLM', Icon: FaBrain, color: '#111111' },

    // Developer stack / deployment
    { name: 'Docker', description: 'Containerization', category: 'DevOps', Icon: FaCogs, color: '#2496ED' },
    { name: 'Postman', description: 'API testing', category: 'DevOps', Icon: SiPostman, color: '#FF6C37' },
    { name: 'Firebase', description: 'Backend platform', category: 'DevOps', Icon: FaCloud, color: '#FFCA28' },
    { name: 'Supabase', description: 'Open-source backend', category: 'DevOps', Icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Vercel', description: 'Frontend deployment', category: 'DevOps', Icon: SiVercel, color: '#000' },
    { name: 'Netlify', description: 'Web deployment', category: 'DevOps', Icon: SiNetlify, color: '#00C7B7' },
    { name: 'Railway', description: 'Cloud deployment', category: 'DevOps', Icon: SiRailway, color: '#111111' },
    { name: 'Render', description: 'App hosting', category: 'DevOps', Icon: SiRender, color: '#111111' },
    { name: 'MongoDB', description: 'NoSQL database', category: 'DevOps', Icon: SiMongodb, color: '#13aa52' },
    { name: 'PlanetScale', description: 'Serverless MySQL', category: 'DevOps', Icon: SiPlanetscale, color: '#111111' },

    // Data science / AI research
    { name: 'Kaggle', description: 'Data science platform', category: 'Data', Icon: SiKaggle, color: '#F7931A' },
    { name: 'Jupyter', description: 'Research notebooks', category: 'Data', Icon: FaTools, color: '#111111' },
    { name: 'Google Colab', description: 'Cloud notebooks', category: 'Data', Icon: FaCloud, color: '#4285F4' },
    { name: 'TensorFlow', description: 'Deep learning', category: 'Data', Icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', description: 'ML framework', category: 'Data', Icon: SiPytorch, color: '#EE4C2C' },
    { name: 'Scikit-learn', description: 'ML toolkit', category: 'Data', Icon: FaTools, color: '#111111' },
    { name: 'Pandas', description: 'Data analysis', category: 'Data', Icon: SiPandas, color: '#150458' },
    { name: 'NumPy', description: 'Numerical computing', category: 'Data', Icon: SiNumpy, color: '#013243' },
    { name: 'Tableau', description: 'Data viz', category: 'Data', Icon: SiTableau, color: '#E97627' },
    { name: 'Power BI', description: 'Business intelligence', category: 'Data', Icon: SiPowerbi, color: '#F2C811' },

    // UI/UX & design
    { name: 'Figma', description: 'UI/UX design', category: 'Design', Icon: SiFigma, color: '#F24E1E' },
    { name: 'Spline', description: '3D web design', category: 'Design', Icon: FaTools, color: '#111111' },
    { name: 'Linear', description: 'Product management', category: 'Design', Icon: FaTools, color: '#111111' },
    { name: 'ClickUp', description: 'Productivity workspace', category: 'Design', Icon: FaTools, color: '#111111' },
    { name: 'Obsidian', description: 'Knowledge management', category: 'Design', Icon: FaTools, color: '#111111' },
    { name: 'Miro', description: 'Collaboration whiteboard', category: 'Design', Icon: FaTools, color: '#111111' },
  ]

  const [showAllAi, setShowAllAi] = useState(false)

  // Map the visible UI categories to tool categories present in the data
  const aiCategoryMap: Record<string, string[] | null> = {
    All: null,
    Ideas: ['Ideas', 'Development', 'LLM'],
    Writing: ['Writing', 'LLM'],
    Automation: ['Automation', 'DevOps'],
    Image: ['Image', 'LLM', 'Design'],
    Video: ['Video', 'LLM'],
    Website: ['Website', 'DevOps', 'Design'],
  }

  const filteredAiTools = () => {
    if (activeAiCategory !== 'All') {
      const mapped = aiCategoryMap[activeAiCategory]
      if (!mapped) return []
      return fullAiTools.filter((t) => mapped.includes(t.category))
    }
    return showAllAi ? fullAiTools : coreAiTools
  }

  return (
    <section ref={ref} id="about" className="section-padding relative">
      <div className="layout-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* About Me Card - Large */}
          <motion.div variants={itemVariants} className="lg:col-span-2 card-premium p-8 lg:p-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0]">About Me</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e]" />
              <p className="text-lg text-[#5f5f5f] dark:text-[#c0c0c0] leading-relaxed">
                I’m Leo D. Alcaraz Jr., a Computer Science student at Polytechnic University of the Philippines who enjoys building thoughtful and reliable digital experiences. My work mainly revolves around AI, web development, and data driven solutions, with a focus on creating projects that are both useful and easy to use.
              </p>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]">
                I have been involved in various technical and leadership initiatives, ranging from managing student organizations to working on collaborative projects with developers and creatives. Much of my time is spent organizing events and mentoring others to help grow the local tech scene while refining my own skills in software development and data.              </p>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div variants={itemVariants} className="card-premium p-8">
            <h3 className="text-xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-6">Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest) => (
                <motion.div
                  key={interest.label}
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-[#fafaf8] dark:hover:bg-[#242424] transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <interest.Icon size={24} className="text-[#6b5b95] mb-2" />
                  <span className="text-xs font-medium text-[#111111] dark:text-[#f5f5f0] text-center">
                    {interest.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stack Intro */}
          <motion.div variants={itemVariants} className="lg:col-span-3 card-premium p-8 lg:p-10">
            <div className="max-w-3xl space-y-3">
              <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0]">What I use to build</h3>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0] leading-relaxed">
                These are the tools, platforms, and AI systems behind my projects, workflows, and experiments.
                They’re the actual stack I use to design, develop, automate, and ship work.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack - Large */}
          <motion.div variants={itemVariants} className="lg:col-span-3 card-premium p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-8">Tech Stack</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-[#fafaf8] dark:hover:bg-[#242424] transition-colors hover-lift"
                  whileHover={{ scale: 1.1 }}
                >
                  <tech.Icon size={32} style={{ color: tech.color }} />
                  <span className="text-xs font-medium text-[#111111] dark:text-[#f5f5f0] text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms - Large */}
          <motion.div variants={itemVariants} className="lg:col-span-3 card-premium p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-7">Tools & Platforms</h3>

            <div className="flex flex-wrap gap-2.5 mb-7">
              {toolCategories.map((category) => {
                const isActive = activeToolCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveToolCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] text-white border-transparent shadow-soft'
                        : 'bg-[#fafaf8] dark:bg-[#121212] text-[#5f5f5f] dark:text-[#c0c0c0] border-[#d6d3cd] dark:border-[#3a3a3a] hover:text-[#111111] dark:hover:text-[#f5f5f0] hover:border-[#bfb9ae]'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="p-5 rounded-xl border border-[#d6d3cd] dark:border-[#3a3a3a] bg-[#fafaf8] dark:bg-[#121212] hover:bg-white dark:hover:bg-[#242424] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center bg-white dark:bg-[#0b0b0b]">
                      <tool.Icon size={18} style={tool.color ? { color: tool.color } : undefined} />
                    </div>
                    <p className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm leading-tight">{tool.name}</p>
                  </div>
                  <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] mb-4 leading-relaxed">{tool.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium border border-[#d6d3cd] dark:border-[#3a3a3a] text-[#5f5f5f] dark:text-[#c0c0c0] bg-white dark:bg-[#121212]">
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Toolset - Large */}
          <motion.div variants={itemVariants} className="lg:col-span-3 card-premium p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-2">AI Toolset</h3>
              <p className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">My AI stack for ideas, automation, writing, and creative workflows.</p>
            </div>

            <div className="flex items-center justify-between mb-7">
              <div className="flex flex-wrap gap-2.5">
                {aiCategories.map((category) => {
                  const isActive = activeAiCategory === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveAiCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#6b5b95] to-[#4a9b8e] text-white border-transparent shadow-soft'
                            : 'bg-[#fafaf8] dark:bg-[#121212] text-[#5f5f5f] dark:text-[#c0c0c0] border-[#d6d3cd] dark:border-[#3a3a3a] hover:text-[#111111] dark:hover:text-[#f5f5f0] hover:border-[#bfb9ae]'
                        }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>

              {activeAiCategory === 'All' && (
                <button
                  type="button"
                  onClick={() => setShowAllAi((s) => !s)}
                  className="ml-4 px-3 py-1 rounded-full text-sm font-medium border transition-colors bg-white text-[#6b6b6b] border-[#d6d3cd] hover:bg-[#fafaf8]"
                >
                  {showAllAi ? 'Show less' : 'Show all'}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {filteredAiTools().map((tool) => (
                <motion.div
                  key={tool.name}
                  className="p-5 rounded-xl border border-[#d6d3cd] bg-[#fafaf8] hover:bg-white transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <tool.Icon size={24} style={{ color: tool.color }} />
                    <p className="font-semibold text-[#111111] text-sm leading-tight">{tool.name}</p>
                  </div>
                  <p className="text-xs text-[#6b6b6b] mb-4 leading-relaxed">{tool.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium border border-[#d6d3cd] text-[#5f5f5f] bg-white">
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2 card-premium p-8">
            <h3 className="text-xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-6">Achievements</h3>
            <div className="space-y-5">
                <div className="border-l-2 border-[#6b5b95] pl-6">
                  <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-base">4× President&apos;s Lister (College)</h4>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mt-1">GWA 1.17–1.55 across all college years at PUP</p>
                </div>

                <div className="border-l-2 border-[#4a9b8e] pl-6">
                  <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-base">PUP Senior High School — Academic</h4>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mt-1">Achieved an average score of 95% in PUP SHS</p>
                </div>

                <div className="border-l-2 border-[#4a9b8e] pl-6">
                  <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-base">Google AI Hackathon — Team Lead</h4>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mt-1">Led &quot;VisuAlly&quot; — AI sign-language app focused on accessibility</p>
                  <a
                    href="https://devpost.com/software/visually-ei3bpv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6b5b95] dark:text-[#8fb7a8] mt-2 hover:underline"
                  >
                    <ExternalLink size={14} />
                    View project
                  </a>
                </div>

                <div className="border-l-2 border-[#8b7355] pl-6">
                  <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-base">Stellar PH100 — Fellow (2025)</h4>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mt-1">Selected for startup innovation and builder fellowship</p>
                  <a
                    href="https://stellarph.io/programs/ph100/2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6b5b95] dark:text-[#8fb7a8] mt-2 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Program
                  </a>
                </div>

                <div className="border-l-2 border-[#6b5b95] pl-6">
                  <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-base">Ambassador & Leadership Roles</h4>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mt-1">Executive VP & Head of Operations — Microsoft Learn Student Ambassadors (PUP Manila); Brand Ambassador — Vanar; Blue Ocean Competition</p>
                </div>

                <div className="border-l-2 border-[#6b5b95] pl-6">
                  <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-base">Data Analyst Associate</h4>
                  <p className="text-sm text-[#6b6b6b] dark:text-[#909090] mt-1">Certification valid Feb 2024 – Feb 2026</p>
                  <a
                    href="https://www.datacamp.com/certificate/DAA0014778508623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6b5b95] dark:text-[#8fb7a8] mt-2 hover:underline"
                  >
                    <ExternalLink size={14} />
                    View certificate
                  </a>
                </div>
            </div>
          </motion.div>

          {/* Speaking and Community Engagements Card */}
          <motion.div variants={itemVariants} className="card-premium p-8">
            <h3 className="text-xl font-bold text-[#111111] dark:text-[#f5f5f0] mb-6">Speaking & Community Engagements</h3>
            <div className="space-y-5 max-h-[600px] overflow-y-auto hide-scrollbar">
              {/* FWDP */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/FWDP.jpg')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/FWDP.jpg"
                    alt="Filipino Web Development Peers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">Filipino Web Development Peers</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Keynote speaker discussing modern web development practices and career growth strategies for aspiring developers.</p>
              </motion.div>

              {/* Infra */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/Infra.jpg')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/Infra.jpg"
                    alt="Infrastructure Talk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">Infrastructure Fundamentals</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Led technical workshop on cloud infrastructure and architectural best practices.</p>
              </motion.div>

              {/* MLSC Talk */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/MLSC - Talk.png')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/MLSC - Talk.png"
                    alt="MLSC Community Talk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">Microsoft Learn Student Community</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Presented AI integration to student ambassadors and fostered collaborative learning.</p>
              </motion.div>

              {/* UEC AI */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/UEC - AI.jpg')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/UEC - AI.jpg"
                    alt="UEC AI Talk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">AI & Entrepreneurship Workshop</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Interactive session on leveraging AI tools for startup development and innovation.</p>
              </motion.div>

              {/* UEcal */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/UEcal.png')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/UEcal.png"
                    alt="University Entrepreneurship Calendar Event"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">Tech Innovation Panel</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Panelist discussing technology and entrepreneurship intersection, building scalable solutions.</p>
              </motion.div>

              {/* UE Talk 1 */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/UE Talk 1.jpg')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/UE Talk 1.jpg"
                    alt="University Entrepreneurship Talk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">University Entrepreneurship Talk</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Shared insights on entrepreneurship and tech innovation with student entrepreneurs and business leaders.</p>
              </motion.div>

              {/* Assoc DA */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/Assoc DA.jpg')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/Assoc DA.jpg"
                    alt="Data Analytics Association Event"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">Data Analytics Association Community</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Engaged with data analytics professionals and community members to discuss industry trends and best practices.</p>
              </motion.div>

              {/* UMAK */}
              <motion.div className="group cursor-pointer" onClick={() => setSelectedEngagement('/speaking-engagements/UMAK.jpg')}>
                <div className="relative h-48 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#6b5b95]/10 to-[#4a9b8e]/10 hover:shadow-lg transition-shadow">
                  <Image
                    src="/speaking-engagements/UMAK.jpg"
                    alt="UMAK Political Writing Event - 3rd Place"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={20} className="text-[#111111]" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#111111] dark:text-[#f5f5f0] text-sm mb-1">UMAK Political Writing Event</h4>
                <p className="text-xs text-[#666] dark:text-[#a0a0a0] leading-relaxed">Participated in political writing competition and won 3rd place, showcasing critical analysis and writing excellence.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedEngagement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEngagement(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <Image
                src={selectedEngagement}
                alt="Full size engagement photo"
                width={1200}
                height={900}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedEngagement(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-lg"
              >
                <X size={24} className="text-[#111111]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

