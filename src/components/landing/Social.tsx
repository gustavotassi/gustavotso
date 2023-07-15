import { socialMediaItems } from '@/config'
import Image from 'next/image'

export function Social() {
  return (
    <div className="flex gap-4">
      {socialMediaItems.map((item) => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl border-2 border-zinc-500 p-3 transition-all hover:border-zinc-900 dark:border-zinc-500 hover:dark:border-zinc-100"
        >
          <Image
            src={item.imageSrc}
            className="opacity-60 invert-90 transition-all group-hover:opacity-100 dark:invert-0"
            alt="social media icon"
            height={32}
            width={32}
          />
        </a>
      ))}
    </div>
  )
}
