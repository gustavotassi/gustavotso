import Image from 'next/image'
import globeSvg from '@/assets/globe.svg'
import { cn } from '@/lib/utils'

/** The one flourish on the page: a wireframe globe drifting in place. */
export function Globe({ className }: { className?: string }) {
  return (
    <span className={cn('block will-change-transform', className)}>
      <Image
        src={globeSvg}
        alt=""
        width={160}
        height={160}
        priority
        className="icon-adapt animate-float h-full w-full opacity-80"
      />
    </span>
  )
}
