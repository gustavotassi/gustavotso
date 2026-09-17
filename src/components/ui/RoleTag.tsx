import { Role } from '@/lib/enums'
import { cn } from '@/lib/utils'

const DOT_BY_ROLE: Record<Role, string> = {
  [Role.FRONT]: 'bg-sky-400',
  [Role.BACK]: 'bg-rose-400',
  [Role.FULL]: 'bg-violet-400',
  [Role.MOBILE]: 'bg-emerald-400',
}

export function RoleTag({ role }: { role: Role }) {
  return (
    <span className="label text-muted inline-flex items-center gap-2 text-xs">
      <span className={cn('size-1.5 rounded-full', DOT_BY_ROLE[role])} />
      {role}
    </span>
  )
}
