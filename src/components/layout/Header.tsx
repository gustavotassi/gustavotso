import { ResumeButton } from '@/components/ui/ResumeButton'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { site } from '@/config'

const NAV = [
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="border-line/60 bg-bg/70 sticky top-0 z-30 border-b backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="label text-sm font-medium"
          aria-label={`${site.name} — back to top`}
        >
          GTS<span className="text-accent">.</span>
        </a>

        <nav className="flex items-center gap-2">
          {/* On a phone the whole page is one scroll away anyway. */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label text-muted hover:text-fg rounded-full px-3 py-2 text-sm transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <ResumeButton />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
