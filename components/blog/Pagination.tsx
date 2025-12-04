'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const showPages = pages.filter((page) => {
    return (
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
    )
  })

  return (
    <nav className="flex justify-center items-center space-x-2">
      {currentPage > 1 && (
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      )}

      {showPages.map((page, index) => {
        const prevPage = showPages[index - 1]
        const showDots = prevPage && page - prevPage > 1

        return (
          <div key={page} className="flex items-center space-x-2">
            {showDots && <span className="text-gray-400">...</span>}
            <Link
              href={`/blog?page=${page}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === page
                  ? 'bg-primary-600 text-white'
                  : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {page}
            </Link>
          </div>
        )
      })}

      {currentPage < totalPages && (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      )}
    </nav>
  )
}
