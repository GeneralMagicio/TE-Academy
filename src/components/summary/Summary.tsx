import React, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  focused: { opacity: 1 },
  nonFocused: { opacity: 0.4 }
}

export interface SummaryOption {
  name: string
}

interface ISummary {
  currentPosition: number
  items: SummaryOption[]
  setPosition: Dispatch<SetStateAction<number>>
  href?: boolean
}

export function Summary({
  currentPosition,
  href,
  items,
  setPosition
}: ISummary) {
  return (
    <div className="sticky top-36 h-fit w-3/5 flex gap-x-4">
      <div className="border-l border-gray-100">
        <motion.div
          layout
          animate={{ top: `${currentPosition * 56}px` }}
          className="relative left-[-4.5px] top-0 h-8 w-2 bg-gray-700 rounded"
          initial={false}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="py-1 flex flex-col gap-y-8">
        {items.map((item, index) =>
          href ? (
            <Link
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s/g, '_')}`}>
              <motion.span
                animate={currentPosition === index ? 'focused' : 'nonFocused'}
                initial="focused"
                transition={{ duration: 0.6 }}
                variants={variants}
                onClick={() => setPosition(index)}>
                {item.name}
              </motion.span>
            </Link>
          ) : (
            <motion.span
              animate={currentPosition === index ? 'focused' : 'nonFocused'}
              initial="focused"
              transition={{ duration: 0.6 }}
              variants={variants}
              onClick={() => setPosition(index)}>
              {item.name}
            </motion.span>
          )
        )}
      </div>
    </div>
  )
}
