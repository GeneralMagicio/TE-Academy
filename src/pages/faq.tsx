import React, { useState } from 'react'
import Image from 'next/image'
import { PageBanner } from '@/components/PageBanner'
import { Summary, SummaryOption } from '@/components/summary'
import { Section } from '@/components/Section'
import { AppLayout } from '@/components/layouts/AppLayout'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const summaryContent: SummaryOption[] = [
  { title: 'Signing up and account creation' },
  { title: 'Purchasing courses and Payments' },
  { title: 'Receiving Certifications and Badges' },
  { title: 'Connecting my Wallet' },
  { title: 'Account Management' }
]

const faqContent = [
  { content: '', title: 'Can I use The courses in open-source projects?' },
  { content: '', title: 'Where can I download files?' },
  { content: '', title: 'Can I use TE academy for commercial purposes?' },
  { content: '', title: 'What about browser support?' }
]

const FAQ: NextPageWithLayout = () => {
  const [position, setPosition] = useState<number>(0)

  return (
    <>
      <PageBanner title="Frequently Asked Questions" />
      <div className="pb-16 pt-36 px-32 grid grid-cols-2 gap-y-20">
        <div className="col-start-2 col-end-3 h-12 max-w-sm pl-8 border border-gray-400 rounded-lg flex gap-2">
          <Image height="16" src="/magnifyingGlass.svg" width="16" />
          <input
            className="bg-transparent w-full text-xs font-open"
            placeholder="Search FAQ"
          />
        </div>
        <Summary
          currentPosition={position}
          items={summaryContent}
          setPosition={setPosition}
        />
        <div className="flex flex-col gap-y-6">
          {faqContent.map((item) => (
            <Section
              key={item.title}
              content={item.content}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default FAQ
