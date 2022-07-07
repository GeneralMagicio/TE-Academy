import React from 'react'
import Image from 'next/image'

const partners = [
  { height: '84', src: '/logos/partners/apple.svg', width: '72' },
  { height: '52', src: '/logos/partners/jeep.svg', width: '130' },
  { height: '65', src: '/logos/partners/google_plus.svg', width: '65' },
  { height: '44', src: '/logos/partners/nike.svg', width: '130' },
  { height: '53', src: '/logos/partners/tripadvisor.svg', width: '85' },
  { height: '72', src: '/logos/partners/github.svg', width: '72' }
]

export function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-white">
      <div className="py-24 animate-marquee whitespace-nowrap">
        {partners.map((partner) => (
          <span key={`${partner.height}x${partner.width}`} className="mx-16">
            <Image
              height={partner.height}
              src={partner.src}
              width={partner.width}
            />
          </span>
        ))}
      </div>

      <div className="absolute top-0 py-24 animate-marquee2 whitespace-nowrap">
        {partners.map((partner) => (
          <span key={`${partner.height}x${partner.width}`} className="mx-16">
            <Image
              height={partner.height}
              src={partner.src}
              width={partner.width}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
