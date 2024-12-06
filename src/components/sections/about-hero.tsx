'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'
import { useGSAP } from '@gsap/react'

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

  const sectionRef = React.useRef<HTMLElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const paragraphRef = React.useRef<HTMLParagraphElement>(null)
  const ctaRef = React.useRef<HTMLAnchorElement>(null)
  const imageRef = React.useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Title animation
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

    // Paragraph animation
    tl.fromTo(
      paragraphRef.current,
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

    // CTA animation
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

    // Image animation
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.6',
    )
  }, [])

  return (
    <section
      ref={sectionRef}
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
          ref={titleRef}
          className={
            'lg:absolute lg:inset-0 z-10 font-canela uppercase text-balance text-7xl lg:text-9xl leading-none max-w-[768px] h-fit pt-8 md:pt-10 opacity-0'
          }
        >
          {props.title[locale]}
        </h1>
        <span className={'max-lg:hidden'} />
        <div className={'flex flex-col gap-12 max-w-96'}>
          <p
            ref={paragraphRef}
            className={'text-balance text-xl font-canela opacity-0'}
          >
            {props.paragraph[locale]}
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
      </div>
      <div className={'relative w-full h-full lg:h-auto lg:w-[60%] z-0'}>
        <img
          ref={imageRef}
          src={props.image?.url! || ''}
          alt={props.image?.alt || ''}
          className={'object-cover w-full h-full opacity-0'}
        />
      </div>
    </section>
  )
}
