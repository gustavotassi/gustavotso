import { ArrowUpRight } from 'lucide-react'
import { site } from '@/config'
import { cn } from '@/lib/utils'

export function TalkButton({ className }: { className?: string }) {
  return (
    <a
      href={site.calendarUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'group border-fg/20 inline-flex items-center gap-3 rounded-full border px-7 py-3.5',
        'hover:border-fg hover:bg-fg hover:text-bg text-lg transition-colors duration-300',
        className,
      )}
    >
      Let&apos;s talk
      <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
