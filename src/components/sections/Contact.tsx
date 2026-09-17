import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { TalkButton } from '@/components/ui/TalkButton'
import { site } from '@/config'

export function Contact() {
  return (
    <section
      id="contact"
      className="border-line scroll-mt-20 border-t px-6 py-20 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionHeading title="Contact" note="Open to work" />

          <p className="reveal text-muted mt-6 max-w-lg font-serif text-xl leading-relaxed [--reveal-delay:60ms]">
            Based in {site.location.city}, available worldwide. Remote friendly,
            timezone agnostic.
          </p>

          <TalkButton className="reveal mt-8 [--reveal-delay:120ms]" />
        </div>

        <SocialLinks
          variant="text"
          className="reveal [--reveal-delay:180ms] sm:text-right"
        />
      </div>
    </section>
  )
}
