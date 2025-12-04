import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    avatar: {
      type: 'string',
      required: false,
    },
    bio: {
      type: 'string',
      required: false,
    },
    twitter: {
      type: 'string',
      required: false,
    },
    linkedin: {
      type: 'string',
      required: false,
    },
    github: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    coverImage: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'json',
      required: false,
    },
    featured: {
      type: 'boolean',
      required: false,
      default: false,
    },
    seo: {
      type: 'json',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    readingTime: {
      type: 'number',
      resolve: (doc) => {
        const wordsPerMinute = 200
        const wordCount = doc.body.raw.split(/\s+/g).length
        return Math.ceil(wordCount / wordsPerMinute)
      },
    },
    headings: {
      type: 'json',
      resolve: (doc) => {
        const headingLines = doc.body.raw.split('\n').filter((line: string) => {
          return line.match(/^#{2,3}\s/)
        })
        return headingLines.map((raw: string) => {
          const text = raw.replace(/^#{2,3}\s/, '')
          const level = raw.slice(0, 3) === '###' ? 3 : 2
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
          return { text, level, slug }
        })
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Author],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
