import React from 'react'

interface ITextField {
  name: string
  placeholder?: string
  title: string
}

export function TextField({ name, placeholder, title }: ITextField) {
  return (
    <div className="flex flex-col-reverse gap-y-3">
      <input
        className="peer h-[50px] max-w-md pl-8 bg-transparent border border-gray-400 rounded-lg focus:border-te-purple"
        id={name}
        placeholder={placeholder}
      />
      <label
        className="text-gray-400 font-bai font-medium peer-focus:text-te-purple"
        htmlFor={name}>
        {title}
      </label>
    </div>
  )
}
