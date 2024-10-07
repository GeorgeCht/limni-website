'use client'

import React from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'
import { HoverFlip } from '@/components/ui/hoverflip'

import type { LocalizedString } from '@/lib/locale'
import type { Media } from '@/payload-types'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref' | 'title'
  > {
  theme?: 'dark' | 'light'
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
  theme,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  const section = React.useRef<HTMLElement>(null)
  const img = React.useRef<HTMLImageElement>(null)

  gsap.registerPlugin(ScrollTrigger)

  if (withImage) {
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
  }

  return (
    <section
      className={cn(
        'relative pb-10 md:pb-16 px-10 md:px-20 transition-all',
        withImage && 'h-fit min-[1628px]:min-h-dvh',
        theme === 'dark' && 'bg-[#414135] text-[#E7E0D5]',
      )}
      ref={section}
    >
      <div
        role={'contentinfo'}
        className={cn(
          'relative w-full flex max-lg:flex-col max-lg:gap-10 pb-12 md:pb-20 transition-all',
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
      </div>
      {withImage && image && (
        <div
          role={'contentinfo'}
          className={
            'relative w-full max-lg:aspect-square lg:h-dvh mb-16 md:mb-20 transition-all overflow-hidden'
          }
        >
          <img
            ref={img}
            src={image.url!}
            alt={image.alt || ''}
            className={'w-full h-full object-cover'}
          />
        </div>
      )}
    </section>
  )
}
