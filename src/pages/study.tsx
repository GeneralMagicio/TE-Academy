import React from 'react'
import Image from 'next/image'
import { PageBanner } from '@/components/PageBanner'
import { AppLayout } from '@/components/layouts/AppLayout'
import { FAQPreview } from '@/components/FAQPreview'
import { attributes } from '@/content/StudyPage.md'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

interface IStudyContentCard {
  content: string
  number: number
  title: string
}

const StudyContentCard = ({ content, number, title }: IStudyContentCard) => {
  return (
    <div className="h-[572px] max-w-sm w-full flex flex-col gap-y-4 bg-gray-100/60 rounded-xl py-6 px-8">
      <div className="text-3xl text-te-purple font-bai font-bold">
        0{number}.
      </div>
      <div className="text-2xl font-bai font-bold">{title}</div>
      <div className="mt-auto p-6 bg-gray-200 rounded-xl">
        <span className="text-sm text-gray-400 font-open">{content}</span>
      </div>
    </div>
  )
}

const Study: NextPageWithLayout = () => {
  const { body, mainTitle, stepsTitle, studySteps, studyTitle, subtitle } =
    attributes
  return (
    <>
      <PageBanner title={mainTitle} />
      <div className="absolute">
        <Image height="1030" src="/block_bg.svg" width="713" />
      </div>
      <div className="grid grid-cols-2 pt-40 px-20">
        <div>
          <Image height="637" src="/assets/study_image.svg" width="787" />
        </div>
        <div className="flex flex-col gap-y-6 justify-end">
          <span className="text-lg text-te-purple font-bai font-bold">
            {subtitle}
          </span>
          <span className="text-6xl font-bai font-bold">{studyTitle}</span>
          <span className="text-gray-400 font-open">{body}</span>
        </div>
      </div>
      <div className="relative bg-white z-10 pt-36 px-20">
        <div className="text-5xl text-center font-bai font-bold">
          {stepsTitle}
        </div>
        <div className="max-w-7xl mx-auto my-28 flex flex-wrap gap-6 justify-center">
          {studySteps.map((card: any, index: number) => (
            <StudyContentCard
              key={card.title}
              content={card.body}
              number={index + 1}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <Image
        className="drop-shadow-2xl"
        height="297"
        layout="responsive"
        src="/assets/study_banner.svg"
        width="1192"
      />
      <FAQPreview />
    </>
  )
}

Study.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Study
