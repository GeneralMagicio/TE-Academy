import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  hide: {
    rotate: 180
  },
  show: {
    rotate: 0
  }
}

const textTransition = (delay: number) => ({
  ease: 'easeInOut',
  duration: 0.6,
  opacity: {
    delay,
    duration: 0.6
  }
})

interface ISection {
  content: React.ReactNode
  title: string
}

export function Section({ content, title }: ISection) {
  const [test, setTest] = useState<boolean>(true)
  return (
    <div>
      <div className="mb-4 flex items-center gap-x-2.5">
        <Image height="16" src="/questionMark.svg" width="16" />
        <div className="text-lg font-bai font-bold">{title}</div>
        <motion.div
          animate={test ? 'show' : 'hide'}
          className="cursor-pointer ml-auto"
          initial="show"
          transition={{ duration: 0.6 }}
          variants={variants}
          onClick={() => setTest(!test)}>
          <Image height="16" src="/arrow.svg" width="16" />
        </motion.div>
      </div>
      <AnimatePresence>
        {test && (
          <motion.div
            className="text-gray-400 font-open"
            initial={{ opacity: 0, height: '0px' }}
            animate={{
              opacity: 1,
              height: 'fit-content',
              transition: textTransition(0.3)
            }}
            exit={{
              opacity: 0,
              height: '0px',
              transition: textTransition(0.6)
            }}>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
