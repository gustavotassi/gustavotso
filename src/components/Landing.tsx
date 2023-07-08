import Image from 'next/image'
import globeSvg from '@/assets/globe.svg'

export function Landing() {
  return (
    <div className="m-auto w-full max-w-7xl place-items-start px-4 pt-28 font-sans">
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <p className="font-bold uppercase tracking-widest">
            Software Engineer
          </p>
          <Image
            className="invert-90 dark:invert-0"
            src={globeSvg}
            alt="globe icon"
            height={42}
            width={42}
          />
        </div>
        <h1 className="font-alt text-6xl font-bold leading-tight">
          Gustavo Tassi
        </h1>

        <p className="font-bold uppercase tracking-widest">
          When excellence meets innovation. Worldwide.
        </p>
      </div>
    </div>
  )
}
