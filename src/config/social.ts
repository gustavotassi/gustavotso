import githubIcon from '@/assets/github.svg'
import instagramIcon from '@/assets/instagram.svg'
import linkedInIcon from '@/assets/linkedin.svg'
import type { SocialLink } from '@/lib/interfaces'

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    handle: 'in/gustavo-tassi-souza',
    link: 'https://www.linkedin.com/in/gustavo-tassi-souza-22187214a/',
    icon: linkedInIcon,
  },
  {
    label: 'GitHub',
    handle: 'gustavotassi',
    link: 'https://github.com/gustavotassi',
    icon: githubIcon,
  }
]
