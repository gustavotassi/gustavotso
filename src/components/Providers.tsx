'use client'

import { ThemeProvider } from 'next-themes'
import { THEMES } from '@/config'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      themes={[THEMES.light, THEMES.dark]}
      defaultTheme={THEMES.dark}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
