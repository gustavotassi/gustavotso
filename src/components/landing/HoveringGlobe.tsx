'use client'

import Image from 'next/image'
import globeSvg from '@/assets/globe.svg'
import { motion } from 'framer-motion'

export function HoveringGlobe() {
  return (
    <motion.div
      initial={{ translateY: -80, opacity: 0, rotateZ: -4, rotateY: -4 }}
      animate={{ translateY: 0, opacity: 1, rotateZ: 4, rotateY: 4 }}
      transition={{
        duration: 2,
        ease: 'backInOut',
      }}
    >
      <motion.div
        className="flex items-start gap-2"
        initial={{ translateY: -3, rotateZ: -4, rotateY: -4 }}
        animate={{ translateY: 0, rotateZ: 4, rotateY: 4 }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <Image
          className="h-11 w-11 lg:w-14 lg:h-14 invert-90 dark:invert-0"
          src={globeSvg}
          alt="globe icon"
          height={128}
          width={128}
        />
      </motion.div>
    </motion.div>
  )
}
