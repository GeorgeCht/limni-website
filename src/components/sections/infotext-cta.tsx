'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'

import type { LocalizedString } from '@/lib/locale'
import type { Media } from '@/payload-types'
import { useLocale } from '@/stores/locale'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref' | 'title'
  > {
  withImage?: boolean
  title: LocalizedString
  cta: {
    label: LocalizedString
    url: string
  }
  image?: Media
}

export const InfoTextCTA = ({
  title,
  cta,
  withImage = false,
  image = undefined,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  return (
    <React.Fragment>
      <section
        className={cn(
          'relative w-full flex max-lg:flex-col max-lg:gap-10 pb-12 md:pb-20 px-10 md:px-20 transition-all',
          className,
        )}
        {...props}
      >
        <HoverFlip.Link
          href={cta.url}
          className={'w-full max-md:hidden lg:w-2/12 h-fit uppercase'}
        >
          {locale === 'en'
            ? (cta.label.en as string)
            : (cta.label.el as string)}
        </HoverFlip.Link>
        <h2
          className={
            'w-full max-w-[1368px] lg:w-10/12 font-canela text-6xl md:text-8xl leading-none'
          }
        >
          {locale === 'en' ? title.en : title.el}
        </h2>
      </section>
      {withImage && image && (
        <section
          className={
            'relative w-full max-lg:aspect-square lg:h-dvh mb-16 md:mb-20 px-10 md:px-20 transition-all overflow-hidden'
          }
        >
          <img
            data-scroll
            data-scroll-speed={-0.1685}
            src={image.url!}
            alt={image.alt || ''}
            className={'w-full h-full object-cover'}
          />
        </section>
      )}
    </React.Fragment>
  )
}
