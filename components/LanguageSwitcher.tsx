'use client'

import { Locale, useI18n } from '@/lib/i18n'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useI18n()

  const toggleLocale = () => {
    const newLocale: Locale = locale === 'en' ? 'bg' : 'en'
    switchLocale(newLocale)
  }

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center space-x-1 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      title={locale === 'en' ? 'Switch to Bulgarian' : 'Превключи на английски'}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale}</span>
    </button>
  )
}
