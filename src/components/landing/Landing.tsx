import { ContactMe } from './ContactMe'
import { HoveringGlobe } from './HoveringGlobe'
import { Social } from './Social'

export function Landing() {
  return (
    <div className="m-auto w-full max-w-7xl place-items-start px-4 pt-28 font-sans">
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <p className="text-zinc-400">Full-stack Software Engineer</p>

          <HoveringGlobe />
        </div>
        <h1 className="font-alt text-6xl font-bold leading-tight">
          Gustavo Tassi
        </h1>

        <p className="text-zinc-400">
          Where skillful coding meets perfection.{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-1 font-bold text-white">
            Worldwide.
          </span>
        </p>

        <Social />

        <ContactMe />
      </div>
    </div>
  )
}
