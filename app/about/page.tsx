import type { Metadata } from 'next'
import Image from 'next/image'
import { Users, Target, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TriForge Technologies, our mission, values, and the talented team behind our innovative solutions.',
}

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: '/team/sarah.jpg',
    bio: '15+ years in tech leadership, passionate about AI and cloud innovation.',
    linkedin: 'https://linkedin.com/in/sarah-johnson',
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: '/team/michael.jpg',
    bio: 'Former Google engineer, expert in scalable architectures and ML systems.',
    linkedin: 'https://linkedin.com/in/michael-chen',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/team/emily.jpg',
    bio: 'Award-winning designer creating beautiful and intuitive user experiences.',
    linkedin: 'https://linkedin.com/in/emily-rodriguez',
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    image: '/team/david.jpg',
    bio: 'Full-stack wizard with expertise in Next.js, TypeScript, and cloud infrastructure.',
    linkedin: 'https://linkedin.com/in/david-kim',
  },
]

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver the best solutions.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting partnerships through exceptional service and results.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in code quality, security, and performance.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparency, honesty, and ethical practices guide everything we do.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Building Tomorrow's Technology, Today
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're a passionate team of technologists, designers, and innovators 
              dedicated to transforming businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2014, TriForge Technologies began with a simple mission: 
                  make enterprise-grade technology accessible to businesses of all sizes.
                </p>
                <p>
                  What started as a small team of three has grown into a thriving 
                  company of 50+ talented individuals. We've delivered over 500 
                  successful projects, helping companies across industries transform 
                  their operations and achieve their goals.
                </p>
                <p>
                  Today, we're proud to be at the forefront of AI, cloud computing, 
                  and modern web development, continuously pushing the boundaries of 
                  what's possible with technology.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/about/office.jpg"
                alt="TriForge Technologies Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="p-6 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The talented people making it all happen
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600" />
                  {/* Placeholder - replace with actual images */}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
