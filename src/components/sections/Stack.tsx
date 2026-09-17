import { SectionHeading } from '@/components/ui/SectionHeading'
import { techGroups } from '@/config'

/**
 * One row per category, so the eye lands on a label before it reads a list.
 * Nothing here is a wall of text: six short lines, each with its own heading.
 */
export function Stack() {
  return (
    <section
      id="stack"
      className="border-line scroll-mt-20 border-t px-6 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading title="Stack" note="What I build with" />

        <dl className="divide-line border-line mt-12 divide-y border-y">
          {techGroups.map((group, index) => (
            <div
              key={group.label}
              className="reveal grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[13.5rem_1fr]"
              style={
                {
                  '--reveal-delay': `${560 + index * 70}ms`,
                } as React.CSSProperties
              }
            >
              <dt className="label text-faint text-sm sm:pt-1.5">
                {group.label}
              </dt>

              {/* Commas, not bullets: they break across lines without leaving
                  a separator stranded at the start of the next one. */}
              <dd className="text-lg leading-relaxed text-balance sm:text-xl">
                {group.items.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
