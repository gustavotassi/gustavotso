'use client'

import { Role } from '@/lib/enums'
import { getExperienceRoleColor } from '@/lib/utils'

interface ExperienceRoleProps {
  role: Role
}

export function ExperienceRole({ role }: ExperienceRoleProps) {
  const experienceRoleColor = getExperienceRoleColor(role)

  return (
    <div
      className={`flex w-fit items-center justify-center gap-3 rounded-full bg-${experienceRoleColor}-900/40 px-4 py-1`}
    >
      <div
        className={`m-auto h-2 w-2 rounded-full bg-${experienceRoleColor}-500`}
      />
      <p>{role}</p>
    </div>
  )
}
