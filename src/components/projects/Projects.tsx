import Image from 'next/image'
import excavatorImage from '@/assets/excavator.svg'

export function Projects() {
  return (
    <div className="m-auto w-full max-w-7xl place-items-start px-4 pt-36 font-sans">
      <h1 className="font-alt text-3xl font-bold leading-tight">Projects</h1>
      <p className="text-zinc-400">What I&apos;ve done so far</p>

      <div className="flex items-center justify-center">
        <Image
          src={excavatorImage}
          alt="excavator image"
          height={512}
          width={512}
        />
      </div>
    </div>
  )
}
