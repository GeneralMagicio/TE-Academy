import React from 'react'
import Image from 'next/image'

interface ISelect {
  name: string
  options: any[]
  title: string
}

export function Select({ name, options, title }: ISelect) {
  return (
    <div className="flex flex-col-reverse gap-y-3">
      <div className="relative max-w-md">
        <div className="h-0 relative top-[35px] -left-8 transform rotate-180 opacity-50">
          <Image height="16" src="/arrow.svg" width="16" />
        </div>
        <select
          className="relative appearance-none h-[50px] w-full pl-8 bg-transparent border border-gray-400 rounded-lg focus:border-te-purple text-gray-400"
          id={name}>
          {options.map((option) => (
            <option key={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
      <label className="text-gray-400 font-bai font-medium" htmlFor={name}>
        {title}
      </label>
    </div>
  )
}
