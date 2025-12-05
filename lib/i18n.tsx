'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, ReactNode, useContext } from 'react'
import type { Locale } from './locales'
import { translations } from './translations'

export type { Locale }

type I18nContextType = {
  locale: Locale
  t: (key: string) => string
  switchLocale: (newLocale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children, locale }: { children: ReactNode; locale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(/^\/(en|bg)/, '') || '/'
    // Navigate to the new locale path
    router.push(`/${newLocale}${pathWithoutLocale}`)
    // Set cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
  }

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[locale]
  }

  return <I18nContext.Provider value={{ locale, t, switchLocale }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
