import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Marquee } from '@/components/Marquee'
import { FAQPreview } from '@/components/FAQPreview'
import { attributes } from '@/content/LandingPage.md'
import { Button } from '@/components/buttons/Button'
import { CourseCard } from '@/components/cards/CourseCard'
import { AppLayout } from '@/components/layouts/AppLayout'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

interface IBadge {
  content: string
  img?: string
  title: string
}

const Badge = ({ content, img, title }: IBadge) => {
  return (
    <div className="max-w-xs flex flex-col gap-y-5 justify-center items-center">
      <div className="h-[205px] w-[205px] bg-[#FAEFFF] rounded-full flex items-center justify-center">
        <Image height="100" src={`/${img}`} width="100" />
      </div>
      <span className="my-auto text-2xl text-center font-bai font-bold">
        {title}
      </span>
      <span className="text-sm text-gray-400 text-center font-open">
        {content}
      </span>
    </div>
  )
}

const partners = [
  { height: '52', src: '/logos/partners/apple.svg', width: '45' },
  { height: '32', src: '/logos/partners/jeep.svg', width: '80' },
  { height: '40', src: '/logos/partners/google_plus.svg', width: '65' },
  { height: '28', src: '/logos/partners/nike.svg', width: '81' },
  { height: '33', src: '/logos/partners/tripadvisor.svg', width: '53' },
  { height: '45', src: '/logos/partners/github.svg', width: '45' }
]

const Home: NextPageWithLayout = () => {
  const [test, setTest] = useState<number>(0)
  return (
    <div className="w-full bg-[url('/assets/gray_bg.png')]">
      <div className="grid grid-cols-2 pb-28 pt-[230px] px-28">
        <div className="flex flex-col gap-y-9">
          <span className="text-6xl font-bai font-bold">
            {attributes.mainTitle}
          </span>
          <span className="text-gray-400 text-2xl font-bai">
            {attributes.subtitle}
          </span>
          <div className="h-16 w-48">
            <Button label="Get Started" />
          </div>
          <span className="text-xl text-te-purple font-bai font-bold">
            {attributes.partnersTitle}
          </span>
          <div className="flex items-end gap-x-8">
            {partners.map((partner) => (
              <Image
                key={`${partner.height}x${partner.width}`}
                height={partner.height}
                src={partner.src}
                width={partner.width}
              />
            ))}
          </div>
        </div>
        <div>
          <Image
            height="680"
            layout="responsive"
            src={`/${attributes.landingBanner}`}
            width="815"
          />
        </div>
      </div>
      <div className="relative bg-te-dark px-28 py-24 overflow-hidden">
        <div className="absolute left-0 -top-32">
          <Image height="1200" src="/assets/block_bg.svg" width="720" />
        </div>
        <div className="grid grid-cols-2 justify-center items-center pb-24">
          <div className="flex flex-col gap-y-4">
            <span className="text-7xl text-white font-bai font-bold">
              {attributes.coursesTitle}
            </span>
            <span className="text-2xl text-white font-bai">
              {attributes.teFundamentalsSubtitle}
            </span>
          </div>
          <div className="h-16 w-48 mx-auto">
            <Button reverse label="Explore Courses" />
          </div>
        </div>
        <div className="relative">
          {test > 0 && (
            <div
              className="absolute top-[35%] z-10 transform rotate-180"
              onClick={() => setTest((previousTest) => previousTest - 1)}>
              <Image height="80" src="/white_arrow_button.svg" width="80" />
            </div>
          )}
          <motion.div
            animate={{ left: `-${test * 376}px` }}
            className="relative flex gap-x-6 py-6"
            initial={false}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </motion.div>
          {test < 7 && (
            <div
              className="absolute top-[35%] right-0 z-10"
              onClick={() => setTest((previousTest) => previousTest + 1)}>
              <Image height="80" src="/white_arrow_button.svg" width="80" />
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#FDF8FF] py-32">
        <div className="flex flex-col gap-y-4 justify-center items-center max-w-2xl mx-auto">
          <span className="text-5xl text-center font-bai font-bold">
            {attributes.learnTitle}
          </span>
          <span className="text-2xl text-center font-bai">
            {attributes.learnSubtitle}
          </span>
        </div>
        <div className="mt-16 flex gap-x-16 justify-center">
          {attributes.learnContent.map((badge: any) => (
            <Badge
              key={badge.title}
              content={badge.subtitle}
              img={badge.badgeIcon}
              title={badge.title}
            />
          ))}
        </div>
      </div>
      <div className="bg-white px-28 py-32">
        <div className="flex flex-col gap-y-4 justify-center items-center max-w-2xl mx-auto pb-24">
          <span className="text-5xl text-center font-bai font-bold">
            {attributes.liveCoursesTitle}
          </span>
          <span className="text-2xl text-center font-bai">
            {attributes.liveCoursesSubtitle}
          </span>
        </div>
        <div className="relative">
          {test > 0 && (
            <div
              className="absolute top-[35%] z-10 transform rotate-180"
              onClick={() => setTest((previousTest) => previousTest - 1)}>
              <Image height="80" src="/white_arrow_button.svg" width="80" />
            </div>
          )}
          <motion.div
            animate={{ left: `-${test * 376}px` }}
            className="relative flex gap-x-6 py-6"
            initial={false}>
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
            <CourseCard type="Virtual Live Sessions" />
          </motion.div>
          {test < 7 && (
            <div
              className="absolute top-[35%] right-0 z-10"
              onClick={() => setTest((previousTest) => previousTest + 1)}>
              <Image height="80" src="/white_arrow_button.svg" width="80" />
            </div>
          )}
        </div>
        <div className="h-16 w-48 mx-auto">
          <Button label="See Live Courses" />
        </div>
      </div>
      <Marquee />
      <FAQPreview />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout navBarIsTransparent>{page}</AppLayout>
}

export default Home
