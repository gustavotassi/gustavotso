'use client'

import { Role } from '@/lib/enums'
import clsx from 'clsx'

interface ExperienceRoleProps {
  role: Role
}

export function ExperienceRole({ role }: ExperienceRoleProps) {
  return (
    <div
      className={clsx(`flex w-fit items-center justify-center gap-3 rounded-full px-4 py-1`, {
        'bg-red-900/40': role === Role.BACK,
        'bg-blue-900/40': role === Role.FRONT,
        'bg-purple-900/40': role === Role.FULL,
        'bg-green-900/40': role === Role.MOBILE
      })}
    >
      <div
        className={clsx(`m-auto h-2 w-2 rounded-full`, {
          'bg-red-500': role === Role.BACK,
          'bg-blue-500': role === Role.FRONT,
          'bg-purple-500': role === Role.FULL,
          'bg-green-500': role === Role.MOBILE
        })}
      />
      <p>{role}</p>
    </div>
  )
}
