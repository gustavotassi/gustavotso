'use client'

import { motion } from 'framer-motion'
import { ContactMe } from './ContactMe'
import { HoveringGlobe } from './HoveringGlobe'
import { Social } from './Social'

export function Landing() {
  return (
    <div className="m-auto w-full max-w-7xl place-items-start px-4 pt-28 lg:pt-48 font-sans">
      <motion.div initial={{ translateY: -8, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} className="flex flex-col gap-12 md:flex-row lg:gap-44">
        <div className="flex flex-col gap-12 md:gap-24">
          <div className="flex items-center justify-between">
            <p className="text-zinc-400 lg:text-xl">Full-stack Software Engineer</p>

            <HoveringGlobe />
          </div>
          <h1 className="font-alt text-6xl font-bold leading-tight lg:text-7xl">
            Gustavo Tassi
          </h1>

          <p className="text-zinc-400 lg:text-xl">
            Where skillful coding meets perfection.{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-1 font-bold text-white">
              Worldwide.
            </span>
          </p>
        </div>

        <motion.div initial={{ translateY: -8, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col gap-12 md:justify-between">
          <Social />

          <ContactMe />
        </motion.div>
      </motion.div>
    </div>
  )
}
