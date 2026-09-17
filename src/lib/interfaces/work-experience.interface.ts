import type { StaticImageData } from 'next/image'
import type { Journey, Role } from '@/lib/enums'

export interface WorkExperience {
  company: string
  image: StaticImageData
  /** True for white-on-transparent logos, which need flipping in light mode. */
  invertOnLight?: boolean
  link?: string
  roles: Role[]
  workFrom: string
  workTo: string
  location: string
  journeyType: Journey
  isFreelance: boolean
}
