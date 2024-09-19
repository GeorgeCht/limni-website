'use client'

import { cn } from '@/lib/utils'
import type React from 'react'
import { ArrowOutbound } from '../vectors/arrow'

const Input = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className={cn(
        'relative w-full h-12 py-2 border-b border-b-[#C7B09C]/50 placeholder:text-[#C7B09C]/50 uppercase bg-transparent text-balance placeholder:text-balance/50 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-[#C7B09C]/75 transition-all',
        className,
      )}
      {...props}
    />
  )
}

export const FooterNewsletter = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>) => {
  return (
    <form className={cn('flex flex-col gap-5', className)} {...props}>
      <h2 className={'font-canela text-4xl leading-none max-w-96 text-balance'}>
        Get offer updates straight to your inbox!
      </h2>
      <fieldset className={'w-full max-w-96 h-fit relative'}>
        <Input type={'email'} placeholder={'Enter your email'} />
        <button
          type={'submit'}
          className={'absolute right-0 top-0 p-3 pr-0 mt-2'}
        >
          <ArrowOutbound />
        </button>
      </fieldset>
      <p className={'text-xs'}>
        By subscribing, you agree to our{' '}
        <a href={'/privacy'} className={'underline'}>
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
