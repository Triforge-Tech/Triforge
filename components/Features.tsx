'use client'

import { useI18n } from '@/lib/i18n'
import { motion } from 'framer-motion'
import { Cloud, Code, Cpu, Globe, Lock, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const featureKeys = [
  { icon: Code, titleKey: 'features.software.title', descKey: 'features.software.desc' },
  { icon: Cloud, titleKey: 'features.cloud.title', descKey: 'features.cloud.desc' },
  { icon: Cpu, titleKey: 'features.ai.title', descKey: 'features.ai.desc' },
  { icon: Zap, titleKey: 'features.performance.title', descKey: 'features.performance.desc' },
  { icon: Lock, titleKey: 'features.security.title', descKey: 'features.security.desc' },
  { icon: Globe, titleKey: 'features.global.title', descKey: 'features.global.desc' },
]

export default function Features() {
  const { t } = useI18n()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="bg-white py-20 dark:bg-gray-950 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:border-primary-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-500"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 transition-transform duration-300 group-hover:scale-110 dark:bg-primary-900/20">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{t(feature.descKey)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
