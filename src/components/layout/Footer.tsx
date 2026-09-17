import { LocalTime } from '@/components/ui/LocalTime'
import { site } from '@/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-line border-t px-6 py-12">
      <div className="label text-faint mx-auto flex w-full max-w-5xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>

        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="whitespace-nowrap">
            {site.location.city}, {site.location.country}
          </span>
          <span aria-hidden>·</span>
          <LocalTime />
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <span className="hidden whitespace-nowrap sm:inline">
            Available worldwide
          </span>
        </p>
      </div>
    </footer>
  )
}
