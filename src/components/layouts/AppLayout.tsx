import React from 'react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/navbar/Navbar'
import type { ReactElement } from 'react'

interface IAppLayout {
  children: ReactElement
  navBarIsTransparent?: boolean
}

export function AppLayout({ children, navBarIsTransparent }: IAppLayout) {
  return (
    <>
      <Navbar isTransparent={navBarIsTransparent} />
      {navBarIsTransparent ? (
        children
      ) : (
        <div className="pt-[100px]">{children}</div>
      )}
      <Footer />
    </>
  )
}
