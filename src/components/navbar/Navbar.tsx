import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Link from 'next/link'
import { Button } from '@/components/buttons/Button'

interface INavbar {
  isTransparent?: boolean
}

export function Navbar({ isTransparent }: INavbar) {
  return (
    <nav
      className={classNames(
        'absolute h-[100px] w-full px-20 py-5 flex justify-between items-center z-10',
        isTransparent ? 'bg-transparent' : 'bg-white'
      )}>
      <Link href="/">
        <a className="flex">
          <Image height="52" src="/logos/TE/black.svg" width="52" />
        </a>
      </Link>
      <div className="flex gap-x-10 text-sm font-bold">
        <div>Explore Courses</div>
        <div>Curriculum</div>
        <div>Events Calendar</div>
      </div>
      <div className="h-full flex gap-x-10 text-sm font-bold items-center">
        <Link href="faq">
          <a>FAQ</a>
        </Link>
        <Link href="/signin">
          <a className="text-te-purple">Sign in</a>
        </Link>
        <Link href="/signup">
          <div className="h-14 w-48">
            <Button label="Sign up" />
          </div>
        </Link>
      </div>
    </nav>
  )
}
