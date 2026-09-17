import { cn } from '@/lib/utils'

export function OpenToWork({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="text-accent text-2xl font-bold tracking-tight sm:text-3xl">
        #OpenToWork
      </span>

      <span aria-hidden className="animate-point text-2xl sm:text-3xl">
        👈
      </span>
    </span>
  )
}
