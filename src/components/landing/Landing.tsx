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
            Gustavo T. Souza
          </h1>

          <p className="text-zinc-400 lg:text-xl">
            Where skillful coding meets perfection.{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-1 font-bold text-white">
              Worldwide.
            </span>
          </p>
        </div>

        <motion.div
          initial={{ translateY: -8, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-12 md:justify-between"
        >
          <Social />


          {/* <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <h1 className="text-gray-500 w-fit bg-gradient-to-r from-green-700/60 to-green-500/60 bg-[length:100%_10%] bg-bottom bg-no-repeat px-2 font-alt text-2xl font-bold leading-tight">
                #OpenToWork
              </h1>
              <h1 className="text-gray-400 w-fit bg-gradient-to-r from-green-500 to-green-700 bg-[length:100%_10%] bg-bottom bg-no-repeat px-2 font-alt text-2xl font-bold leading-tight">
                #OpenToWork
              </h1>
              <h1 className="text-gray-300 w-fit bg-gradient-to-r from-green-700 to-green-500 bg-[length:100%_10%] bg-bottom bg-no-repeat px-2 font-alt text-2xl font-bold leading-tight">
                #OpenToWork
              </h1>
            </div>

            <motion.div
              initial={{ translateX: 16, rotateZ: 30 }}
              animate={{ translateX: 0, rotateZ: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              className="text-3xl"
            >
              👈
            </motion.div>
          </div> */}

          <ContactMe />
        </motion.div>
      </motion.div>
    </div>
  )
}
