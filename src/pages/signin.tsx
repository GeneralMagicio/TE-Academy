import React, { ReactElement } from 'react'
import Image from 'next/image'
import { TextField } from '@/components/inputs/TextField'
import { Button } from '@/components/buttons/Button'
import { SignLayout } from '@/components/layouts/SignLayout'
import type { NextPageWithLayout } from './_app'

const signUpFields = [
  { name: 'email', placeholder: 'A working email address', title: 'Email' },
  { name: 'password', placeholder: '************', title: 'Password' }
]

const socialSignOptions = [
  { name: 'Google', src: '/social/color/google.svg' },
  { name: 'Github', src: '/social/color/github.svg' },
  { name: 'Discord', src: '/social/color/discord.svg' },
  { name: 'Twitter', src: '/social/color/twitter.svg' }
]

const SignUp: NextPageWithLayout = () => {
  return (
    <div className="m-auto max-w-md">
      <div className="flex flex-col">
        <span className="text-3xl font-bai font-bold">Welcome back</span>
        <span className="text-gray-400 text-sm font-bai font-medium">
          Continue from where you stopped
        </span>
      </div>
      <div className="mt-10 flex justify-between gap-x-4">
        {socialSignOptions.map((elem) => (
          <div
            key={elem.name}
            className="h-11 w-24 border border-gray-400 rounded-lg flex gap-x-2 justify-center items-center cursor-pointer">
            <Image height="16" src={elem.src} width="16" />
            <span className="text-sm font-bai font-medium">{elem.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 max-w-md flex gap-4 justify-around items-center">
        <div className="h-[0.5px] w-full border-[0.5px] border-gray-400" />
        <div className="text-gray-400 text-sm font-bai font-medium uppercase">
          or
        </div>
        <div className="h-[0.5px] w-full border-[0.5px] border-gray-400" />
      </div>
      <div className="mt-10 flex flex-col gap-y-4">
        {signUpFields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            title={field.title}
          />
        ))}
      </div>
      <div className="mt-10 h-[50px] max-w-md">
        <Button label="Create Account" />
      </div>
      <div className="mt-2 text-sm text-gray-400 text-center font-bai font-medium">
        Don&apos;t an account? <b className="text-te-purple">Sign up</b>
      </div>
    </div>
  )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <SignLayout>{page}</SignLayout>
}

export default SignUp
