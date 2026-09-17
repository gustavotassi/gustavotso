import type { TechGroup } from '@/lib/interfaces'

export const techGroups: TechGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Dart'],
  },
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'React Native',
      'Expo',
      'Angular',
      'Vue.js',
      'Flutter',
      'Redux',
      'Jotai',
    ],
  },
  {
    label: 'Backend & Devops',
    items: ['Node.js', 'NestJS', 'FastAPI', 'CI/CD', 'Firebase (FCM)'],
  },
  {
    label: 'Data & Messaging',
    items: ['PostgreSQL', 'SQLite', 'RabbitMQ'],
  },
  {
    label: 'Testing & Practices',
    items: ['Unit Testing (Jest)', 'Playwright', 'Agile', 'Microservices'],
  },
  {
    label: 'Tooling & Platforms',
    items: [
      'Docker',
      'Git',
      'Vite',
      'Webpack',
      'Claude',
      'Google Play',
      'App Store',
    ],
  },
]
