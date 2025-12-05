import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { I18nProvider } from '@/lib/i18n'
import { locales, type Locale } from '@/lib/locales'
import { getTranslation } from '@/lib/translations'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale
  const t = (key: string) => getTranslation(key, locale)

  return {
    title: {
      default: t('meta.title'),
      template: '%s | TriForge',
    },
    description: t('meta.description'),
    keywords: ['technology', 'software development', 'AI', 'cloud computing', 'web development'],
    authors: [{ name: 'TriForge Technologies' }],
    creator: 'TriForge Technologies',
    openGraph: {
      type: 'website',
      locale: locale === 'bg' ? 'bg_BG' : 'en_US',
      url: 'https://triforge.net',
      siteName: 'TriForge Company',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: 'TriForge Company Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
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
    icons: {
      icon: '/logo.png',
      shortcut: '/logo.png',
      apple: '/logo.png',
    },
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider locale={params.locale}>
            <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
