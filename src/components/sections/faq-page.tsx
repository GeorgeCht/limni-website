'use client'

import type React from 'react'
import type { LocalizedString } from '@/lib/locale'

import { useLocale } from '@/stores/locale'
import { Button } from '@/components/ui/button'
import { ArrowOutbound } from '@/components/vectors/arrow'
import { useTransitionRouter } from 'next-view-transitions'

interface LocalizedCTA {
  label: LocalizedString
  url: string
}

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'title'
  > {
  title: LocalizedString
  paragraph: LocalizedString
  label: LocalizedString
  cta: LocalizedCTA
}

export const FAQPage = ({
  title,
  paragraph,
  label,
  cta,
  children,
  ...props
}: Props) => {
  const router = useTransitionRouter()
  const { locale } = useLocale()

  return (
    <section
      className={
        'relative flex flex-col lg:flex-row gap-10 w-full min-h-[calc(100dvh-112px)] md:min-h-[calc(100dvh-160px)] px-10 md:px-20 pb-12 md:pb-20 transition-all'
      }
      {...props}
    >
      <div className={'w-full lg:w-1/2 flex flex-col justify-between gap-16'}>
        <h1
          className={
            'font-canela uppercase text-balance text-5xl lg:text-6xl min-[1700px]:text-9xl leading-none'
          }
        >
          {title[locale]}
        </h1>
        <div className={'flex flex-col gap-6 max-w-96'}>
          <p className={'uppercase'}>{label[locale]}</p>
          <p className={'text-balance text-xl font-canela'}>
            {paragraph[locale]}
          </p>
          <Button
            className={'w-fit flex gap-10'}
            onClick={() => router.push(cta.url)}
          >
            <span>{cta.label[locale]}</span>
            <ArrowOutbound className={'size-3.5'} />
          </Button>
        </div>
      </div>
      <div className={'w-full lg:w-1/2'}>{children}</div>
    </section>
  )
}
