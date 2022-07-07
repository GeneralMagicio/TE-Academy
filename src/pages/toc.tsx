import React, { useState } from 'react'
import { PageBanner } from '@/components/PageBanner'
import {
  Summary,
  SummaryContent,
  SummaryHeader,
  SummaryOption,
  SummarySection
} from '@/components/summary'
import { AppLayout } from '@/components/layouts/AppLayout'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const summaryContent: SummaryOption[] = [
  { href: '#terms', title: 'Terms & Conditions' },
  { href: '#abide', title: 'Terms we abide by' },
  { href: '#adopt', title: 'Conditions we adopt' }
]

const TermsConditions: NextPageWithLayout = () => {
  const [position, setPosition] = useState<number>(0)

  return (
    <>
      <PageBanner title="Terms and Conditions" />
      <div className="pb-16 pt-36 px-32 grid grid-cols-2">
        <Summary
          currentPosition={position}
          items={summaryContent}
          setPosition={setPosition}
        />
        <div className="flex flex-col gap-y-6">
          <SummarySection position={0} setPosition={setPosition}>
            <SummaryHeader sectionName="terms">
              The terms and conditions will help you better understand how we
              serve you
            </SummaryHeader>
            <SummaryContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              ultrices turpis ac mattis sapien. Pharetra id lorem at ut vitae,
              lorem commodo. Fringilla justo, dui enim non nec convallis ac non.
              Viverra cum proin dictum egestas pharetra et ipsum condimentum. Ut
              in laoreet ultrices porta commodo enim. Tortor in erat nunc quam
              nullam. Eget elit magna neque, urna. Pretium duis id senectus ut
              varius. Id a porttitor lacus, mauris, commodo. Elit, arcu
              scelerisque mi, tellus. Ut consectetur eleifend sit in. Ipsum
              dictum at molestie ac odio. Pulvinar vel proin purus dui nunc
              neque enim magna enim. Leo gravida vehicula orci, felis quis
              elementum urna vitae pharetra. Risus neque id etiam ullamcorper
              adipiscing tellus. Blandit a dictum lorem facilisis. Nullam
              malesuada quisque nec eget tempus elementum nascetur aenean.
              Aliquet tempor amet pulvinar dictum. Est integer amet nascetur sem
              urna velit sed. Cursus blandit lorem lectus orci, lacus sit.
              Imperdiet scelerisque et quis dictumst sed quam. Accumsan quis
              nunc donec sagittis, dui, tincidunt enim. Purus praesent diam
              morbi mi. Sed dolor fringilla curabitur arcu. Tincidunt neque
              mattis fames sed massa. Vestibulum bibendum tellus pharetra justo
              morbi at ornare molestie. Sit volutpat amet gravida scelerisque
              etiam metus. Nibh felis velit, sodales sed tellus erat. Neque.
            </SummaryContent>
          </SummarySection>
          <SummarySection position={1} setPosition={setPosition}>
            <SummaryHeader sectionName="abide">Terms We Abide By</SummaryHeader>
            <SummaryContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              ultrices turpis ac mattis sapien. Pharetra id lorem at ut vitae,
              lorem commodo. Fringilla justo, dui enim non nec convallis ac non.
              Viverra cum proin dictum egestas pharetra et ipsum condimentum. Ut
              in laoreet ultrices porta commodo enim. Tortor in erat nunc quam
              nullam. Eget elit magna neque, urna. Pretium duis id senectus ut
              varius. Id a porttitor lacus, mauris, commodo. Elit, arcu
              scelerisque mi, tellus. Ut consectetur eleifend sit in. Ipsum
              dictum at molestie ac odio. Pulvinar vel proin purus dui nunc
              neque enim magna enim. Leo gravida vehicula orci, felis quis
              elementum urna vitae pharetra. Risus neque id etiam ullamcorper
              adipiscing tellus. Blandit a dictum lorem facilisis. Nullam
              malesuada quisque nec eget tempus elementum nascetur aenean.
              Aliquet tempor amet pulvinar dictum. Est integer amet nascetur sem
              urna velit sed. Cursus blandit lorem lectus orci, lacus sit.
              Imperdiet scelerisque et quis dictumst sed quam. Accumsan quis
              nunc donec sagittis, dui, tincidunt enim. Purus praesent diam
              morbi mi. Sed dolor fringilla curabitur arcu. Tincidunt neque
              mattis fames sed massa. Vestibulum bibendum tellus pharetra justo
              morbi at ornare molestie. Sit volutpat amet gravida scelerisque
              etiam metus. Nibh felis velit, sodales sed tellus erat. Neque.
            </SummaryContent>
          </SummarySection>
          <SummarySection position={2} setPosition={setPosition}>
            <SummaryHeader sectionName="adopt">
              Conditions We Adopt
            </SummaryHeader>
            <SummaryContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              ultrices turpis ac mattis sapien. Pharetra id lorem at ut vitae,
              lorem commodo. Fringilla justo, dui enim non nec convallis ac non.
              Viverra cum proin dictum egestas pharetra et ipsum condimentum. Ut
              in laoreet ultrices porta commodo enim. Tortor in erat nunc quam
              nullam. Eget elit magna neque, urna. Pretium duis id senectus ut
              varius. Id a porttitor lacus, mauris, commodo. Elit, arcu
              scelerisque mi, tellus. Ut consectetur eleifend sit in. Ipsum
              dictum at molestie ac odio. Pulvinar vel proin purus dui nunc
              neque enim magna enim. Leo gravida vehicula orci, felis quis
              elementum urna vitae pharetra. Risus neque id etiam ullamcorper
              adipiscing tellus. Blandit a dictum lorem facilisis. Nullam
              malesuada quisque nec eget tempus elementum nascetur aenean.
              Aliquet tempor amet pulvinar dictum. Est integer amet nascetur sem
              urna velit sed. Cursus blandit lorem lectus orci, lacus sit.
              Imperdiet scelerisque et quis dictumst sed quam. Accumsan quis
              nunc donec sagittis, dui, tincidunt enim. Purus praesent diam
              morbi mi. Sed dolor fringilla curabitur arcu. Tincidunt neque
              mattis fames sed massa. Vestibulum bibendum tellus pharetra justo
              morbi at ornare molestie. Sit volutpat amet gravida scelerisque
              etiam metus. Nibh felis velit, sodales sed tellus erat. Neque.
            </SummaryContent>
          </SummarySection>
        </div>
      </div>
    </>
  )
}

TermsConditions.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default TermsConditions
