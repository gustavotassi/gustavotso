'use client'

import Image from 'next/image'
import globeSvg from '@/assets/globe.svg'
import { motion } from 'framer-motion'

export function HoveringGlobe() {
  return (
    <motion.div
      className="flex items-start gap-2"
      initial={{ translateY: -3, rotateZ: -4, rotateY: -4 }}
      animate={{ translateY: 3, rotateZ: 4, rotateY: 4 }}
      transition={{
        repeat: Infinity,
        duration: 1.6,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    >
      <Image
        className="invert-90 dark:invert-0"
        src={globeSvg}
        alt="globe icon"
        height={42}
        width={42}
      />
    </motion.div>
  )
}
