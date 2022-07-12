import { Section } from './Section'
import React from 'react'
import Image from 'next/image'
import { attributes } from '@/content/faq.md'

export function FAQPreview() {
  const { faqContent } = attributes

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
        {console.log(faqContent)}
        {faqContent[0].faqQuestions.map((elem: any, index: number) => (
          <Section
            key={elem.question}
            content={elem.answer}
            position={index}
            title={elem.question}
          />
        ))}
      </div>
    </div>
  )
}
