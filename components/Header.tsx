'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '@/lib/i18n'

const navigation = [
  { key: 'nav.home', href: '' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services' },
  // { key: 'nav.blog', href: '/blog' },
  { key: 'nav.contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t, locale } = useI18n()

  // Helper to create locale-aware links
  const getLocalizedHref = (href: string) => `/${locale}${href}`
  
  // Check if current path matches (accounting for locale prefix)
  const isActivePath = (href: string) => {
    const localizedHref = getLocalizedHref(href)
    if (href === '') {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image src="/logo.png" alt="TriForge Logo" width={32} height={32} />
            <span className="text-xl font-bold text-gray-900 dark:text-white">TriForge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedHref(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                  isActivePath(item.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Theme Toggle, Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="space-y-2 py-4 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedHref(item.href)}
                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  isActivePath(item.href)
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
