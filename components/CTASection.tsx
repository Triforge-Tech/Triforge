'use client'

import { useI18n } from '@/lib/i18n'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { t } = useI18n()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-12 md:p-20"
        >
          {/* Background Pattern */}
          <div className="bg-grid-pattern absolute inset-0 opacity-10" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">{t('cta.title')}</h2>
            <p className="mb-10 text-lg text-primary-50 md:text-xl">{t('cta.subtitle')}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary-600 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('cta.button')}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-primary-700 px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-primary-600"
              >
                {t('cta.explore')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
