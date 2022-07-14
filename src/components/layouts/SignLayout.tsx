import React from 'react'
import Image from 'next/image'
import type { ReactElement } from 'react'

interface ISignLayout {
  children: ReactElement
  subtitle: string
  title: string
}

export function SignLayout({ children, subtitle, title }: ISignLayout) {
  return (
    <div className="min-h-screen grid grid-cols-2 overflow-hidden">
      <div className="relative bg-te-dark px-16 py-12">
        <Image height="65" src="/logos/TE/dark.svg" width="65" />
        <div className="absolute left-[5%] top-[15%]">
          <Image height="120" src="/artifacts/spiral.svg" width="120" />
        </div>
        <div className="absolute left-[15%] top-[45%]">
          <Image height="26" src="/artifacts/greenStar.svg" width="26" />
        </div>
        <div className="absolute -right-16 bottom-[30%]">
          <Image height="250" src="/artifacts/cloud2.svg" width="250" />
        </div>
        <div className="absolute -bottom-[40%] left-0">
          <Image height="950" src="/artifacts/blocks.svg" width="950" />
        </div>
        <div className="mt-36 text-white text-7xl font-bai font-bold">
          {title}
        </div>
        <div className="mt-5 mx-auto max-w-[490px] text-white text-2xl text-center font-bai">
          {subtitle}
        </div>
      </div>
      <div className="bg-white z-10 flex">{children}</div>
    </div>
  )
}
