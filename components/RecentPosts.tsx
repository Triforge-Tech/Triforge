'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Post } from 'contentlayer2/generated'
import { formatDate } from '@/lib/utils'

interface RecentPostsProps {
  posts: Post[]
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our latest thoughts on technology and innovation.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
          >
            View all posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </span>
                    {post.readingTime && (
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readingTime} min read
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {(post.tags as string[]).slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/blog" className="btn-primary inline-flex items-center">
            View all posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
