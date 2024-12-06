'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'
import { useGSAP } from '@gsap/react'

import type { LocalizedString } from '@/lib/locale'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'title'
  > {
  title: LocalizedString
  description: LocalizedString
}

export const RoomsHero = ({
  title,
  description,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  const sectionRef = React.useRef<HTMLElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descriptionRef = React.useRef<HTMLParagraphElement>(null)
  const ctaRef = React.useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      },
    )

    tl.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5',
    )

    tl.fromTo(
      ctaRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4',
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative w-full flex max-lg:flex-col gap-10 justify-end lg:justify-between items-start lg:items-end pt-12 md:pt-20 px-10 md:px-20',
        className,
      )}
      {...props}
    >
      <div className={'flex flex-col gap-1 w-full lg:w-[60%] overflow-hidden'}>
        <h1
          ref={titleRef}
          className={
            'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px] opacity-0'
          }
        >
          {title[locale]}
        </h1>
      </div>
      <div className={'flex flex-col gap-3 w-full lg:w-[40%]'}>
        <p
          ref={descriptionRef}
          className={'text-balance text-xl font-canela opacity-0'}
        >
          {description[locale]}
        </p>
        <HoverFlip.Link
          // @ts-expect-error
          ref={ctaRef}
          href={'/contact'}
          className={'uppercase opacity-0'}
        >
          {locale === 'en' ? 'Contact us' : 'Επικοινωνία'}
        </HoverFlip.Link>
      </div>
    </section>
  )
}
