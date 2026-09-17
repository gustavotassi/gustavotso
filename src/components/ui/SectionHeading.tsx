interface SectionHeadingProps {
  title: string
  note: string
}

export function SectionHeading({ title, note }: SectionHeadingProps) {
  return (
    <div className="reveal flex items-baseline gap-4">
      <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className="label text-faint hidden text-sm sm:block">{note}</span>
    </div>
  )
}
