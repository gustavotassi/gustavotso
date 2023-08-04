'use client'

import { workExperiences } from '@/config'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { ExperienceRole } from './ExperienceRole'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Experience() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="m-auto w-full place-items-start px-4 font-sans">
      <h1 className="w-fit bg-gradient-to-r from-blue-900 to-blue-700 bg-[length:100%_10%] bg-bottom bg-no-repeat px-2 font-alt text-3xl lg:text-4xl font-bold leading-tight">
        Experience
      </h1>
      <p className="pt-2 text-zinc-400 lg:text-lg">Past roles and responsibilities</p>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:my-8">
        {workExperiences.map((experience) => (
          <div
            key={experience.company}
            className="my-8 lg:my-0 flex flex-col gap-6 rounded-xl border-2 border-zinc-800 p-6 lg:min-w-[430px]"
          >
            {/** Roles */}
            <header className="flex flex-wrap items-center gap-2">
              {experience.roles.map((role) => (
                <ExperienceRole key={role} role={role} />
              ))}
            </header>

            {/** Company name */}
            <section>
              <div className="mb-2 h-10 w-10 rounded-full">
                <Image
                  className="rounded-full"
                  src={experience.image}
                  alt="company image"
                  height={256}
                  width={256}
                />
              </div>
              <h1 className="flex gap-4 font-alt text-3xl leading-tight">
                {experience.company}

                {experience.isFreelance && (
                  <div className="h-fit rounded-full bg-red-800 px-2 font-sans text-sm">
                    Freelance
                  </div>
                )}
              </h1>
            </section>

            {/** Time worked there */}
            <section className="flex w-full items-center gap-4 text-zinc-500">
              <Calendar />
              <p>
                {experience.workFrom} - {experience.workTo}
              </p>
            </section>

            {/** Location and journey type */}
            <section className="grid grid-cols-2 grid-rows-1 text-zinc-500">
              <div className="col-span-1 row-span-1">
                <div className="flex w-full items-center gap-4">
                  <MapPin />
                  <p>{experience.location}</p>
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <div className="flex w-full items-center gap-4">
                  <Clock />
                  <p>{experience.journeyType}</p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
