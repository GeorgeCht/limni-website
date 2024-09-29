'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Flair } from '@/components/ui/flair'
import { ArrowDownIcon } from '@/components/vectors/arrow'
import { Logo } from '@/components/vectors/logo'
import { HoverFlip } from '@/components/ui/hoverflip'

import type { Media } from '@/payload-types'
import type { LocalizedString } from '@/lib/locale'

interface Props extends Omit<React.HTMLAttributes<HTMLElement>, 'ref'> {
  header: LocalizedString
  subtitle: LocalizedString
  cta: {
    label: LocalizedString
    url: string
  }
  paragraph: LocalizedString
  paragraphCta: {
    label: LocalizedString
    url: string
  }
  image: Media
}

export const HeroSection = ({
  header,
  subtitle,
  cta,
  paragraph,
  paragraphCta,
  image,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  const arch = React.useRef<HTMLDivElement>(null)
  const section = React.useRef<HTMLElement>(null)
  const img = React.useRef<HTMLImageElement>(null)
  const headerRef = React.useRef<HTMLHeadingElement>(null)
  const bottom = React.useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    gsap.fromTo(
      arch.current,
      {
        height: '70vh',
      },
      {
        height: width > 768 ? '78.625vh' : '50vh',
        scrollTrigger: {
          trigger: section.current,
          scrub: 1,
          start: 'top 15%',
          end: 'bottom center',
        },
      },
    )
    gsap.to(arch.current, {
      opacity: 1,
      scale: 1,
      delay: 0.075,
      duration: 1.175,
      ease: 'circ.inOut',
    })
    gsap.to(bottom.current, {
      opacity: 1,
      delay: 0.415,
      duration: 0.975,
      ease: 'circ.inOut',
    })
    gsap.fromTo(
      headerRef.current,
      {
        marginTop: -35,
        opacity: 0,
      },
      {
        marginTop: 0,
        opacity: 1,
        delay: 0.275,
        duration: 0.975,
        ease: 'circ.inOut',
      },
    )
  }, [])

  return (
    <section
      ref={section}
      className={cn(
        'relative h-fit min-[1628px]:min-h-dvh pb-10 md:pb-16 px-10 md:px-20 transition-all',
        className,
      )}
      {...props}
    >
      <div
        ref={arch}
        className={
          'flex flex-col mt-0 items-center opacity-0 scale-150 h-[78.625vh] justify-center [mask-image:url(/assets/arch-vector.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] overflow-hidden'
        }
      >
        <img
          data-scroll
          data-scroll-speed={0.0985}
          ref={img}
          src={image.url!}
          alt={image.alt}
          className={'object-cover'}
        />
      </div>

      <div
        className={
          'absolute top-20 md:top-20 left-0 w-full h-fit transition-all pointer-events-none'
        }
      >
        <h1
          ref={headerRef}
          data-scroll
          data-scroll-speed={-0.0985}
          className={
            'uppercase font-canela text-[11.125vw] lg:text-[9.725vw] w-full leading-none m-auto text-center select-none cursor-default opacity-0'
          }
        >
          {locale === 'en' ? header.en : header.el}
        </h1>
      </div>
      <Flair parent={arch}>
        <span className={'text-center p-6'}>
          {locale === 'en' ? 'Book a room' : 'Καντε κρατηση'}
        </span>
      </Flair>
      <div
        ref={bottom}
        className={
          'w-full flex justify-between items-end min-[1628px]:-mt-40 opacity-0'
        }
      >
        <div className={'max-[1628px]:hidden min-[1628px]:basis-1/3'}>
          <div className={'w-fit p-5 rounded-full border border-black/25'}>
            <ArrowDownIcon className={'size-6 self-center text-black'} />
          </div>
        </div>
        <div className={'max-[1628px]:hidden min-[1628px]:basis-1/3'}>
          <p
            className={
              'text-balance text-center leading-tight max-w-72 m-auto uppercase'
            }
          >
            {locale === 'en' ? subtitle.en : subtitle.el}
          </p>
        </div>
        <div
          data-scroll
          data-scroll-speed={0.2125}
          className={
            'basis-full min-[1628px]:basis-1/3 flex justify-center min-[1628px]:justify-end'
          }
        >
          <div
            className={
              'max-w-80 flex flex-col gap-4 max-[1628px]:justify-center'
            }
          >
            <Logo.Mark className={'size-10 max-[1628px]:hidden'} />
            <p
              className={
                'text-balance text-lg md:text-xl font-canela max-[1628px]:text-center max-[1628px]:mt-10'
              }
            >
              {locale === 'en' ? paragraph.en : paragraph.el}
            </p>
            <HoverFlip.Link
              href={cta.url}
              className={'uppercase max-[1628px]:text-center'}
            >
              {locale === 'en'
                ? (cta.label.en as string)
                : (cta.label.el as string)}
            </HoverFlip.Link>
          </div>
        </div>
      </div>
    </section>
  )
}
