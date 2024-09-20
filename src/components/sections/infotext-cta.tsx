'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '../ui/hoverflip'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  withImage?: boolean
}

export const InfoTextCTA = ({
  withImage = false,
  className,
  ...props
}: Props) => {
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
          href={'/contact'}
          className={'w-full max-md:hidden lg:w-2/12 h-fit uppercase'}
        >
          Request a call
        </HoverFlip.Link>
        <h2
          className={
            'w-full max-w-[1268px] lg:w-10/12 font-canela text-5xl md:text-7xl leading-none text-balance'
          }
        >
          The preeminent leader in integrated luxury hospitality design.
        </h2>
      </section>
      {withImage && (
        <section
          className={
            'relative w-full max-lg:aspect-square lg:h-dvh mb-16 md:mb-20 px-10 md:px-20 transition-all overflow-hidden'
          }
        >
          <img
            data-scroll
            data-scroll-speed={-0.1685}
            src={'/assets/placeholder.avif'}
            alt={'placeholder'}
            className={'w-full h-full object-cover'}
          />
        </section>
      )}
    </React.Fragment>
  )
}
