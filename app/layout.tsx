import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: 'TriForge Technologies - Innovative Tech Solutions',
    template: '%s | TriForge Technologies',
  },
  description:
    'Innovative technology solutions for modern businesses. We build cutting-edge software, AI-powered applications, and scalable cloud infrastructure.',
  keywords: ['technology', 'software development', 'AI', 'cloud computing', 'web development'],
  authors: [{ name: 'TriForge Technologies' }],
  creator: 'TriForge Technologies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
