'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import { Post } from 'contentlayer2/generated'

// Custom components to override MDX defaults
const mdxComponents: any = {
  img: (props: any) => {
    if (!props.src) return null
    return (
      <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
        <Image
          src={props.src}
          alt={props.alt || 'Blog image'}
          fill
          className="object-cover"
        />
      </div>
    )
  },
  a: (props: any) => {
    const isExternal = props.href?.startsWith('http')
    return (
      <a
        {...props}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
      />
    )
  },
  h2: (props: any) => (
    <h2 {...props} className="text-3xl font-bold mt-10 mb-4 scroll-mt-24" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-2xl font-bold mt-8 mb-3 scroll-mt-24" />
  ),
  h4: (props: any) => (
    <h4 {...props} className="text-xl font-bold mt-6 mb-2 scroll-mt-24" />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-primary-500 pl-6 py-2 my-6 italic text-gray-700 dark:text-gray-300"
    />
  ),
  code: (props: any) => {
    const isCodeBlock = props.className
    
    if (isCodeBlock) {
      return <code {...props} />
    }
    
    return (
      <code
        {...props}
        className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-primary-600 dark:text-primary-400"
      />
    )
  },
}

interface RichTextContentProps {
  post: Post
}

export default function RichTextContent({ post }: RichTextContentProps) {
  const MDXContent = useMDXComponent(post.body.code)
  
  return <MDXContent components={mdxComponents} />
}
