import React from 'react'
import { PageBanner } from '@/components/PageBanner'
import { TextField } from '@/components/inputs/TextField'
import { TextArea } from '@/components/inputs/TextArea'
import { Select } from '@/components/inputs/Select'
import { Button } from '@/components/buttons/Button'
import { AppLayout } from '@/components/layouts/AppLayout'
import { attributes } from '@/content/ContactPage.md'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const inputFields = [
  { name: '', placeholder: '', title: 'First Name' },
  { name: '', placeholder: '', title: 'Last Name' },
  { name: '', placeholder: '', title: 'Email' }
]

const Contact: NextPageWithLayout = () => {
  const { contactTitle, mainTitle, subtitle } = attributes
  return (
    <>
      <PageBanner title={mainTitle} />
      <div className="pb-16 pt-36 px-32 grid grid-cols-2 gap-x-20">
        <div className="flex flex-col gap-y-6 justify-center">
          <div className="text-5xl font-bai font-bold">{contactTitle}</div>
          <div className="text-gray-400 text-xl font-bai">{subtitle}</div>
        </div>
        <div className="flex flex-col gap-y-4">
          {inputFields.map((field) => (
            <TextField
              key={field.title}
              name={field.name}
              placeholder={field.placeholder}
              title={field.title}
            />
          ))}
          <Select name="category" options={[]} title="Category" />
          <TextArea name="description" title="How can we be of help?" />
          <div className="h-[54px] max-w-md">
            <Button label="Submit" />
          </div>
        </div>
      </div>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Contact
