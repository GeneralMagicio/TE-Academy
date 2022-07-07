import React from 'react'

interface ISummaryContent {
  children: React.ReactNode
}

export function SummaryContent({ children }: ISummaryContent) {
  return <div className="pt-4 text-gray-400 font-open">{children}</div>
}
