import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import { Journey, Role } from '../enums'

export interface WorkExperience {
  roles: Role[]
  image: StaticImageData
  company: string
  workFrom: string
  workTo: string
  location: string
  journeyType: Journey
  isFreelance: boolean
}
