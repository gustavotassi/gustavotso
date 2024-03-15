import { Journey, Role } from '@/lib/enums'
import { WorkExperience } from '@/lib/interfaces'
import cometCashImage from '@/assets/cometcash.jpeg'
import unionTechImage from '@/assets/union.jpg'
import bitCapitalImage from '@/assets/bitcapital.jpeg'
import acrelecImage from '@/assets/acrelec.png'
import freImage from '@/assets/fre.jpeg'

export const workExperiences: WorkExperience[] = [
  {
    company: 'Acrelec',
    image: acrelecImage,
    link: 'https://acrelec.com/',
    roles: [Role.FULL],
    workFrom: 'Apr 2024',
    workTo: 'now',
    location: 'Brazil - Remote',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
  {
    company: 'Comet Cash',
    image: cometCashImage,
    link: 'https://www.cometcash.com/',
    roles: [Role.FULL, Role.MOBILE],
    workFrom: 'Jun 2023',
    workTo: 'Jan 2024',
    location: 'USA - Remote',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
  {
    company: 'Union Tech',
    image: unionTechImage,
    roles: [Role.FRONT],
    workFrom: 'Dec 2022',
    workTo: 'now',
    location: 'Brazil - Remote',
    journeyType: Journey.PART,
    isFreelance: true,
  },
  {
    company: 'Bit Capital - AME Digital',
    image: bitCapitalImage,
    link: 'https://www.bitcapital.com.br/',
    roles: [Role.FULL],
    workFrom: 'Nov 2021',
    workTo: 'May 2023',
    location: 'Brazil - Remote',
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
    location: 'Boituva, SP',
    journeyType: Journey.FULL,
    isFreelance: false,
  },
]
