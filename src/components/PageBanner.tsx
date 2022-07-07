import React from 'react'
import Image from 'next/image'

interface IPageBanner {
  title: string
}

export function PageBanner({ title }: IPageBanner) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full z-10 flex justify-center items-center">
        <span className="text-white text-6xl font-bai font-bold">{title}</span>
      </div>
      <div className="absolute z-10 top-[15%] left-[20%]">
        <Image height="121" src="/artifacts/spiral.svg" width="164" />
      </div>
      <div className="absolute z-10 top-[30%] right-1/3">
        <Image height="67" src="/artifacts/ellipse.svg" width="67" />
      </div>
      <div className="absolute z-10 bottom-5 left-1/4">
        <Image height="76" src="/artifacts/blue_rectangle.svg" width="76" />
      </div>
      <div className="absolute z-10 -bottom-1 right-0">
        <Image height="250" src="/artifacts/cloud.svg" width="250" />
      </div>
      <div className="absolute z-10 bottom-5 right-1/4">
        <Image height="26" src="/artifacts/star.svg" width="26" />
      </div>
      <Image height="512" layout="responsive" src="/dark_bg.png" width="1512" />
    </div>
  )
}
