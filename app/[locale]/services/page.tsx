'use client'

import { useI18n } from '@/lib/i18n'
import { Cloud, Code2, Cpu, Database, Globe, Shield, Smartphone, Zap } from 'lucide-react'
import Link from 'next/link'

const serviceKeys = [
  {
    icon: Code2,
    titleKey: 'services.software.title',
    descKey: 'services.software.desc',
    featureKeys: [
      'services.software.f1',
      'services.software.f2',
      'services.software.f3',
      'services.software.f4',
      'services.software.f5',
    ],
  },
  {
    icon: Cloud,
    titleKey: 'services.cloud.title',
    descKey: 'services.cloud.desc',
    featureKeys: [
      'services.cloud.f1',
      'services.cloud.f2',
      'services.cloud.f3',
      'services.cloud.f4',
      'services.cloud.f5',
    ],
  },
  {
    icon: Cpu,
    titleKey: 'services.ai.title',
    descKey: 'services.ai.desc',
    featureKeys: [
      'services.ai.f1',
      'services.ai.f2',
      'services.ai.f3',
      'services.ai.f4',
      'services.ai.f5',
    ],
  },
  {
    icon: Database,
    titleKey: 'services.data.title',
    descKey: 'services.data.desc',
    featureKeys: [
      'services.data.f1',
      'services.data.f2',
      'services.data.f3',
      'services.data.f4',
      'services.data.f5',
    ],
  },
  {
    icon: Shield,
    titleKey: 'services.security.title',
    descKey: 'services.security.desc',
    featureKeys: [
      'services.security.f1',
      'services.security.f2',
      'services.security.f3',
      'services.security.f4',
      'services.security.f5',
    ],
  },
  {
    icon: Smartphone,
    titleKey: 'services.mobile.title',
    descKey: 'services.mobile.desc',
    featureKeys: [
      'services.mobile.f1',
      'services.mobile.f2',
      'services.mobile.f3',
      'services.mobile.f4',
      'services.mobile.f5',
    ],
  },
  {
    icon: Globe,
    titleKey: 'services.web.title',
    descKey: 'services.web.desc',
    featureKeys: [
      'services.web.f1',
      'services.web.f2',
      'services.web.f3',
      'services.web.f4',
      'services.web.f5',
    ],
  },
  {
    icon: Zap,
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
    featureKeys: [
      'services.consulting.f1',
      'services.consulting.f2',
      'services.consulting.f3',
      'services.consulting.f4',
      'services.consulting.f5',
    ],
  },
]

export default function ServicesPage() {
  const { t } = useI18n()

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-950 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
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
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceKeys.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.titleKey}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:border-primary-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-500"
                >
                  <div className="mb-6 flex items-start space-x-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
                      <Icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{t(service.descKey)}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.featureKeys.map((featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
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
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t('services.cta.title')}
            </h2>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
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
