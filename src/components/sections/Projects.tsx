import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/config'
import type { Project } from '@/lib/interfaces'

export function Projects() {
  return (
    <section
      id="projects"
      className="border-line scroll-mt-20 border-t px-6 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          title="Projects"
          note="Things I've shipped"
        />

        <ul className="mt-12 flex flex-col gap-4">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className="reveal"
              style={
                { '--reveal-delay': `${index * 80}ms` } as React.CSSProperties
              }
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card href={project.link} className="sm:flex-row sm:items-start sm:gap-10">
      <div className="sm:flex-1">
        <h3 className="flex items-center gap-2 text-2xl font-medium tracking-tight sm:text-3xl">
          {project.name}
          {project.link && (
            <ArrowUpRight className="text-faint group-hover:text-fg size-5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </h3>

        <p className="text-muted mt-4 max-w-xl font-serif text-lg leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-1.5 sm:flex-col sm:items-end sm:gap-2">
        <span className="label text-faint text-sm">{project.period}</span>

        {project.tags.map((tag) => (
          <span key={tag} className="label text-muted text-xs">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}
