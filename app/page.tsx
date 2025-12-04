import CTASection from '@/components/CTASection'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import RecentPosts from '@/components/RecentPosts'
import { getRecentPosts } from '@/lib/blog'

export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <Hero />
      <Features />
      <RecentPosts posts={recentPosts} />
      <CTASection />
    </>
  )
}
