'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-950 dark:to-gray-900 md:py-32">
      {/* Background Pattern */}
      <div className="bg-grid-pattern absolute inset-0 opacity-5" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center space-x-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-600" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
          >
            {t('hero.title.part1')}{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              {t('hero.title.part2')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
              {t('hero.cta.start')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center justify-center"
            >
              {t('hero.cta.services')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
