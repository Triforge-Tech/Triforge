'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { debounce } from '@/lib/utils'

export default function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = debounce((term: string) => {
    if (term.trim()) {
      router.push(`/blog?search=${encodeURIComponent(term)}`)
    } else {
      router.push('/blog')
    }
  }, 500)

  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          handleSearch(e.target.value)
        }}
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
      />
    </div>
  )
}
