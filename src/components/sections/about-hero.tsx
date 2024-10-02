'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'

import type { LocalizedString } from '@/lib/locale'
import type { Media } from '@/payload-types'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'title'
  > {
  props: {
    title: LocalizedString
    paragraph: LocalizedString
    image?: Media
    cta: Array<{
      label: LocalizedString
      url: string
      id?: string | null
      blockName?: string | null
      blockType: 'CallToAction'
    }>
  }
}

export const AboutHero = ({ props, className, ...rest }: Props) => {
  const { locale } = useLocale()
  return (
    <section
      className={cn(
        'relative flex flex-col lg:flex-row gap-10 w-full h-[calc(100dvh-112px)] md:h-[calc(100dvh-160px)] px-10 md:px-20 pb-12 md:pb-20 transition-all',
        className,
      )}
      {...rest}
    >
      <div
        className={
          'relative w-full h-auto lg:w-[40%] flex flex-col gap-12 justify-between items-start'
        }
      >
        <h1
          className={
            'lg:absolute lg:inset-0 z-10 font-canela uppercase text-balance text-7xl lg:text-9xl leading-none max-w-[768px] h-fit pt-8 md:pt-10'
          }
        >
          {props.title[locale]}
        </h1>
        <span className={'max-lg:hidden'} />
        <div className={'flex flex-col gap-12 max-w-96'}>
          <p className={'text-balance text-xl font-canela'}>
            {props.paragraph[locale]}
          </p>
          <HoverFlip.Link href={'/contact'} className={'uppercase'}>
            {locale === 'en' ? 'Contact us' : 'Επικοινωνία'}
          </HoverFlip.Link>
        </div>
      </div>
      <div className={'relative w-full h-full lg:h-auto lg:w-[60%] z-0'}>
        <img
          src={props.image?.url! || ''}
          alt={props.image?.alt || ''}
          className={'object-cover w-full h-full'}
        />
      </div>
    </section>
  )
}
