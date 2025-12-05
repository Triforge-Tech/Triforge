import { getAllPostSlugs } from '@/lib/blog'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://triforge.net'

  // Get all blog post slugs
  const postSlugs = getAllPostSlugs()

  // Static pages for both locales
  const locales = ['en', 'bg']
  const routes = ['', '/about', '/services', '/blog', '/contact']

  const staticPages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  // Blog posts for both locales
  const blogPosts = locales.flatMap((locale) =>
    postSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...blogPosts]
}
