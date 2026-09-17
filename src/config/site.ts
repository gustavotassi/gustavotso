/** The two themes, named on the page rather than "light" and "dark". */
export const THEMES = {
  light: 'paper',
  dark: 'ink',
} as const

export const site = {
  name: 'Gustavo T. Souza',
  shortName: 'Gustavo',
  /** Cycled through, one font at a time, by the intro animation. */
  introWord: 'Gustavo',
  role: 'Full-stack Software Engineer',
  tagline: 'Where skillful coding meets perfection.',
  location: {
    city: 'São Paulo',
    country: 'Brazil',
    timeZone: 'America/Sao_Paulo',
  },
  openToWork: true,
  calendarUrl: 'https://cal.com/gustavo-tassi',
  /** Served from `public/`. */
  resumeUrl: '/gustavo-resume-portfolio.pdf',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gustavotso.vercel.app',
} as const
