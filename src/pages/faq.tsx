import React, { useState } from 'react'
import Image from 'next/image'
import { attributes } from '@/content/faq.md'
import { PageBanner } from '@/components/PageBanner'
import { Summary } from '@/components/summary'
import { Section } from '@/components/Section'
import { AppLayout } from '@/components/layouts/AppLayout'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const FAQ: NextPageWithLayout = () => {
  const [position, setPosition] = useState<number>(0)
  const { faqContent, mainTitle } = attributes

  return (
    <>
      <PageBanner title={mainTitle} />
      <div className="pb-16 pt-36 px-32 grid grid-cols-2 gap-y-20">
        <div className="col-start-2 col-end-3 h-12 max-w-sm pl-8 border border-gray-400 rounded-lg flex gap-2">
          <Image height="16" src="/icons/magnifyingGlass.svg" width="16" />
          <input
            className="bg-transparent w-full text-xs font-open"
            placeholder="Search FAQ"
          />
        </div>
        <Summary
          currentPosition={position}
          items={faqContent}
          setPosition={setPosition}
        />
        <div className="flex flex-col gap-y-6">
          {faqContent.map((item: any) => {
            const { faqQuestions } = item
            return faqQuestions?.map((question: any, index: number) => (
              <Section
                key={question.question}
                content={question.answer}
                position={index}
                title={question.question}
              />
            ))
          })}
        </div>
      </div>
    </>
  )
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default FAQ
