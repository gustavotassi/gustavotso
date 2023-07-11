import { ArrowRight } from 'lucide-react'

export function ContactMe() {
  return (
    <a
      href="https://cal.com/gustavo-tassi"
      target="_blank"
      rel="noreferrer"
      className="group flex w-fit items-center justify-center gap-4 rounded-xl border-2 border-zinc-100 px-6 py-3 text-2xl"
    >
      Let&apos;s talk{' '}
      <ArrowRight className="text-pink-600 transition-all group-hover:translate-x-1 group-hover:text-purple-500" />
    </a>
  )
}
