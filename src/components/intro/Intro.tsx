'use client'

import { useEffect, useState } from 'react'
import { site } from '@/config'

/**
 * One beat of the intro: the name, typeset in a different voice.
 *
 * Two measured corrections per step, both in em so they scale with the size:
 *
 * `--intro-k` equalises how big each face *looks*, because at the same font
 * size they do not: Anton's capitals stand 86 units tall where Bebas Neue's
 * stand 70. The uppercase faces are matched on cap height and the two scripts
 * on x-height, both against the site's own DM Sans. Width is left alone —
 * that is the typeface's character, not its size.
 *
 * `--intro-dx` / `--intro-dy` re-centre the *ink*. A layout box is not the
 * letters: trailing letter-spacing pulls Bebas Neue left, the italic slant
 * pushes Instrument Serif and Caveat right, and capitals with no descenders
 * ride high inside a line box built for both. Each offset is the measured gap
 * between the glyphs' bounding box and the box the browser lays out.
 *
 * The scripts also drop the uppercase, since calligraphy in all caps is
 * unreadable. The last step is the site's own typeface, so the name looks like
 * it settles into place.
 */
const STEPS = [
  'font-serif font-bold uppercase tracking-tight [--intro-dx:-0.011em] [--intro-dy:0.035em] [--intro-k:0.92]',
  'font-anton uppercase tracking-[0.04em] [--intro-dx:0.018em] [--intro-dy:0.005em] [--intro-k:0.83]',
  'font-vibes [--intro-dx:-0.011em] [--intro-k:1.22] [--intro-leading:1.45]',
  'font-playfair font-black uppercase tracking-tight [--intro-dx:-0.014em] [--intro-dy:-0.055em] [--intro-k:1.01]',
  'font-bebas uppercase tracking-[0.08em] [--intro-dx:0.04em] [--intro-dy:0.05em] [--intro-k:1.01]',
  'font-instrument uppercase italic tracking-tight [--intro-dx:-0.038em] [--intro-dy:0.025em] [--intro-k:0.97]',
  'font-caveat font-bold [--intro-dx:-0.079em] [--intro-dy:-0.025em] [--intro-k:1.19] [--intro-leading:1.35]',
  'font-sans font-bold uppercase tracking-[-0.04em] [--intro-dx:-0.019em] [--intro-dy:0.015em]',
]

const SWAP_MS = 500
const HOLD_MS = 500
export const INTRO_FADE_MS = 550
const TOTAL_MS = SWAP_MS * (STEPS.length - 1) + HOLD_MS

interface IntroProps {
  /** Fired the moment the curtain starts to lift, so the page can fade in. */
  onLeave: () => void
}

export function Intro({ onLeave }: IntroProps) {
  const [step, setStep] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (leaving) return

    const isLastStep = step === STEPS.length - 1
    const timeout = window.setTimeout(
      () => (isLastStep ? setLeaving(true) : setStep((current) => current + 1)),
      isLastStep ? HOLD_MS : SWAP_MS,
    )

    return () => window.clearTimeout(timeout)
  }, [step, leaving])

  useEffect(() => {
    if (leaving) onLeave()
  }, [leaving, onLeave])

  // Impatience is a feature: any click or key press cuts straight to the site.
  useEffect(() => {
    const skip = () => setLeaving(true)

    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)

    return () => {
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="bg-bg fixed inset-0 z-50 flex flex-col items-center justify-center gap-12 transition-opacity ease-out"
      style={{
        opacity: leaving ? 0 : 1,
        transitionDuration: `${INTRO_FADE_MS}ms`,
      }}
    >
      {/*
        Fixed height on purpose: every typeface gives the word a different box,
        and without this the loading bar below would jump around with it.
      */}
      <div className="flex h-[clamp(4rem,33vw,23rem)] w-full items-center justify-center px-6">
        <span
          key={step}
          className={`[translate:var(--intro-dx,0em)_var(--intro-dy,0em)] text-center text-[length:calc(clamp(3rem,15vw,11rem)*var(--intro-k,1))] leading-[var(--intro-leading,1.1)] select-none ${STEPS[step] ?? ''}`}
          style={{ animation: 'intro-swap 180ms ease-out both' }}
        >
          {site.introWord}
        </span>
      </div>

      <span className="bg-line h-px w-32 overflow-hidden sm:w-48">
        <span
          className="bg-fg block h-full w-full origin-left"
          style={{ animation: `intro-progress ${TOTAL_MS}ms linear both` }}
        />
      </span>
    </div>
  )
}
