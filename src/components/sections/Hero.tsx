import { Globe } from '@/components/ui/Globe'
import { OpenToWork } from '@/components/ui/OpenToWork'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { TalkButton } from '@/components/ui/TalkButton'
import { site } from '@/config'

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-24 sm:pt-28 lg:pt-36 lg:pb-36">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col items-start gap-6">
            <p className="reveal label text-muted text-sm sm:text-base">
              {site.role}
            </p>

            {site.openToWork && (
              <OpenToWork className="reveal [--reveal-delay:80ms]" />
            )}
          </div>

          <Globe className="reveal size-18 shrink-0 [--reveal-delay:160ms] sm:size-24 lg:size-32" />
        </div>

        <h1 className="reveal mt-12 text-[3.25rem] leading-[0.95] font-bold tracking-[-0.04em] text-balance [--reveal-delay:240ms] sm:mt-16 sm:text-8xl lg:text-[7rem]">
          {site.name}
        </h1>

        <p className="reveal text-muted mt-8 max-w-2xl font-serif text-xl leading-relaxed [--reveal-delay:320ms] sm:text-2xl">
          {site.tagline}
        </p>

        <p className="reveal label mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm [--reveal-delay:400ms] sm:text-base">
          <span className="text-muted">
            Based in {site.location.city}, {site.location.country}
          </span>
          <span aria-hidden className="text-faint">
            /
          </span>
          <span className="border-accent/50 text-fg border-b-2 pb-0.5">
            Available worldwide
          </span>
        </p>

        <div className="reveal mt-14 flex flex-wrap items-center gap-4 [--reveal-delay:480ms]">
          <TalkButton />
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
