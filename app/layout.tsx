import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Leo Alcaraz | Full-Stack Developer & Creative Technologist',
  description: 'Full-stack developer with expertise in web, AI systems, data analysis, and design. Building at the intersection of engineering and creativity.',
  keywords: ['full-stack developer', 'AI', 'data science', 'web development', 'creative technology'],
  authors: [{ name: 'Leo Alcaraz' }],
  openGraph: {
    title: 'Leo Alcaraz | Full-Stack Developer',
    description: 'Full-stack developer with expertise in web, AI systems, data analysis, and design.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}


