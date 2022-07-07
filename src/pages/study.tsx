import React from 'react'
import Image from 'next/image'
import { PageBanner } from '@/components/PageBanner'
import { AppLayout } from '@/components/layouts/AppLayout'
import { FAQPreview } from '@/components/FAQPreview'
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

const studyCardsContent = [
  {
    content:
      'Token engineering design starts with understanding the desired goals of a given system, and then working backwards to determine the properties and structure required to achieve those goals. This is carried out in a baseline assessment, including system mapping & canvassing as described by Stephen Young in this article on the token engineering process. The good folks at the Platform Design Toolkit have a suite of tools that are useful for this stage of the design process.',
    title: 'Define system goals & properties'
  },
  {
    content:
      'Understanding the states, mechanisms and behaviors of your system and the agents interacting with it, the next step is to map your system flows into a differential specification diagram, which will inform your cadCAD wiring in the next step of the process. The differential specification diagram takes into account system policies, agent behaviors, and exogenous processes (i.e. random external events), and the complex interaction patterns existing between them.',
    title: 'Model System & Identify necessary Mechanisms'
  },
  {
    content:
      'Understanding the states, mechanisms and behaviors of your system and the agents interacting with it, the next step is to map your system flows into a differential specification diagram, which will inform your cadCAD wiring in the next step of the process. The differential specification diagram takes into account system policies, agent behaviors, and exogenous processes (i.e. random external events), and the complex interaction patterns existing between them.',
    title:
      'Draw system flow and state transition into a differential specification'
  },
  {
    content:
      'Understanding the states, mechanisms and behaviors of your system and the agents interacting with it, the next step is to map your system flows into a differential specification diagram, which will inform your cadCAD wiring in the next step of the process. The differential specification diagram takes into account system policies, agent behaviors, and exogenous processes (i.e. random external events), and the complex interaction patterns existing between them.',
    title: 'Simulate & Test your System'
  },
  {
    content:
      'Understanding the states, mechanisms and behaviors of your system and the agents interacting with it, the next step is to map your system flows into a differential specification diagram, which will inform your cadCAD wiring in the next step of the process. The differential specification diagram takes into account system policies, agent behaviors, and exogenous processes (i.e. random external events), and the complex interaction patterns existing between them.',
    title: 'Test IRL & Iterate your model'
  }
]

const Study: NextPageWithLayout = () => {
  return (
    <>
      <PageBanner title="Study at TE Academy" />
      <div className="absolute">
        <Image height="1030" src="/block_bg.svg" width="713" />
      </div>
      <div className="grid grid-cols-2 pt-40 px-20">
        <div>
          <Image height="637" src="/study_image.svg" width="787" />
        </div>
        <div className="flex flex-col gap-y-6 justify-end">
          <span className="text-lg text-te-purple font-bai font-bold">
            Welcome to the Token Engineering community
          </span>
          <span className="text-6xl font-bai font-bold">
            So what is &quot;token engineering?&quot;
          </span>
          <span className="text-gray-400 font-open">
            Token engineering is a crossdisciplinary field that draws from
            established practices in systems, electrical, robotics &amp;
            controls engineering, and more. It also draws from fields as diverse
            as Behavioral &amp;Ecological Economics, Operations Research, AI
            &amp; Optimization, as explored by Shermin Voshmgir &amp; Michael
            Zargham in this paper on the Foundations of Cryptoeconomic Systems.
            It is a methodology that goes all the way from ideation to design,
            modeling, simulation, testing, deployment, and maintenance.
            <br />
            <br />
            It&apos;s the process of building cryptoeconomic systems that work,
            and keep working. Just like other public infrastructure like bridges
            and power grids, our future economic systems also need to be
            rigorously designed to be reliable under widely varying conditions.
            The goal of token engineering is to design and create tokeneconomic
            systems that are robust against exploits, unintended consequences
            and cascade failures, in order to protect and empower users.
          </span>
        </div>
      </div>
      <div className="relative bg-white z-10 pt-36 px-20">
        <div className="text-5xl text-center font-bai font-bold">
          How does it work?
        </div>
        <div className="my-28 flex flex-wrap gap-6 justify-center">
          {studyCardsContent.map((card, index) => (
            <StudyContentCard
              key={card.title}
              content={card.content}
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
        src="/study_banner.svg"
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
