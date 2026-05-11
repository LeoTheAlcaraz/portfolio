'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, Download, ExternalLink, X } from 'lucide-react'

export default function PortfolioPreview() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const pdfPath = '/Alcaraz Jr, Leo - Portfolio .pdf'

  return (
    <>
    <section id="portfolio" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Selected Works</h2>
            <div className="h-px bg-gradient-to-r from-[#1a1a1a] via-[#6366f1]/20 to-transparent flex-1" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative border border-[#1a1a1a] rounded-2xl overflow-hidden bg-[#121212]/50 backdrop-blur-sm hover:border-[#6366f1]/30 transition-all duration-500 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* PDF Preview */}
              <div className="relative aspect-[4/3] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity blur-sm">
                  <iframe
                    src={`${pdfPath}#page=1&zoom=25`}
                    className="w-full h-full pointer-events-none scale-150"
                    title="Portfolio PDF Preview"
                  />
                </div>
                
                {/* Overlay with icon and text */}
                <div className="relative z-10 text-center space-y-4 p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/30 group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-[#6366f1]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ededed] mb-2">
                      Full Portfolio
                    </h3>
                    <p className="text-[#a0a0a0] text-sm max-w-md mx-auto">
                      View my complete portfolio including projects, speaking engagements, and achievements
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsModalOpen(true)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Portfolio
                </motion.button>
                <motion.a
                  href={pdfPath}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-[#1a1a1a] rounded-lg hover:border-[#6366f1]/50 hover:bg-[#6366f1]/5 transition-all text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] bg-[#121212] rounded-2xl border border-[#1a1a1a] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#1a1a1a]">
                <h3 className="text-lg font-semibold text-[#ededed]">Portfolio</h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#a0a0a0]" />
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <div className="h-[calc(90vh-60px)]">
                <iframe
                  src={pdfPath}
                  className="w-full h-full"
                  title="Portfolio PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
