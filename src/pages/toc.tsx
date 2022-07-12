import React, { useState } from 'react'
import { PageBanner } from '@/components/PageBanner'
import {
  Summary,
  SummaryContent,
  SummaryHeader,
  SummarySection
} from '@/components/summary'
import { AppLayout } from '@/components/layouts/AppLayout'
import { attributes } from '@/content/TermsConditionsPage.md'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const TermsConditions: NextPageWithLayout = () => {
  const { mainTitle, termsConditionsContent } = attributes
  const [position, setPosition] = useState<number>(0)

  return (
    <>
      <PageBanner title={mainTitle} />
      <div className="pb-16 pt-36 px-32 grid grid-cols-2">
        <Summary
          href
          currentPosition={position}
          items={termsConditionsContent}
          setPosition={setPosition}
        />
        <div className="flex flex-col gap-y-6">
          {termsConditionsContent.map((item: any, index: number) => (
            <SummarySection
              key={item.name}
              position={index}
              setPosition={setPosition}>
              <SummaryHeader
                sectionName={item.name.replace(/\s/g, '_').toLowerCase()}>
                {item.title}
              </SummaryHeader>
              <SummaryContent>{item.body}</SummaryContent>
            </SummarySection>
          ))}
        </div>
      </div>
    </>
  )
}

TermsConditions.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default TermsConditions
