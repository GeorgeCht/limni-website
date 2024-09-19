'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'

import { HoverFlip } from '@/components/ui/hoverflip'
import { UnderlinedLink } from '@/components/ui/underline'

export const Prefooter = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const img = React.useRef<HTMLImageElement>(null)
  return (
    <section
      className={cn(
        'relative w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all bg-[#414135]',
        className,
      )}
      {...props}
    >
      <div
        className={
          'relative flex flex-col justify-between items-center w-full md:py-20 px-4 max-md:aspect-square md:h-dvh overflow-hidden'
        }
      >
        <img
          ref={img}
          data-scroll
          data-scroll-speed={0.0625}
          src={'/assets/placeholder.avif'}
          alt={'placeholder'}
          className={'absolute w-full h-full object-cover opacity-60 z-0'}
        />
        <span />
        <h2
          className={
            '*:text-white max-w-72 md:max-w-[1024px] m-auto text-center z-10'
          }
        >
          <UnderlinedLink
            className={'text-5xl md:text-9xl leading-none'}
            href={'/home'}
          >
            Book your room today!
          </UnderlinedLink>
        </h2>
        <p
          className={
            'flex flex-col max-md:hidden items-center text-balance text-white text-lg md:text-xl uppercase z-10'
          }
        >
          <span>Have questions?</span>
          <HoverFlip.Link href={'/faqs'}>
            Check our frequesntly asked questions
          </HoverFlip.Link>
        </p>
      </div>
    </section>
  )
}
