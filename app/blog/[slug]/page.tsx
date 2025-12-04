import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, getAllPostSlugs, getAuthorBySlug } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import RichTextContent from '@/components/blog/RichTextContent'
import TableOfContents from '@/components/blog/TableOfContents'
import ShareButtons from '@/components/blog/ShareButtons'

export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const author = getAuthorBySlug(post.author)
  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const imageUrl = post.coverImage || ''

  return {
    title,
    description,
    authors: author ? [{ name: author.name }] : [],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: author ? [author.name] : [],
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export const revalidate = 3600

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get author information
  const author = getAuthorBySlug(post.author)

  // Get related posts
  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <article className="bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <header className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {(post.tags as string[]).map((tag: string) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="text-sm px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
            {author && (
              <div className="flex items-center">
                {author.avatar && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="font-medium text-gray-900 dark:text-white">
                  {author.name}
                </span>
              </div>
            )}
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(post.publishedAt)}
            </span>
            {post.readingTime && (
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readingTime} min read
              </span>
            )}
          </div>

          {/* Featured Image */}
          {post.coverImage && (
            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="container-custom pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <RichTextContent post={post} />
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-8">
              <TableOfContents headings={post.headings || []} />
              <ShareButtons title={post.title} />
            </aside>
          </div>

          {/* Author Bio */}
          {author && author.bio && (
            <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="flex items-start space-x-4">
                {author.avatar && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    About {author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {author.bio}
                  </p>
                  <div className="flex space-x-4">
                    {author.twitter && (
                      <a
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                      >
                        Twitter
                      </a>
                    )}
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                      >
                        LinkedIn
                      </a>
                    )}
                    {author.github && (
                      <a
                        href={author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
              Related Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-all hover:shadow-lg">
                    {relatedPost.coverImage && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
