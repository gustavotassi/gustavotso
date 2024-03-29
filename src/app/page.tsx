import { Experience } from '@/components/experience/Experience'
import { Landing } from '@/components/landing/Landing'
import { Projects } from '@/components/projects/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GUSTAVO TASSI SOUZA - Software Engineer',
  description:
    'My portfolio that I created using React, Next.js and TailwindCSS',
}

export default function Home() {
  return (
    <div>
      <Landing />

      <Projects />

      <Experience />
    </div>
  )
}
