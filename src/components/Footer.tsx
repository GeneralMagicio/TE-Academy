import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/buttons/Button'

interface IFooterHeader {
  children: React.ReactNode
}

const FooterHeader = ({ children }: IFooterHeader) => {
  return <span className="text-white font-bai font-medium">{children}</span>
}

interface IFooterContent {
  children: React.ReactNode
}

const socialMedia = [
  { name: 'Discord', src: '/social/gray/discord.svg' },
  { name: 'Medium', src: '/social/gray/medium.svg' },
  { name: 'Linkedin', src: '/social/gray/linkedin.svg' },
  { name: 'Twitter', src: '/social/gray/twitter.svg' },
  { name: 'Youtube', src: '/social/gray/youtube.svg' }
]

const FooterContent = ({ children }: IFooterContent) => {
  return <span className="text-gray-400 font-open">{children}</span>
}

export function Footer() {
  return (
    <footer className="absolute h-[500px] pb-16 pt-24 px-32 flex flex-wrap justify-between bg-te-dark z-10">
      <div className="flex gap-x-20">
        <div className="flex flex-col flex-wrap gap-y-4">
          <FooterHeader>Quick Links</FooterHeader>
          <FooterContent>Events</FooterContent>
          <FooterContent>TE Journey</FooterContent>
          <FooterContent>About TE</FooterContent>
          <FooterContent>FAQs</FooterContent>
        </div>
        <div className="flex flex-col gap-y-4">
          <FooterHeader>Company</FooterHeader>
          <FooterContent>Imprint</FooterContent>
          <FooterContent>Privacy Policy</FooterContent>
          <FooterContent>Terms &amp; Conditions</FooterContent>
          <FooterContent>Contact Us</FooterContent>
        </div>
        <div className="flex flex-col gap-y-4">
          <FooterHeader>Learning</FooterHeader>
          <FooterContent>TE Fundamentals</FooterContent>
          <FooterContent>Deep Dives</FooterContent>
          <FooterHeader>Account</FooterHeader>
          <FooterContent>Sign in</FooterContent>
          <FooterContent>Sing up</FooterContent>
        </div>
      </div>
      <div className="max-w-md flex flex-col gap-y-5">
        <div className="flex flex-col">
          <span className="text-white text-2xl font-bai font-semibold">
            Stay in the know
          </span>
          <span className="text-gray-400 text-sm font-open">
            Be the first to hear about new classes and Live Events.
          </span>
        </div>
        <div className="h-[50px] flex gap-x-2">
          <input className="min-w-[335px] bg-transparent border border-gray-400 rounded-lg text-white pl-4" />
          <Button reverse label="Sign Up" />
        </div>
        <div className="text-gray-400 text-xs font-open font-semibold">
          By signing up for our email list, you indicate that you have read and
          agree to our <b className="text-te-green">Terms of Use</b>. We respect
          your privacy.
        </div>
      </div>
      <div className="w-full text-gray-400 font-bai font-medium">
        <hr className="h-[1px] border-gray-700 w-full" />
        <div className="mt-8 flex justify-between items-center">
          <span>© 2022 Token Engineering Academy. All rights reserved.</span>
          <div className="flex gap-x-6">
            {socialMedia.map((elem) => (
              <Image
                key={elem.name}
                alt={`${elem.name} logo`}
                height="32"
                src={elem.src}
                width="32"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
