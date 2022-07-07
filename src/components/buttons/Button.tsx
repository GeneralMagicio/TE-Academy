import React from 'react'
import className from 'classnames'

interface IButton {
  label: string
  reverse?: boolean
}

export function Button({ label, reverse }: IButton) {
  return (
    <button
      className={className(
        'h-full w-full rounded-lg',
        reverse ? 'bg-white' : 'bg-te-dark'
      )}>
      <span
        className={className(
          'text-sm font-bai font-bold',
          reverse ? 'text-te-dark' : 'text-white'
        )}>
        {label}
      </span>
    </button>
  )
}
