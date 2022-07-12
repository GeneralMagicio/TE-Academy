import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

interface ICourseCard {
  img?: string
  type: 'Online Course' | 'Virtual Live Sessions'
}

const badgeColors = {
  'Online Course': 'bg-te-dark',
  'Virtual Live Sessions': 'bg-te-purple'
}

export const CourseCard = ({ img, type = 'Online Course' }: ICourseCard) => {
  return (
    <div className="h-[518px] min-w-[369px] max-w-[369px] bg-gradient-to-br from-te-lblue to-te-green rounded-2xl flex justify-center items-center drop-shadow-lg">
      <div className="h-[516px] min-w-[367px] max-w-[367px] bg-white rounded-2xl px-6 py-7">
        <div className="rounded-2xl">
          <Image
            height="210"
            layout="responsive"
            src="/assets/course_card_placeholder.png"
            width="320"
          />
        </div>
        <div className="my-6 flex flex-col gap-y-2">
          <span className="text-xl font-bai font-bold">
            Introduction to cryptoeconomic system
          </span>
          <span className="text-sm text-gray-400 font-open font-semibold">
            TE Fundamentals Part 1
          </span>
        </div>
        <div className="mb-3 border-t-[0.4px]" />
        <div
          className={classNames(
            'w-fit py-3 px-4 rounded-lg mb-3',
            badgeColors[type]
          )}>
          <span className="text-sm text-white font-bai font-bold">{type}</span>
        </div>
        <div className="flex">
          <div className="w-2/5 flex items-center gap-2">
            <div className="h-[32px] w-[32px] rounded-full">
              <Image
                height="32"
                src={img || '/logos/TE/black.svg'}
                width="32"
              />
            </div>
            <span className="text-xs font-open font-semibold">TE Academy</span>
          </div>
          <div className="w-[1px] border-l-[0.4px]" />
          <div className="w-3/5 flex justify-between items-center gap-2 ml-2">
            <Image height="16" src="/icons/hat.svg" width="16" />
            <span className="text-xs font-open font-semibold mr-auto">
              20 enrolled
            </span>
            <Image height="44" src="/arrow_button.svg" width="44" />
          </div>
        </div>
      </div>
    </div>
  )
}
