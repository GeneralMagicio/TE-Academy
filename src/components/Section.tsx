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

interface ISection {
  content: React.ReactNode
  position: number
  title: string
}

export function Section({ content, position, title }: ISection) {
  const [open, setOpen] = useState<boolean>(position === 0)
  return (
    <>
      <div className="flex items-center gap-x-2.5 border-b pb-4 mb-4 ">
        <Image height="16" src="/icons/questionMark.svg" width="16" />
        <div className="text-lg font-bai font-bold">{title}</div>
        <motion.div
          animate={open ? 'show' : 'hide'}
          className="cursor-pointer ml-auto"
          initial="show"
          transition={{ duration: 0.6 }}
          variants={variants}
          onClick={() => setOpen(!open)}>
          <Image height="16" src="/icons/arrow.svg" width="16" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="text-gray-400 font-open"
            animate={{
              opacity: 1,
              height: 'fit-content',
              marginBottom: '16px',
              transition: {
                ease: 'easeInOut',
                duration: 0.6,
                opacity: {
                  delay: 0.3,
                  duration: 0.6
                }
              }
            }}
            exit={{
              opacity: 0,
              height: '0px',
              marginBottom: '0px',
              transition: {
                ease: 'easeInOut',
                duration: 0.6,
                height: {
                  delay: 0.3,
                  duration: 0.6
                }
              }
            }}
            initial={{
              opacity: 0,
              height: '0px',
              marginBottom: '0px'
            }}>
            {content}
            <hr className="mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
