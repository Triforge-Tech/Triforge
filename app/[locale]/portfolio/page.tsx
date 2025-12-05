'use client'

import { useI18n } from '@/lib/i18n'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 'wfd',
    titleKey: 'portfolio.wfd.title',
    subtitleKey: 'portfolio.wfd.subtitle',
    descriptionKey: 'portfolio.wfd.description',
    featureKeys: [
      'portfolio.wfd.feature1',
      'portfolio.wfd.feature2',
      'portfolio.wfd.feature3',
      'portfolio.wfd.feature4',
    ],
    logo: '/wfd_logo.svg',
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: '#28282E',
    accentGradient: 'linear-gradient(135deg, #6B97F6 0%, #eb8190 100%)',
    url: 'https://webfinancedirect.com',
  },
  {
    id: 'battlezone',
    titleKey: 'portfolio.battlezone.title',
    subtitleKey: 'portfolio.battlezone.subtitle',
    descriptionKey: 'portfolio.battlezone.description',
    featureKeys: [
      'portfolio.battlezone.feature1',
      'portfolio.battlezone.feature2',
      'portfolio.battlezone.feature3',
      'portfolio.battlezone.feature4',
    ],
    logo: '/battlezone_logo.avif',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Vercel'],
    gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    accentGradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    url: 'https://battlezone.bg',
  },
]

export default function PortfolioPage() {
  const { t } = useI18n()

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-950 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
              {t('portfolio.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('portfolio.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-20">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={project.id}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Project Image/Visual */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div
                      className="relative aspect-video overflow-hidden rounded-2xl p-8 shadow-2xl"
                      style={{ background: project.gradient }}
                    >
                      <div className="bg-grid-pattern absolute inset-0 opacity-10" />
                      <div className="relative flex h-full items-center justify-center">
                        <div
                          className={`rounded-2xl p-8 ${project.id === 'battlezone' ? '' : 'bg-white/20 backdrop-blur-sm'}`}
                        >
                          <Image
                            src={project.logo}
                            alt={project.id === 'wfd' ? 'WebFinanceDirect Logo' : 'Battlezone Logo'}
                            width={project.id === 'battlezone' ? 500 : 200}
                            height={project.id === 'battlezone' ? 250 : 80}
                            className={
                              project.id === 'battlezone'
                                ? 'h-auto w-[200px]'
                                : 'h-auto max-h-20 w-auto object-contain'
                            }
                          />
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
                      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <span
                      className="mb-4 inline-block rounded-full px-4 py-1 text-sm font-medium text-white"
                      style={{ background: project.accentGradient }}
                    >
                      {t(project.subtitleKey)}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                      {t(project.titleKey)}
                    </h2>
                    <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                      {t(project.descriptionKey)}
                    </p>

                    {/* Features */}
                    <ul className="mb-8 space-y-3">
                      {project.featureKeys.map((featureKey) => (
                        <li
                          key={featureKey}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="mr-3 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
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

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {t('portfolio.technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      {t('portfolio.viewProject')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
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
              {t('portfolio.cta.title')}
            </h2>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
              {t('portfolio.cta.subtitle')}
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              {t('portfolio.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
