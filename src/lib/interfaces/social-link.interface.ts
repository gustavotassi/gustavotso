import type { StaticImageData } from 'next/image'

export interface SocialLink {
  /** Accessible name, also used as the visible label on wide screens. */
  label: string
  handle: string
  link: string
  icon: StaticImageData
}
