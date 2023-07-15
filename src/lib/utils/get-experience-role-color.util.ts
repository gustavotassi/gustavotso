import { Role } from '../enums'

export function getExperienceRoleColor(role: Role) {
  switch (role) {
    case Role.BACK:
      return 'red'

    case Role.FRONT:
      return 'blue'

    case Role.FULL:
      return 'purple'

    case Role.MOBILE:
      return 'green'

    default:
      return 'slate'
  }
}
