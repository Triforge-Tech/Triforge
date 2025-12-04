'use client'

import { Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react'
import { useState } from 'react'

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : ''

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center space-x-2 mb-4">
        <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Share</h3>
      </div>
      <div className="space-y-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <Twitter className="w-5 h-5 text-blue-400" />
          <span className="text-sm">Twitter</span>
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <Facebook className="w-5 h-5 text-blue-500" />
          <span className="text-sm">Facebook</span>
        </a>
        <button
          onClick={copyToClipboard}
          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <LinkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  )
}
