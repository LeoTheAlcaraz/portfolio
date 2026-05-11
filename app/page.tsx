import NavigationV2 from '@/components/NavigationV2'
import HeroV2 from '@/components/HeroV2'
import BentoInfoSection from '@/components/BentoInfoSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ProjectsV2 from '@/components/ProjectsV2'
import ContactV2 from '@/components/ContactV2'
import SectionDividerV2 from '@/components/SectionDividerV2'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-[#f5f5f0] via-[#f1f0ea] to-[#ece8df] dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#242424]">
      <NavigationV2 />
      <HeroV2 />
      <SectionDividerV2 />
      <BentoInfoSection />
      <SectionDividerV2 />
      <ExperienceTimeline />
      <SectionDividerV2 />
      <ProjectsV2 />
      <SectionDividerV2 />
      <ContactV2 />
      <Footer />
      <BackToTop />
    </main>
  )
}

