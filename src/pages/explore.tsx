import React from 'react'
import Image from 'next/image'
import { FAQPreview } from '@/components/FAQPreview'
import { PageBanner } from '@/components/PageBanner'
import { CourseCard } from '@/components/cards/CourseCard'
import { Select } from '@/components/inputs/Select'
import { AppLayout } from '@/components/layouts/AppLayout'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const filterSelectOptions = [
  { name: 'All courses' },
  { name: 'TE fundamentals' },
  { name: 'Live courses' }
]

const ExploreCourses: NextPageWithLayout = () => {
  return (
    <>
      <PageBanner title="Explore Courses" />
      <div className="pt-28 px-36 grid grid-cols-2 gap-y-36">
        <span className="text-5xl font-bai font-bold">Our Courses</span>
        <div className="flex gap-x-4 justify-center items-center">
          <Select name="courses" options={filterSelectOptions} title="" />
          <div className="col-start-2 col-end-3 h-[50px] max-w-sm pl-8 border border-gray-400 rounded-lg flex gap-2">
            <Image height="16" src="/icons/magnifyingGlass.svg" width="16" />
            <input
              className="bg-transparent w-full font-open"
              placeholder="Search Courses"
            />
          </div>
        </div>
        <div className="col-start-1 col-end-3 flex flex-wrap gap-10 justify-center items-center">
          <CourseCard />
          <CourseCard />
          <CourseCard type="Virtual Live Sessions" />
          <CourseCard type="Virtual Live Sessions" />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <FAQPreview />
    </>
  )
}

ExploreCourses.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default ExploreCourses
