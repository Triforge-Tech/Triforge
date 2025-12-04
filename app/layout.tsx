import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TriForge Technologies - Innovative Tech Solutions',
    template: '%s | TriForge Technologies',
  },
  description: 'Innovative technology solutions for modern businesses. We build cutting-edge software, AI-powered applications, and scalable cloud infrastructure.',
  keywords: ['technology', 'software development', 'AI', 'cloud computing', 'web development'],
  authors: [{ name: 'TriForge Technologies' }],
  creator: 'TriForge Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://triforge.com',
    siteName: 'TriForge Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TriForge Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TriForge Technologies',
    description: 'Innovative technology solutions for modern businesses',
    images: ['/og-image.jpg'],
    creator: '@triforge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
