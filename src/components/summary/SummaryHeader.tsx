import React from 'react'

interface ISummaryHeader {
  children: React.ReactNode
  sectionName?: string
}

export function SummaryHeader({ children, sectionName }: ISummaryHeader) {
  return (
    <section className="text-4xl font-bai font-bold" id={sectionName}>
      {children}
    </section>
  )
}
