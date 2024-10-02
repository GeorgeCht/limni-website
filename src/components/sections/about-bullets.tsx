'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'

import type { LocalizedObject, LocalizedString } from '@/lib/locale'
import { Logo } from '../vectors/logo'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'title'
  > {
  title: LocalizedString
  bulletPoints: LocalizedObject<{
    text: string
    id?: string | null
  }>
}

export const AboutBullets = ({
  title,
  bulletPoints,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()
  return (
    <section
      className={cn(
        'relative flex flex-col gap-24 bg-[#414135] text-[#E7E0D5] w-full py-12 md:py-20 px-10 md:px-20 transition-all',
        className,
      )}
      {...props}
    >
      <h2
        className={
          'w-full max-w-[1368px] lg:w-10/12 font-canela text-6xl md:text-8xl leading-none'
        }
      >
        {title[locale]}
      </h2>
      <div className={'w-full flex flex-col lg:flex-row gap-16'}>
        <div className={'hidden lg:block w-3/12'} />
        <ul className={'flex flex-wrap gap-12 lg:gap-20 w-full lg:w-9/12'}>
          {bulletPoints[locale]?.map((bulletPoint) => (
            <li
              key={bulletPoint!.id}
              className={'flex flex-col gap-6 w-full min-[1280px]:w-[44%]'}
            >
              <Logo.Mark className={'size-10 opacity-65'} />
              <p
                className={
                  'font-canela text-balance text-2xl lg:text-3xl min-[1280px]:max-w-[600px]'
                }
              >
                {bulletPoint?.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
