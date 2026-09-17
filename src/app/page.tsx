import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
