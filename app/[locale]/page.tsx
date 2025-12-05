import CTASection from '@/components/CTASection'
import Features from '@/components/Features'
import Hero from '@/components/Hero'

export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CTASection />
    </>
  )
}
