'use client'

import { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from '@/lib/hooks'
import { INTRO_FADE_MS, Intro } from './Intro'

interface IntroGateProps {
  children: React.ReactNode
}

/**
 * Holds the intro curtain over the page and, once it lifts, switches
 * `data-reveal` on so every `.reveal` element animates in.
 *
 * The page itself is always rendered underneath — nothing here hides content,
 * which keeps it readable without JavaScript and visible to crawlers.
 */
export function IntroGate({ children }: IntroGateProps) {
  const [introFinished, setIntroFinished] = useState(false)
  const [revealed, setRevealed] = useState(false)

  // Nobody should be held for four seconds against their stated preference.
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const showIntro = !introFinished && !prefersReducedMotion

  const handleLeave = useCallback(() => {
    setRevealed(true)
    window.setTimeout(() => setIntroFinished(true), INTRO_FADE_MS)
  }, [])

  useEffect(() => {
    if (!showIntro) return

    // A refresh halfway down the page should still start from the top.
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [showIntro])

  return (
    <>
      {showIntro && <Intro onLeave={handleLeave} />}
      <div data-reveal={revealed || prefersReducedMotion ? 'on' : 'off'}>
        {children}
      </div>
    </>
  )
}
