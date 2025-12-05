import type { Locale } from './locales'

type Translations = {
  [key: string]: {
    en: string
    bg: string
  }
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', bg: 'Начало' },
  'nav.about': { en: 'About', bg: 'За нас' },
  'nav.services': { en: 'Services', bg: 'Услуги' },
  'nav.blog': { en: 'Blog', bg: 'Блог' },
  'nav.contact': { en: 'Contact', bg: 'Контакти' },

  // Hero Section
  'hero.badge': {
    en: 'Innovating the future of technology',
    bg: 'Иновации за бъдещето на технологиите',
  },
  'hero.title.part1': { en: 'Build the Future with', bg: 'Изградете бъдещето с' },
  'hero.title.part2': { en: 'Cutting-Edge Tech', bg: 'авангардни технологии' },
  'hero.subtitle': {
    en: 'We deliver innovative software solutions, AI-powered applications, and scalable cloud infrastructure that transform businesses and drive growth.',
    bg: 'Предоставяме иновативни софтуерни решения, приложения с изкуствен интелект и мащабируема облачна инфраструктура, които трансформират бизнеси и движат растежа.',
  },
  'hero.cta.start': { en: 'Get Started', bg: 'Започнете' },
  'hero.cta.services': { en: 'View Our Services', bg: 'Вижте нашите услуги' },

  // Features Section
  'features.title': { en: 'Why Choose TriForge?', bg: 'Защо да изберете TriForge?' },
  'features.subtitle': {
    en: 'We combine cutting-edge technology with proven methodologies to deliver exceptional results.',
    bg: 'Съчетаваме авангардни технологии с доказани методологии за постигане на изключителни резултати.',
  },
  'features.software.title': {
    en: 'Custom Software Development',
    bg: 'Разработка на софтуер по поръчка',
  },
  'features.software.desc': {
    en: 'Bespoke software solutions tailored to your unique business needs and workflows.',
    bg: 'Уникални софтуерни решения, съобразени с вашите бизнес нужди и работни процеси.',
  },
  'features.cloud.title': { en: 'Cloud Infrastructure', bg: 'Облачна инфраструктура' },
  'features.cloud.desc': {
    en: 'Scalable and secure cloud solutions that grow with your business.',
    bg: 'Мащабируеми и сигурни облачни решения, които растат с вашия бизнес.',
  },
  'features.ai.title': { en: 'AI & Machine Learning', bg: 'AI и машинно обучение' },
  'features.ai.desc': {
    en: 'Intelligent systems that automate processes and unlock insights from your data.',
    bg: 'Интелигентни системи, които автоматизират процеси и разкриват прозрения от вашите данни.',
  },
  'features.performance.title': {
    en: 'Performance Optimization',
    bg: 'Оптимизация на производителността',
  },
  'features.performance.desc': {
    en: 'Lightning-fast applications optimized for the best user experience.',
    bg: 'Светкавично бързи приложения, оптимизирани за най-добро потребителско изживяване.',
  },
  'features.security.title': { en: 'Security First', bg: 'Сигурност на първо място' },
  'features.security.desc': {
    en: 'Enterprise-grade security protecting your data and systems 24/7.',
    bg: 'Сигурност от корпоративен клас, защитаваща вашите данни и системи 24/7.',
  },
  'features.global.title': { en: 'Global Reach', bg: 'Глобален обхват' },
  'features.global.desc': {
    en: 'Multi-region deployment and CDN integration for worldwide accessibility.',
    bg: 'Многорегионално разполагане и CDN интеграция за световна достъпност.',
  },

  // CTA Section
  'cta.title': {
    en: 'Ready to Transform Your Business?',
    bg: 'Готови ли сте да трансформирате бизнеса си?',
  },
  'cta.subtitle': {
    en: "Let's discuss how we can help you achieve your technology goals. Our team of experts is ready to bring your vision to life.",
    bg: 'Нека обсъдим как можем да ви помогнем да постигнете технологичните си цели. Нашият екип от експерти е готов да превърне вашата визия в реалност.',
  },
  'cta.button': { en: 'Contact Us', bg: 'Свържете се с нас' },
  'cta.explore': { en: 'Explore Services', bg: 'Разгледайте услугите' },

  // About Page
  'about.hero.title': {
    en: "Building Tomorrow's Technology, Today",
    bg: 'Изграждаме технологиите на утрешния ден, днес',
  },
  'about.hero.subtitle': {
    en: "We're a passionate team of technologists, designers, and innovators dedicated to transforming businesses through cutting-edge software solutions.",
    bg: 'Ние сме страстен екип от технолози, дизайнери и иноватори, посветени на трансформирането на бизнеси чрез авангардни софтуерни решения.',
  },
  'about.story.title': { en: 'Our Story', bg: 'Нашата история' },
  'about.story.p1': {
    en: 'Founded in 2024, TriForge began with a simple mission: make enterprise-grade technology accessible to businesses of all sizes.',
    bg: 'Основана през 2024 г., TriForge започна с проста мисия: да направи технологиите от корпоративен клас достъпни за бизнеси от всякакъв размер.',
  },
  'about.story.p2': {
    en: 'We started as a small team of three talented individuals. United by a shared vision and a passion for technology, we set out to create innovative solutions that could drive real business impact.',
    bg: 'Започнахме като малък екип от трима талантливи хора. Обединени от обща визия и страст към технологиите, ние се заехме да създаваме иновативни решения с реално бизнес въздействие.',
  },
  'about.story.p3': {
    en: "Today, we're proud to be at the forefront of AI, cloud computing, and modern web development, continuously pushing the boundaries of what's possible with technology.",
    bg: 'Днес сме горди да сме в челните редици на AI, облачните изчисления и модерната уеб разработка, като непрекъснато разширяваме границите на възможното с технологиите.',
  },
  'about.values.title': { en: 'Our Values', bg: 'Нашите ценности' },
  'about.values.subtitle': {
    en: 'The principles that guide our work and relationships',
    bg: 'Принципите, които ръководят работата и взаимоотношенията ни',
  },
  'about.values.innovation': { en: 'Innovation First', bg: 'Иновации на първо място' },
  'about.values.innovation.desc': {
    en: 'We constantly push boundaries and embrace cutting-edge technologies to deliver the best solutions.',
    bg: 'Ние постоянно разширяваме границите и прилагаме авангардни технологии за най-добрите решения.',
  },
  'about.values.client': { en: 'Client-Centric', bg: 'Фокус върху клиента' },
  'about.values.client.desc': {
    en: 'Your success is our success. We build lasting partnerships through exceptional service and results.',
    bg: 'Вашият успех е наш успех. Изграждаме трайни партньорства чрез изключително обслужване и резултати.',
  },
  'about.values.excellence': { en: 'Excellence', bg: 'Превъзходство' },
  'about.values.excellence.desc': {
    en: 'We maintain the highest standards in code quality, security, and performance.',
    bg: 'Поддържаме най-високи стандарти в качеството на кода, сигурността и производителността.',
  },
  'about.values.integrity': { en: 'Integrity', bg: 'Почтеност' },
  'about.values.integrity.desc': {
    en: 'Transparency, honesty, and ethical practices guide everything we do.',
    bg: 'Прозрачност, честност и етични практики ръководят всичко, което правим.',
  },
  'about.team.title': { en: 'Meet Our Team', bg: 'Запознайте се с екипа' },
  'about.team.subtitle': {
    en: 'The talented people making it all happen',
    bg: 'Талантливите хора, които правят всичко възможно',
  },
  'about.team.connect': { en: 'Connect on LinkedIn →', bg: 'Свържете се в LinkedIn →' },

  // Team Members
  'about.team.vyacheslav.role': {
    en: 'CEO & Co-Founder',
    bg: 'Изпълнителен директор и съосновател',
  },
  'about.team.vyacheslav.bio': {
    en: '15+ years in tech leadership, passionate about AI and cloud innovation.',
    bg: '15+ години в технологичното лидерство, страст към AI и облачни иновации.',
  },
  'about.team.alexander.role': { en: 'Co-Founder', bg: 'Съосновател' },
  'about.team.alexander.bio': {
    en: 'Expert in mobile and web development, driving technical excellence.',
    bg: 'Експерт в мобилна и уеб разработка, движещ техническото съвършенство.',
  },
  'about.team.hristo.role': { en: 'Co-Founder', bg: 'Съосновател' },
  'about.team.hristo.bio': {
    en: 'Experienced full-stack developer with a passion for scalable solutions.',
    bg: 'Опитен full-stack разработчик със страст към мащабируеми решения.',
  },

  // Services Page
  'services.hero.title': { en: 'Our Services', bg: 'Нашите услуги' },
  'services.hero.subtitle': {
    en: 'Comprehensive technology solutions to drive your business forward. From concept to deployment, we deliver excellence at every stage.',
    bg: 'Цялостни технологични решения, които движат бизнеса ви напред. От концепция до внедряване, ние предоставяме съвършенство на всеки етап.',
  },
  'services.cta.title': {
    en: 'Ready to Start Your Project?',
    bg: 'Готови ли сте да започнете проекта си?',
  },
  'services.cta.subtitle': {
    en: "Let's discuss how our services can help you achieve your technology goals.",
    bg: 'Нека обсъдим как нашите услуги могат да ви помогнат да постигнете технологичните си цели.',
  },
  'services.cta.button': { en: 'Get in Touch', bg: 'Свържете се с нас' },

  // Service: Custom Software Development
  'services.software.title': {
    en: 'Custom Software Development',
    bg: 'Разработка на софтуер по поръчка',
  },
  'services.software.desc': {
    en: 'End-to-end software development tailored to your unique business requirements.',
    bg: 'Цялостна разработка на софтуер, съобразена с уникалните ви бизнес изисквания.',
  },
  'services.software.f1': { en: 'Web application development', bg: 'Разработка на уеб приложения' },
  'services.software.f2': {
    en: 'Mobile app development (iOS & Android)',
    bg: 'Разработка на мобилни приложения (iOS и Android)',
  },
  'services.software.f3': {
    en: 'Progressive Web Apps (PWAs)',
    bg: 'Прогресивни уеб приложения (PWA)',
  },
  'services.software.f4': {
    en: 'API development and integration',
    bg: 'Разработка и интеграция на API',
  },
  'services.software.f5': {
    en: 'Legacy system modernization',
    bg: 'Модернизация на наследени системи',
  },

  // Service: Cloud Solutions & DevOps
  'services.cloud.title': { en: 'Cloud Solutions & DevOps', bg: 'Облачни решения и DevOps' },
  'services.cloud.desc': {
    en: 'Scalable, secure, and cost-effective cloud infrastructure and deployment strategies.',
    bg: 'Мащабируема, сигурна и икономически ефективна облачна инфраструктура и стратегии за внедряване.',
  },
  'services.cloud.f1': {
    en: 'AWS, Azure, Google Cloud setup',
    bg: 'Настройка на AWS, Azure, Google Cloud',
  },
  'services.cloud.f2': {
    en: 'Kubernetes & Docker containerization',
    bg: 'Контейнеризация с Kubernetes и Docker',
  },
  'services.cloud.f3': {
    en: 'CI/CD pipeline implementation',
    bg: 'Имплементация на CI/CD тръбопроводи',
  },
  'services.cloud.f4': {
    en: 'Infrastructure as Code (Terraform)',
    bg: 'Инфраструктура като код (Terraform)',
  },
  'services.cloud.f5': { en: 'Cloud migration services', bg: 'Услуги за миграция към облака' },

  // Service: AI & Machine Learning
  'services.ai.title': { en: 'AI & Machine Learning', bg: 'AI и машинно обучение' },
  'services.ai.desc': {
    en: 'Intelligent systems that automate processes and unlock insights from your data.',
    bg: 'Интелигентни системи, които автоматизират процеси и разкриват прозрения от вашите данни.',
  },
  'services.ai.f1': {
    en: 'Predictive analytics and forecasting',
    bg: 'Предиктивна аналитика и прогнозиране',
  },
  'services.ai.f2': {
    en: 'Natural Language Processing (NLP)',
    bg: 'Обработка на естествен език (NLP)',
  },
  'services.ai.f3': { en: 'Computer vision solutions', bg: 'Решения за компютърно зрение' },
  'services.ai.f4': { en: 'Recommendation systems', bg: 'Препоръчителни системи' },
  'services.ai.f5': {
    en: 'ML model deployment and monitoring',
    bg: 'Внедряване и мониторинг на ML модели',
  },

  // Service: Data Engineering & Analytics
  'services.data.title': {
    en: 'Data Engineering & Analytics',
    bg: 'Инженеринг на данни и анализи',
  },
  'services.data.desc': {
    en: 'Transform raw data into actionable insights with robust data pipelines and analytics.',
    bg: 'Превърнете суровите данни в действащи прозрения с надеждни тръбопроводи за данни и анализи.',
  },
  'services.data.f1': { en: 'Data warehouse design', bg: 'Проектиране на хранилище за данни' },
  'services.data.f2': { en: 'ETL pipeline development', bg: 'Разработка на ETL тръбопроводи' },
  'services.data.f3': { en: 'Real-time data processing', bg: 'Обработка на данни в реално време' },
  'services.data.f4': {
    en: 'Business intelligence dashboards',
    bg: 'Табла за бизнес интелигентност',
  },
  'services.data.f5': { en: 'Data governance and quality', bg: 'Управление и качество на данните' },

  // Service: Security & Compliance
  'services.security.title': { en: 'Security & Compliance', bg: 'Сигурност и съответствие' },
  'services.security.desc': {
    en: 'Enterprise-grade security to protect your systems and ensure regulatory compliance.',
    bg: 'Сигурност от корпоративен клас за защита на вашите системи и осигуряване на регулаторно съответствие.',
  },
  'services.security.f1': {
    en: 'Security audits and penetration testing',
    bg: 'Одити на сигурността и тестове за проникване',
  },
  'services.security.f2': {
    en: 'SOC 2, HIPAA, GDPR compliance',
    bg: 'Съответствие със SOC 2, HIPAA, GDPR',
  },
  'services.security.f3': {
    en: 'Identity and access management',
    bg: 'Управление на идентичността и достъпа',
  },
  'services.security.f4': {
    en: 'Encryption and data protection',
    bg: 'Криптиране и защита на данните',
  },
  'services.security.f5': {
    en: 'Security monitoring and incident response',
    bg: 'Мониторинг на сигурността и реагиране при инциденти',
  },

  // Service: Mobile Development
  'services.mobile.title': { en: 'Mobile Development', bg: 'Мобилна разработка' },
  'services.mobile.desc': {
    en: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    bg: 'Нативни и крос-платформени мобилни приложения, които предоставят изключително потребителско изживяване.',
  },
  'services.mobile.f1': {
    en: 'iOS development (Swift, SwiftUI)',
    bg: 'iOS разработка (Swift, SwiftUI)',
  },
  'services.mobile.f2': { en: 'Android development (Kotlin)', bg: 'Android разработка (Kotlin)' },
  'services.mobile.f3': {
    en: 'React Native cross-platform apps',
    bg: 'Крос-платформени приложения с React Native',
  },
  'services.mobile.f4': { en: 'Mobile UI/UX design', bg: 'Мобилен UI/UX дизайн' },
  'services.mobile.f5': {
    en: 'App store optimization and deployment',
    bg: 'Оптимизация и публикуване в магазините за приложения',
  },

  // Service: Web Development
  'services.web.title': { en: 'Web Development', bg: 'Уеб разработка' },
  'services.web.desc': {
    en: 'Modern, responsive websites and web applications built with the latest technologies.',
    bg: 'Модерни, адаптивни уебсайтове и уеб приложения, изградени с най-новите технологии.',
  },
  'services.web.f1': { en: 'Next.js and React applications', bg: 'Приложения с Next.js и React' },
  'services.web.f2': { en: 'E-commerce solutions', bg: 'Решения за електронна търговия' },
  'services.web.f3': {
    en: 'Content management systems',
    bg: 'Системи за управление на съдържание',
  },
  'services.web.f4': { en: 'Performance optimization', bg: 'Оптимизация на производителността' },
  'services.web.f5': { en: 'SEO and accessibility', bg: 'SEO и достъпност' },

  // Service: Consulting & Strategy
  'services.consulting.title': { en: 'Consulting & Strategy', bg: 'Консултации и стратегия' },
  'services.consulting.desc': {
    en: 'Expert guidance to align your technology initiatives with business objectives.',
    bg: 'Експертни насоки за съгласуване на технологичните ви инициативи с бизнес целите.',
  },
  'services.consulting.f1': {
    en: 'Digital transformation roadmap',
    bg: 'Пътна карта за дигитална трансформация',
  },
  'services.consulting.f2': {
    en: 'Technology stack recommendations',
    bg: 'Препоръки за технологичен стек',
  },
  'services.consulting.f3': {
    en: 'Architecture design and review',
    bg: 'Проектиране и преглед на архитектура',
  },
  'services.consulting.f4': { en: 'Team augmentation', bg: 'Разширяване на екипа' },
  'services.consulting.f5': { en: 'Technical due diligence', bg: 'Технически дю дилиджънс' },

  // Contact Page
  'contact.hero.title': { en: 'Get in Touch', bg: 'Свържете се с нас' },
  'contact.hero.subtitle': {
    en: "Have a project in mind? Let's discuss how we can help bring your vision to life.",
    bg: 'Имате проект? Нека обсъдим как можем да помогнем да превърнете визията си в реалност.',
  },
  'contact.conversation.title': { en: "Let's Start a Conversation", bg: 'Нека започнем разговор' },
  'contact.conversation.subtitle': {
    en: "Whether you have a question, a project idea, or just want to say hello, we'd love to hear from you.",
    bg: 'Независимо дали имате въпрос, идея за проект или просто искате да кажете здравей, ще се радваме да чуем от вас.',
  },
  'contact.form.name': { en: 'Name', bg: 'Име' },
  'contact.form.name.placeholder': { en: 'Your name', bg: 'Вашето име' },
  'contact.form.email': { en: 'Email', bg: 'Имейл' },
  'contact.form.email.placeholder': { en: 'your@email.com', bg: 'вашият@имейл.com' },
  'contact.form.company': { en: 'Company', bg: 'Фирма' },
  'contact.form.company.placeholder': { en: 'Your company', bg: 'Вашата фирма' },
  'contact.form.phone': { en: 'Phone', bg: 'Телефон' },
  'contact.form.phone.placeholder': { en: '+1 (555) 123-4567', bg: '+359 888 123 456' },
  'contact.form.subject': { en: 'Subject', bg: 'Тема' },
  'contact.form.subject.placeholder': { en: 'How can we help?', bg: 'Как можем да помогнем?' },
  'contact.form.message': { en: 'Message', bg: 'Съобщение' },
  'contact.form.message.placeholder': {
    en: 'Tell us about your project...',
    bg: 'Разкажете ни за вашия проект...',
  },
  'contact.form.submit': { en: 'Send Message', bg: 'Изпрати съобщение' },
  'contact.form.sending': { en: 'Sending...', bg: 'Изпращане...' },
  'contact.form.success': {
    en: "Thank you! We'll get back to you soon.",
    bg: 'Благодарим ви! Ще се свържем с вас скоро.',
  },
  'contact.form.error': {
    en: 'Something went wrong. Please try again.',
    bg: 'Нещо се обърка. Моля, опитайте отново.',
  },
  'contact.info.email': { en: 'Email', bg: 'Имейл' },

  // Footer
  'footer.description': {
    en: 'Building innovative digital solutions that transform businesses and drive growth.',
    bg: 'Изграждаме иновативни дигитални решения, които трансформират бизнеси и движат растежа.',
  },
  'footer.services': { en: 'Services', bg: 'Услуги' },
  'footer.company': { en: 'Company', bg: 'Компания' },
  'footer.legal': { en: 'Legal', bg: 'Правна информация' },
  'footer.privacy': { en: 'Privacy Policy', bg: 'Политика за поверителност' },
  'footer.terms': { en: 'Terms of Service', bg: 'Условия за ползване' },
  'footer.cookies': { en: 'Cookie Policy', bg: 'Политика за бисквитки' },
  'footer.rights': { en: 'All rights reserved.', bg: 'Всички права запазени.' },

  // Metadata
  'meta.title': {
    en: 'TriForge - Innovative Tech Solutions',
    bg: 'TriForge - Иновативни технологични решения',
  },
  'meta.description': {
    en: 'Innovative technology solutions for modern businesses. We build cutting-edge software, AI-powered applications, and scalable cloud infrastructure.',
    bg: 'Иновативни технологични решения за съвременния бизнес. Изграждаме авангарден софтуер, приложения с изкуствен интелект и мащабируема облачна инфраструктура.',
  },
}

// Helper function for server-side translation (can be used in generateMetadata)
export function getTranslation(key: string, locale: Locale): string {
  const translation = translations[key]
  if (!translation) {
    console.warn(`Translation missing for key: ${key}`)
    return key
  }
  return translation[locale]
}
