import { allPosts, allAuthors, Post, Author } from 'contentlayer2/generated'
import { compareDesc } from 'date-fns'

/**
 * Get all published blog posts sorted by date (newest first)
 */
export function getAllPosts(): Post[] {
  return allPosts
    .filter(post => new Date(post.publishedAt) <= new Date()) // Only published posts
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}

/**
 * Get recent blog posts (default: 3 most recent)
 */
export function getRecentPosts(limit: number = 3): Post[] {
  return getAllPosts().slice(0, limit)
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(post => post.featured)
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find(post => post.slug === slug)
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const tagsSet = new Set<string>()
  
  allPosts.forEach(post => {
    const tags = post.tags as string[] | undefined
    tags?.forEach((tag: string) => tagsSet.add(tag))
  })
  
  return Array.from(tagsSet).sort()
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter(post => {
    const tags = post.tags as string[] | undefined
    return tags?.some((t: string) => t.toLowerCase() === tag.toLowerCase())
  })
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(post: Post, limit: number = 3): Post[] {
  if (!post.tags || post.tags.length === 0) return []
  
  const relatedPosts = getAllPosts()
    .filter(p => p.slug !== post.slug) // Exclude current post
    .map(p => {
      const pTags = p.tags as string[] | undefined
      const postTags = post.tags as string[] | undefined
      return {
        post: p,
        score: pTags?.filter((tag: string) => postTags?.includes(tag)).length || 0
      }
    })
    .filter(item => item.score > 0) // Only posts with shared tags
    .sort((a, b) => b.score - a.score) // Sort by relevance
    .slice(0, limit)
    .map(item => item.post)
  
  return relatedPosts
}

/**
 * Search posts by title, excerpt, or content
 */
export function searchPosts(query: string): Post[] {
  const lowerQuery = query.toLowerCase()
  
  return getAllPosts().filter(post => {
    const titleMatch = post.title.toLowerCase().includes(lowerQuery)
    const excerptMatch = post.excerpt.toLowerCase().includes(lowerQuery)
    const contentMatch = post.body.raw.toLowerCase().includes(lowerQuery)
    const tags = post.tags as string[] | undefined
    const tagMatch = tags?.some((tag: string) => tag.toLowerCase().includes(lowerQuery))
    
    return titleMatch || excerptMatch || contentMatch || tagMatch
  })
}

/**
 * Get author by reference (slug from author field in post)
 */
export function getAuthorBySlug(slug: string): Author | undefined {
  return allAuthors.find(author => author.slug === slug)
}

/**
 * Get paginated posts
 */
export function getPaginatedPosts(page: number = 1, limit: number = 9): {
  posts: Post[]
  totalPages: number
  currentPage: number
  totalPosts: number
} {
  const allPostsList = getAllPosts()
  const totalPosts = allPostsList.length
  const totalPages = Math.ceil(totalPosts / limit)
  const startIndex = (page - 1) * limit
  const posts = allPostsList.slice(startIndex, startIndex + limit)
  
  return {
    posts,
    totalPages,
    currentPage: page,
    totalPosts
  }
}

/**
 * Generate static params for all posts (for static generation)
 */
export function getAllPostSlugs(): string[] {
  return allPosts.map(post => post.slug)
}
