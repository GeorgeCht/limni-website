'use client'

import React from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { UnderlinedLink } from '@/components/ui/underline'
import { useLocale } from '@/stores/locale'

import type { Media } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'

interface PrefooterType {
  subheader: string
  header: string
  line1: string
  line2: string
  url: string
  background: string | Media
  id?: string | null
  blockName?: string | null
  blockType: 'PreFooter'
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  prefooter: LocalizedObject<PrefooterType>
}

export const Prefooter = ({ prefooter, className, ...props }: Props) => {
  const { locale } = useLocale()

  const img = React.useRef<HTMLImageElement>(null)
  const section = React.useRef<HTMLElement>(null)
  const data = prefooter[locale]?.[0]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    width >= 1024 &&
      gsap.fromTo(
        img.current,
        {
          y: '-15vh',
          scaleX: '100%',
          scaleY: '100%',
        },
        {
          y: 0,
          scaleX: '115%',
          scaleY: '115%',
          scrollTrigger: {
            trigger: section.current,
            scrub: 1,
            start: 'top center',
            end: 'bottom center',
          },
        },
      )
  }, [])

  return (
    <section
      ref={section}
      className={cn(
        'relative w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all bg-[#414135]',
        className,
      )}
      {...props}
    >
      <div
        className={
          'relative bg-[#414135] flex flex-col md:justify-between justify-center items-center w-full md:py-20 px-4 max-md:aspect-square md:h-dvh overflow-hidden'
        }
      >
        <img
          ref={img}
          src={(data?.background as Media).url!}
          alt={(data?.background as Media).alt || 'Background image'}
          className={
            'absolute w-full h-full inset-0 object-cover opacity-60 z-0'
          }
        />
        <span />
        <div className={'flex flex-col items-center gap-4 z-10'}>
          <span className={'text-white text-center uppercase'}>
            {data?.subheader}
          </span>
          <h2
            className={
              '*:text-white max-w-72 md:max-w-[1024px] m-auto text-center z-10'
            }
          >
            <UnderlinedLink
              className={'text-5xl md:text-9xl leading-none'}
              href={'/home'}
            >
              {data?.header}
            </UnderlinedLink>
          </h2>
        </div>
        <p
          className={
            'flex flex-col max-md:hidden items-center text-balance text-white text-lg md:text-xl uppercase z-10'
          }
        >
          <span>{data?.line1}</span>
          <HoverFlip.Link href={data?.url!}>
            {data?.line2 as string}
          </HoverFlip.Link>
        </p>
      </div>
    </section>
  )
}
