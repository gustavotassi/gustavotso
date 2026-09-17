import acrelecImage from '@/assets/acrelec.png'
import bitCapitalImage from '@/assets/bitcapital.jpeg'
import cometCashImage from '@/assets/cometcash.jpeg'
import databindImage from '@/assets/databind.png'
import freImage from '@/assets/fre.jpeg'
import unionTechImage from '@/assets/union.jpg'
import { Journey, Role } from '@/lib/enums'
import type { WorkExperience } from '@/lib/interfaces'

/** Reverse chronological: current roles first, then the way back. */
export const workExperiences: WorkExperience[] = [
  {
    company: 'Acrelec',
    image: acrelecImage,
    link: 'https://acrelec.com/',
    roles: [Role.FULL],
    workFrom: 'Apr 2024',
    workTo: 'Present',
    location: 'Remote · Brazil',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
  {
    company: 'Databind',
    image: databindImage,
    invertOnLight: true,
    link: 'https://databind.com.br/',
    roles: [Role.FRONT],
    workFrom: 'Dec 2024',
    workTo: 'Sep 2026',
    location: 'Remote · Brazil',
    journeyType: Journey.PART,
    isFreelance: true,
  },
  {
    company: 'Comet Cash',
    image: cometCashImage,
    link: 'https://www.cometcash.com/',
    roles: [Role.FULL, Role.MOBILE],
    workFrom: 'Jun 2023',
    workTo: 'Jan 2024',
    location: 'Remote · USA',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
  {
    company: 'Union Tech',
    image: unionTechImage,
    roles: [Role.FRONT],
    workFrom: 'Dec 2022',
    workTo: 'Nov 2023',
    location: 'Remote · Brazil',
    journeyType: Journey.PART,
    isFreelance: true,
  },
  {
    company: 'Bit Capital · AME Digital',
    image: bitCapitalImage,
    roles: [Role.FULL],
    workFrom: 'Nov 2021',
    workTo: 'May 2023',
    location: 'Remote · Brazil',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
  {
    company: 'FRE Informática',
    image: freImage,
    link: 'https://fre.com.br/',
    roles: [Role.FULL, Role.MOBILE],
    workFrom: 'Oct 2020',
    workTo: 'Nov 2021',
    location: 'Boituva · Brazil',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
]
