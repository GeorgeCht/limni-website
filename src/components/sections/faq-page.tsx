'use client'

import type React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { LocalizedString } from '@/lib/locale'
import { useLocale } from '@/stores/locale'
import { Button } from '@/components/ui/button'
import { ArrowOutbound } from '@/components/vectors/arrow'
import { useTransitionRouter } from 'next-view-transitions'
import { HoverFlip } from '@/components/ui/hoverflip'

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

  // Refs for animating elements
  const titleRef = useRef<HTMLHeadingElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Animations for title, label, paragraph, and button
    tl.fromTo(
      [
        titleRef.current,
        labelRef.current,
        paragraphRef.current,
        buttonRef.current,
      ],
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
      className={
        'relative flex flex-col lg:flex-row gap-10 w-full min-h-[calc(100dvh-112px)] md:min-h-[calc(100dvh-160px)] px-10 md:px-20 pb-12 md:pb-20 transition-all'
      }
      {...props}
    >
      <div
        id={'sticky-container'}
        className={
          'lg:sticky lg:top-40 w-full lg:w-1/2 flex flex-col justify-between gap-16 lg:h-[calc(100dvh-230px)]'
        }
      >
        <h1
          ref={titleRef}
          className={
            'font-canela uppercase text-balance text-5xl lg:text-6xl min-[1700px]:text-9xl leading-none opacity-0'
          }
        >
          {title[locale]}
        </h1>
        <div className={'flex flex-col gap-6 max-w-96'}>
          <p ref={labelRef} className={'uppercase opacity-0'}>
            {label[locale]}
          </p>
          <p
            ref={paragraphRef}
            className={'text-balance text-xl font-canela opacity-0'}
          >
            {paragraph[locale]}
          </p>
          <Button
            ref={buttonRef}
            className={'w-fit flex gap-10 opacity-0'}
            onClick={() => router.push(cta.url)}
          >
            <HoverFlip.Root>{cta.label[locale] as string}</HoverFlip.Root>
            <ArrowOutbound className={'size-3.5'} />
          </Button>
        </div>
      </div>
      <div className={'w-full lg:w-1/2'}>
        {children}
        {children}
        {children}
      </div>
    </section>
  )
}
