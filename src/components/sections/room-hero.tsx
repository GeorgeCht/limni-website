'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/stores/locale'

import { useTransitionRouter } from 'next-view-transitions'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref'
  > {
  coverImage: {
    src: string
    alt: string
  }
  roomDetails: {
    visitors: number
    area: string
    beds: number
  }
  code: string
  name: string
  paragraph: string
  primaryButton: {
    text: string
    url: string
  }
}

export const RoomHero = ({
  coverImage,
  roomDetails,
  code,
  name,
  paragraph,
  primaryButton,
  className,
  ...props
}: Props) => {
  gsap.registerPlugin(ScrollTrigger)

  const section = React.useRef<HTMLElement>(null)
  const container = React.useRef<HTMLDivElement>(null)
  const image = React.useRef<HTMLImageElement>(null)

  const router = useTransitionRouter()
  const { locale } = useLocale()

  useGSAP(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    gsap.to(container.current, {
      y: 0,
      opacity: 1,
      duration: 0.975,
      ease: 'circ.inOut',
    })
    gsap.fromTo(
      container.current,
      {
        yPercent: -15,
        // '--gsap-color-text': '#FFF',
        // '--gsap-img-top': '0%',
      },
      {
        yPercent: 0,
        // '--gsap-color-text': '#414135',
        // '--gsap-img-top': '-100%',
        scrollTrigger: {
          trigger: section.current,
          scrub: 1,
          start: 'top top',
          end: '+=128',
          pin: true,
        },
      },
    )
  })

  return (
    <section
      ref={section}
      className={cn(
        'relative w-full h-dvh -mt-[112px] md:-mt-[160px]',
        className,
      )}
      {...props}
    >
      <img
        ref={image}
        src={coverImage.src}
        alt={coverImage.alt}
        className={'object-cover size-full'}
      />
      <span
        className={
          'size-full absolute inset-0 bg-gradient-to-t from-black/75 to-transparent'
        }
      />
      <div
        ref={container}
        className={
          'size-full opacity-0 absolute inset-0 flex max-lg:flex-col gap-10 text-white justify-end lg:justify-between items-start lg:items-end py-12 md:py-20 px-10 md:px-20 -translate-y-4 z-10'
        }
      >
        <div className={'flex flex-col gap-1 w-full lg:w-[60%]'}>
          <p className={'uppercase'}>
            {locale === 'en' ? 'Room code ' : 'Κωδικος '} #{code}
          </p>
          <h1
            className={
              'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px]'
            }
          >
            {name}
          </h1>
        </div>
        <div className={'flex flex-col gap-3 w-full lg:w-[40%]'}>
          <p className={'uppercase'}>
            {(() => {
              switch (locale) {
                case 'en':
                  return (
                    <React.Fragment>
                      {roomDetails.visitors} Guests / {roomDetails.beds} Beds /{' '}
                      {roomDetails.area}m<sup>2</sup>
                    </React.Fragment>
                  )
                case 'el':
                  return (
                    <React.Fragment>
                      {roomDetails.visitors} Επισκεπτες / {roomDetails.beds}{' '}
                      {roomDetails.beds === 1 ? 'Κρεβατι' : 'Κρεβατια'} /{' '}
                      {roomDetails.area}μ<sup>2</sup>
                    </React.Fragment>
                  )
              }
            })()}
          </p>
          <p className={'text-balance text-lg font-canela'}>{paragraph}</p>
          <Button
            className={'w-fit bg-white text-black mt-3'}
            onClick={() => router.push(primaryButton.url)}
          >
            {primaryButton.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
