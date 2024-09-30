'use client'

import { cn } from '@/lib/utils'
import type React from 'react'
import { ArrowOutbound } from '../vectors/arrow'
import { useLocale } from '@/stores/locale'
import { staticData } from '@/lib/static'
import Link from 'next/link'

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

const Disclaimer = () => {
  const { locale } = useLocale()

  const disclaimer = staticData.footer.newsletter.disclaimer[locale]
  const [before, after] = disclaimer.split('{{policy}}')

  return (
    <p className={'text-xs'}>
      {before}
      <Link href={'/privacy'} target={'_blank'} className={'underline'}>
        {locale === 'el' ? 'Πολιτική Απορρήτου' : 'Privacy Policy'}
      </Link>
      {after}
    </p>
  )
}

export const FooterNewsletter = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>) => {
  const { locale } = useLocale()

  return (
    <form className={cn('flex flex-col gap-5', className)} {...props}>
      <h2 className={'font-canela text-4xl leading-none max-w-96 text-balance'}>
        {staticData.footer.newsletter.title[locale]}
      </h2>
      <fieldset className={'w-full max-w-96 h-fit relative'}>
        <Input
          type={'email'}
          placeholder={staticData.footer.newsletter.inputPlaceholder[locale]}
        />
        <button
          type={'submit'}
          className={'absolute right-0 top-0 p-3 pr-0 mt-2'}
        >
          <ArrowOutbound />
        </button>
      </fieldset>
      <Disclaimer />
    </form>
  )
}
