import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPaginatedPosts, getAllTags, getPostsByTag, searchPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock } from 'lucide-react'
import BlogSearch from '@/components/blog/BlogSearch'
import Pagination from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and thoughts on technology, software development, AI, and more.',
}

export const revalidate = 3600 // Revalidate every hour

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; tag?: string; search?: string }
}) {
  const page = Number(searchParams.page) || 1
  const pageSize = 9
  const tag = searchParams.tag
  const search = searchParams.search
  
  // Get posts based on filters
  let posts
  let totalPages
  let totalPosts
  
  if (search) {
    // Search functionality
    const allSearchResults = searchPosts(search)
    totalPosts = allSearchResults.length
    totalPages = Math.ceil(totalPosts / pageSize)
    const startIndex = (page - 1) * pageSize
    posts = allSearchResults.slice(startIndex, startIndex + pageSize)
  } else if (tag) {
    // Filter by tag
    const allTagPosts = getPostsByTag(tag)
    totalPosts = allTagPosts.length
    totalPages = Math.ceil(totalPosts / pageSize)
    const startIndex = (page - 1) * pageSize
    posts = allTagPosts.slice(startIndex, startIndex + pageSize)
  } else {
    // Default pagination
    const result = getPaginatedPosts(page, pageSize)
    posts = result.posts
    totalPages = result.totalPages
    totalPosts = result.totalPosts
  }
  
  const tags = getAllTags()

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Insights, tutorials, and thoughts on the latest in technology
            </p>
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Posts
            </Link>
            {tags.map((tagName) => (
              <Link
                key={tagName}
                href={`/blog?tag=${tagName}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  tag === tagName
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tagName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No posts found. Check back soon!
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      {post.coverImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          {post.readingTime && (
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readingTime} min
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {(post.tags as string[]).slice(0, 2).map((tagName: string) => (
                              <span
                                key={tagName}
                                className="text-xs px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                              >
                                {tagName}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
              {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} />}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
