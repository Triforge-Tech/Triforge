'use client'

import Link from 'next/link'
import { Code2, Cloud, Cpu, Database, Shield, Smartphone, Globe, Zap } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const serviceKeys = [
  {
    icon: Code2,
    titleKey: 'services.software.title',
    descKey: 'services.software.desc',
    featureKeys: ['services.software.f1', 'services.software.f2', 'services.software.f3', 'services.software.f4', 'services.software.f5'],
  },
  {
    icon: Cloud,
    titleKey: 'services.cloud.title',
    descKey: 'services.cloud.desc',
    featureKeys: ['services.cloud.f1', 'services.cloud.f2', 'services.cloud.f3', 'services.cloud.f4', 'services.cloud.f5'],
  },
  {
    icon: Cpu,
    titleKey: 'services.ai.title',
    descKey: 'services.ai.desc',
    featureKeys: ['services.ai.f1', 'services.ai.f2', 'services.ai.f3', 'services.ai.f4', 'services.ai.f5'],
  },
  {
    icon: Database,
    titleKey: 'services.data.title',
    descKey: 'services.data.desc',
    featureKeys: ['services.data.f1', 'services.data.f2', 'services.data.f3', 'services.data.f4', 'services.data.f5'],
  },
  {
    icon: Shield,
    titleKey: 'services.security.title',
    descKey: 'services.security.desc',
    featureKeys: ['services.security.f1', 'services.security.f2', 'services.security.f3', 'services.security.f4', 'services.security.f5'],
  },
  {
    icon: Smartphone,
    titleKey: 'services.mobile.title',
    descKey: 'services.mobile.desc',
    featureKeys: ['services.mobile.f1', 'services.mobile.f2', 'services.mobile.f3', 'services.mobile.f4', 'services.mobile.f5'],
  },
  {
    icon: Globe,
    titleKey: 'services.web.title',
    descKey: 'services.web.desc',
    featureKeys: ['services.web.f1', 'services.web.f2', 'services.web.f3', 'services.web.f4', 'services.web.f5'],
  },
  {
    icon: Zap,
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
    featureKeys: ['services.consulting.f1', 'services.consulting.f2', 'services.consulting.f3', 'services.consulting.f4', 'services.consulting.f5'],
  },
]

export default function ServicesPage() {
  const { t } = useI18n()

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceKeys.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.titleKey}
                  className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl bg-gray-50 dark:bg-gray-900"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.featureKeys.map((featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              {t('services.cta.subtitle')}
            </p>
            <Link href="/contact" className="btn-primary">
              {t('services.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
