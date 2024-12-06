'use client'

import type React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { LocalizedString } from '@/lib/locale'
import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: LocalizedString
  description: LocalizedString
}

export const ExperienceHero = ({
  name,
  description,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  // Refs for animating elements
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Animations for heading, description, and button
    tl.fromTo(
      [headingRef.current, descriptionRef.current, buttonRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2,
      },
    )
  }, [])

  return (
    <section
      className={cn(
        'relative w-full flex max-lg:flex-col gap-10 justify-end lg:justify-between items-start lg:items-end pt-12 md:pt-20 px-10 md:px-20',
        className,
      )}
      {...props}
    >
      <div className={'flex flex-col gap-1 w-full lg:w-[60%] overflow-hidden'}>
        <h1
          ref={headingRef}
          className={
            'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px] opacity-0'
          }
        >
          {locale === 'en' ? name.en : name.el}
        </h1>
      </div>
      <div className={'flex flex-col gap-3 w-full lg:w-[40%]'}>
        <p
          ref={descriptionRef}
          className={'text-balance text-xl font-canela opacity-0'}
        >
          {locale === 'en' ? description.en : description.el}
        </p>
        <HoverFlip.Link
          // @ts-expect-error
          ref={buttonRef}
          href={'/contact'}
          className={'uppercase opacity-0'}
        >
          {locale === 'en' ? 'Contact us' : 'Επικοινωνία'}
        </HoverFlip.Link>
      </div>
    </section>
  )
}
