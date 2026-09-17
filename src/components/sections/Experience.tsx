import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { RoleTag } from '@/components/ui/RoleTag'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { workExperiences } from '@/config'
import type { WorkExperience } from '@/lib/interfaces'
import { cn } from '@/lib/utils'

export function Experience() {
  return (
    <section
      id="experience"
      className="border-line scroll-mt-20 border-t px-6 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading title="Experience" note="Past & present" />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {workExperiences.map((experience, index) => (
            <li
              key={experience.company}
              className="reveal"
              style={
                {
                  '--reveal-delay': `${560 + index * 60}ms`,
                } as React.CSSProperties
              }
            >
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <Card href={experience.link}>
      <header className="flex items-start justify-between gap-4">
        <Image
          src={experience.image}
          alt=""
          width={80}
          height={80}
          className={cn(
            'size-10 rounded-lg object-contain grayscale transition duration-500 group-hover:grayscale-0',
            experience.invertOnLight && 'icon-adapt',
          )}
        />

        {experience.isFreelance && (
          <span className="label border-line text-faint rounded-full border px-2.5 py-1 text-xs">
            Freelance
          </span>
        )}
      </header>

      <h3 className="mt-5 flex items-center gap-2 text-2xl font-medium tracking-tight">
        {experience.company}
        {experience.link && (
          <ArrowUpRight className="text-faint group-hover:text-fg size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </h3>

      <p className="label text-faint mt-2 text-sm">
        {experience.workFrom} — {experience.workTo}
      </p>

      <div className="mt-5 mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
        {experience.roles.map((role) => (
          <RoleTag key={role} role={role} />
        ))}
      </div>

      <footer className="label border-line text-muted mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t pt-5 text-xs">
        <span>{experience.location}</span>
        <span aria-hidden className="text-faint">
          ·
        </span>
        <span className="text-faint">{experience.journeyType}</span>
      </footer>
    </Card>
  )
}
