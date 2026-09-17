import { FileUser } from 'lucide-react'
import { site } from '@/config'

export function ResumeButton() {
  return (
    <a
      href={site.resumeUrl}
      target="_blank"
      rel="noreferrer"
      title="Open resume (PDF) in a new tab"
      className="label border-line text-muted hover:border-fg/30 hover:bg-elevated hover:text-fg flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs transition-colors duration-300"
    >
      <FileUser className="size-4" />
      Resume
    </a>
  )
}
