import { cn } from '@/lib/utils'

interface CardProps {
  href?: string
  className?: string
  children: React.ReactNode
}

/** The shell shared by the experience and project cards. */
export function Card({ href, className, children }: CardProps) {
  const classes = cn(
    'group flex h-full flex-col rounded-2xl border border-line bg-elevated/40 p-6 sm:p-7',
    'transition-colors duration-300 hover:border-fg/25 hover:bg-elevated',
    className,
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return <div className={classes}>{children}</div>
}
