import { TechStack } from '@/lib/interfaces'

export const techStacks: TechStack[] = [
  {
    stack: 'FrontEnd',
    techs: [
      { name: 'Typescript', website: 'https://www.typescriptlang.org/' },
      { name: 'React', website: 'https://react.dev/' },
      { name: 'React Native', website: 'https://reactnative.dev/' },
      { name: 'Next.js', website: 'https://nextjs.org/' },
      { name: 'Angular', website: 'https://angular.io/' },
      { name: 'RxJS', website: 'https://rxjs.dev/' },
      { name: 'Vue.js', website: 'https://vuejs.org/' },
      { name: 'Redux Toolkit', website: 'https://redux-toolkit.js.org/' },
      { name: 'TailwindCSS', website: 'https://tailwindcss.com/' },
      { name: 'styled-components', website: 'https://styled-components.com/' },
      { name: 'Cypress.io', website: 'https://www.cypress.io/' },
    ],
  },
  {
    stack: 'BackEnd',
    techs: [
      { name: 'NodeJS', website: 'https://nodejs.org/en' },
      { name: 'NestJS', website: 'https://nestjs.com/' },
      { name: 'Jest', website: 'https://jestjs.io/' },
      { name: 'PostgreSQL', website: 'https://www.postgresql.org/docs/' },
      { name: 'RabbitMQ', website: 'https://www.rabbitmq.com/#getstarted' },
      {
        name: 'Microservices',
        website: 'https://docs.nestjs.com/microservices/basics',
      },
      { name: 'CI & CD', website: 'https://about.gitlab.com/topics/ci-cd/' },
    ],
  },
]
