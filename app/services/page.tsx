import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Cloud, Cpu, Database, Shield, Smartphone, Globe, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover our comprehensive range of technology services including custom software development, cloud solutions, AI/ML, and more.',
}

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end software development tailored to your unique business requirements.',
    features: [
      'Web application development',
      'Mobile app development (iOS & Android)',
      'Progressive Web Apps (PWAs)',
      'API development and integration',
      'Legacy system modernization',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & DevOps',
    description: 'Scalable, secure, and cost-effective cloud infrastructure and deployment strategies.',
    features: [
      'AWS, Azure, Google Cloud setup',
      'Kubernetes & Docker containerization',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform)',
      'Cloud migration services',
    ],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that automate processes and unlock insights from your data.',
    features: [
      'Predictive analytics and forecasting',
      'Natural Language Processing (NLP)',
      'Computer vision solutions',
      'Recommendation systems',
      'ML model deployment and monitoring',
    ],
  },
  {
    icon: Database,
    title: 'Data Engineering & Analytics',
    description: 'Transform raw data into actionable insights with robust data pipelines and analytics.',
    features: [
      'Data warehouse design',
      'ETL pipeline development',
      'Real-time data processing',
      'Business intelligence dashboards',
      'Data governance and quality',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security to protect your systems and ensure regulatory compliance.',
    features: [
      'Security audits and penetration testing',
      'SOC 2, HIPAA, GDPR compliance',
      'Identity and access management',
      'Encryption and data protection',
      'Security monitoring and incident response',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS development (Swift, SwiftUI)',
      'Android development (Kotlin)',
      'React Native cross-platform apps',
      'Mobile UI/UX design',
      'App store optimization and deployment',
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies.',
    features: [
      'Next.js and React applications',
      'E-commerce solutions',
      'Content management systems',
      'Performance optimization',
      'SEO and accessibility',
    ],
  },
  {
    icon: Zap,
    title: 'Consulting & Strategy',
    description: 'Expert guidance to align your technology initiatives with business objectives.',
    features: [
      'Digital transformation roadmap',
      'Technology stack recommendations',
      'Architecture design and review',
      'Team augmentation',
      'Technical due diligence',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive technology solutions to drive your business forward. 
              From concept to deployment, we deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl bg-gray-50 dark:bg-gray-900"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
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
                        <span>{feature}</span>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
