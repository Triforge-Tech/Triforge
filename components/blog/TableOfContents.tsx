'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface Heading {
  slug: string
  text: string
  level: number
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Track which heading is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    // Observe all headings
    headings.forEach(({ slug }) => {
      const element = document.getElementById(slug)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length === 0) return null

  return (
    <nav className="sticky top-24">
      <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-2 mb-4">
          <List className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Table of Contents
          </h3>
        </div>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className={`${heading.level === 3 ? 'ml-4' : ''}`}
            >
              <a
                href={`#${heading.slug}`}
                className={`text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  activeId === heading.slug
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
