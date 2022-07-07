import { Section } from './Section'
import React from 'react'
import Image from 'next/image'

const studySectionContent = [
  { content: '', title: 'Can I use The courses in open-source projects?' },
  { content: '', title: 'Where can I download files?' },
  { content: '', title: 'Can I use TE academy for commercial purposes?' },
  { content: '', title: 'What about browser support?' }
]

export function FAQPreview() {
  return (
    <div className="h-[600px] grid grid-cols-2 justify-center items-center pl-28 pr-14 bg-white">
      <div className="max-w-lg flex flex-col gap-y-4">
        <span className="text-6xl font-bai font-bold">
          Frequently Asked Questions
        </span>
        <span className="text-gray-400 font-bai font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus orci
          laoreet lorem nibh fringilla fusce gravida. Elementum duis nulla a
          mauris at morbi.
        </span>
        <div className="flex gap-x-4 items-center cursor-pointer">
          <span className="text-te-purple font-bai font-medium">
            Find more answers
          </span>
          <Image height="36" src="/arrow_button.svg" width="36" />
        </div>
      </div>
      <div>
        {studySectionContent.map((elem) => (
          <Section key={elem.title} content={elem.content} title={elem.title} />
        ))}
      </div>
    </div>
  )
}
