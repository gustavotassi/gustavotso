'use client'

import { motion } from "framer-motion";

export function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="m-auto w-full max-w-7xl place-items-start px-4 pt-36 font-sans lg:pt-52">
      <h1 className="w-fit bg-gradient-to-r from-blue-900 to-blue-700 bg-[length:100%_10%] bg-bottom bg-no-repeat px-2 font-alt text-3xl lg:text-4xl font-bold leading-tight">
        Projects
      </h1>
      <p className="pt-2 text-zinc-400 lg:text-lg">What I&apos;ve done so far</p>

      <div className="flex flex-col items-center justify-center py-32">
        <p className="text-sm font-bold uppercase tracking-widest text-zinc-700">
          Soon <br />
          Soon <br />
          Soon <br />
        </p>
      </div>
    </motion.div>
  )
}
