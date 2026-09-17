'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { THEMES } from '@/config'
import { useHydrated } from '@/lib/hooks'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useHydrated()

  const isInk = resolvedTheme === THEMES.dark
  const next = isInk ? THEMES.light : THEMES.dark
  const label = isInk ? 'Paper' : 'Ink'
  const Icon = isInk ? Sun : Moon

  return (
    <button
      type="button"
      aria-label={`Switch to ${label} mode`}
      onClick={() => setTheme(next)}
      className="label border-line text-muted hover:border-fg/30 hover:bg-elevated hover:text-fg flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs transition-colors duration-300"
    >
      {/* The server has no idea which theme wins, so it renders a placeholder. */}
      {hydrated ? (
        <>
          <Icon className="size-4" />
          {label}
        </>
      ) : (
        <span className="size-4" />
      )}
    </button>
  )
}
