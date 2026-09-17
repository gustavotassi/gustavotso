import Image from 'next/image'
import { socialLinks } from '@/config'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  /** `icon` for the hero row of buttons, `text` for an editorial list. */
  variant?: 'icon' | 'text'
  className?: string
}

export function SocialLinks({ variant = 'icon', className }: SocialLinksProps) {
  if (variant === 'text') {
    return (
      <ul className={cn('label flex flex-col gap-2.5 text-sm', className)}>
        {socialLinks.map((social) => (
          <li key={social.link}>
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="group text-muted hover:text-fg flex items-baseline gap-3 transition-colors duration-300"
            >
              <span className="text-faint group-hover:text-muted w-24 shrink-0 transition-colors duration-300">
                {social.label}
              </span>
              <span className="group-hover:border-line border-b border-transparent pb-0.5 transition-colors duration-300">
                {social.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={cn('flex items-center gap-2.5', className)}>
      {socialLinks.map((social) => (
        <li key={social.link}>
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            title={`${social.label} — ${social.handle}`}
            className="group border-line hover:border-fg/40 hover:bg-elevated flex size-13 items-center justify-center rounded-full border transition-colors duration-300"
          >
            <Image
              src={social.icon}
              alt={social.label}
              width={20}
              height={20}
              className="icon-adapt size-5 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
