'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'

import { Flair } from '@/components/ui/flair'
import { ArrowDownIcon } from '@/components/vectors/arrow'
import { Logo } from '@/components/vectors/logo'
import { HoverFlip } from '@/components/ui/hoverflip'

export const HeroSection = ({
  className,
  ...props
}: Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  'ref'
>) => {
  const arch = React.useRef<HTMLDivElement>(null)
  const section = React.useRef<HTMLElement>(null)
  const img = React.useRef<HTMLImageElement>(null)
  const header = React.useRef<HTMLHeadingElement>(null)
  const bottom = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    gsap.fromTo(
      arch.current,
      { height: '65.175vh' },
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
      header.current,
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
          'flex flex-col mt-0 items-center opacity-0 scale-95 h-[78.625vh] justify-center [mask-image:url(/assets/arch-vector.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] overflow-hidden'
        }
      >
        <img
          data-scroll
          data-scroll-speed={0.0985}
          ref={img}
          src={'/assets/splash.jpg'}
          alt={'placeholder'}
          className={'object-cover'}
        />
      </div>

      <div
        className={
          'absolute top-20 md:top-20 left-0 w-full h-fit transition-all pointer-events-none'
        }
      >
        <h1
          ref={header}
          data-scroll
          data-scroll-speed={-0.0985}
          className={
            'uppercase font-canela text-[11.125vw] lg:text-[9.725vw] w-full leading-none m-auto text-center select-none cursor-default opacity-0'
          }
        >
          The boutique experiece
        </h1>
      </div>
      <Flair parent={arch}>Click me</Flair>
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
            Welcome to the Southwestern Evoia
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
              Nestled in the serene coastal village of Limni, our hotel offers a
              perfect blend of traditional charm and modern comfort. Welcome
              home!
            </p>
            <HoverFlip.Link
              href={'/rooms'}
              className={'uppercase max-[1628px]:text-center'}
            >
              Get directions
            </HoverFlip.Link>
          </div>
        </div>
      </div>
    </section>
  )
}