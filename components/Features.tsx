'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cloud, Cpu, Zap, Lock, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

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
    <section ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
