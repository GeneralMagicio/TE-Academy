import React from 'react'

interface ITextArea {
  name: string
  placeholder?: string
  title: string
}

export function TextArea({ name, placeholder, title }: ITextArea) {
  return (
    <div className="flex flex-col-reverse gap-y-3">
      <textarea
        className="peer max-w-md py-4 px-8 bg-transparent border border-gray-400 rounded-lg focus:border-te-purple"
        id={name}
        maxLength={250}
        placeholder={placeholder}
        rows={6}
      />
      <label
        className="text-gray-400 font-bai font-medium peer-focus:text-te-purple"
        htmlFor={name}>
        {title}
      </label>
    </div>
  )
}
