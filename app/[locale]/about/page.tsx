'use client'

import { useI18n } from '@/lib/i18n'
import { Award, Heart, Target, Users } from 'lucide-react'

export default function AboutPage() {
  const { t } = useI18n()

  const team = [
    {
      name: 'Vyacheslav Kara',
      role: t('about.team.vyacheslav.role'),
      image: '/team/sarah.jpg',
      bio: t('about.team.vyacheslav.bio'),
      linkedin: 'https://www.linkedin.com/in/vyacheslav-kara-05a8b7b7/',
    },
    {
      name: 'Alexander Aldzhabari',
      role: t('about.team.alexander.role'),
      image: '/team/michael.jpg',
      bio: t('about.team.alexander.bio'),
      linkedin: 'https://www.linkedin.com/in/alexander-aljabari-53074322b/',
    },
    {
      name: 'Hristo Draganov',
      role: t('about.team.hristo.role'),
      image: '/team/emily.jpg',
      bio: t('about.team.hristo.bio'),
      linkedin: 'https://www.linkedin.com/in/hristo-draganov-11905a219/',
    },
  ]

  const values = [
    {
      icon: Target,
      titleKey: 'about.values.innovation',
      descKey: 'about.values.innovation.desc',
    },
    {
      icon: Users,
      titleKey: 'about.values.client',
      descKey: 'about.values.client.desc',
    },
    {
      icon: Award,
      titleKey: 'about.values.excellence',
      descKey: 'about.values.excellence.desc',
    },
    {
      icon: Heart,
      titleKey: 'about.values.integrity',
      descKey: 'about.values.integrity.desc',
    },
  ]
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-950 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('about.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </div>
            <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
              <svg
                viewBox="0 0 400 300"
                className="h-full w-full p-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Abstract geometric background elements */}
                <circle
                  cx="50"
                  cy="50"
                  r="80"
                  className="fill-primary-100/40 dark:fill-primary-900/20"
                />
                <circle
                  cx="350"
                  cy="250"
                  r="100"
                  className="fill-primary-100/30 dark:fill-primary-900/15"
                />

                {/* Main abstract building */}
                <g>
                  {/* Building shadow */}
                  <rect
                    x="135"
                    y="75"
                    width="140"
                    height="190"
                    rx="4"
                    className="fill-primary-900/10 dark:fill-black/20"
                    transform="translate(8, 8)"
                  />

                  {/* Main building body */}
                  <rect
                    x="135"
                    y="75"
                    width="140"
                    height="190"
                    rx="4"
                    className="fill-gradient-to-b from-primary-500 to-primary-700"
                  />
                  <defs>
                    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop
                        offset="0%"
                        className="[stop-color:var(--tw-gradient-from)]"
                        style={{ stopColor: '#6366f1' }}
                      />
                      <stop
                        offset="100%"
                        className="[stop-color:var(--tw-gradient-to)]"
                        style={{ stopColor: '#4338ca' }}
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    x="135"
                    y="75"
                    width="140"
                    height="190"
                    rx="4"
                    fill="url(#buildingGradient)"
                    className="dark:opacity-80"
                  />

                  {/* Glass panel overlay */}
                  <rect
                    x="145"
                    y="85"
                    width="120"
                    height="170"
                    rx="2"
                    className="fill-white/10 dark:fill-white/5"
                  />

                  {/* Window rows */}
                  {[0, 1, 2, 3, 4, 5].map((row) => (
                    <g key={`row-${row}`}>
                      <rect
                        x="155"
                        y={100 + row * 26}
                        width="22"
                        height="18"
                        rx="2"
                        className="fill-sky-200/90 dark:fill-primary-200/20"
                      />
                      <rect
                        x="185"
                        y={100 + row * 26}
                        width="22"
                        height="18"
                        rx="2"
                        className="fill-white/80 dark:fill-primary-100/15"
                      />
                      <rect
                        x="215"
                        y={100 + row * 26}
                        width="22"
                        height="18"
                        rx="2"
                        className="fill-sky-100/90 dark:fill-primary-200/20"
                      />
                      <rect
                        x="245"
                        y={100 + row * 26}
                        width="18"
                        height="18"
                        rx="2"
                        className="fill-white/70 dark:fill-primary-100/15"
                      />
                    </g>
                  ))}
                </g>

                {/* Decorative floating elements */}
                <circle
                  cx="80"
                  cy="150"
                  r="4"
                  className="fill-primary-400/60 dark:fill-primary-500/40"
                />
                <circle
                  cx="320"
                  cy="100"
                  r="6"
                  className="fill-primary-300/60 dark:fill-primary-600/40"
                />
                <circle
                  cx="100"
                  cy="220"
                  r="3"
                  className="fill-primary-500/50 dark:fill-primary-400/30"
                />
                <circle
                  cx="300"
                  cy="200"
                  r="5"
                  className="fill-primary-400/50 dark:fill-primary-500/30"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t('about.values.subtitle')}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.titleKey}
                  className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{t(value.descKey)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t('about.team.subtitle')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member) => (
              <div key={member.name} className="group w-full text-center md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <div className="h-full w-full bg-gradient-to-br from-primary-400 to-primary-600" />
                  {/* Placeholder - replace with actual images */}
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-2 font-medium text-primary-600 dark:text-primary-400">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {t('about.team.connect')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
