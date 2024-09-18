'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { Flair } from '../ui/flair'
import { useScroller } from '../providers/scroll'
import { ArrowDownIcon } from '../vectors/arrow'
import { Logo } from '../vectors/logo'
import { Link } from 'next-view-transitions'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref'
  > {}

export const HeroSection = ({ className, ...props }: Props) => {
  const scroller = useScroller()

  const arch = React.useRef<HTMLDivElement>(null)
  const section = React.useRef<HTMLElement>(null)
  const img = React.useRef<HTMLImageElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      arch.current,
      { height: '65.175vh' },
      {
        height: '78.625vh',
        scrollTrigger: {
          trigger: section.current,
          scrub: 1,
          start: 'top 15%',
          end: 'bottom center',
        },
      },
    )
  }, [])

  return (
    <section
      ref={section}
      className={cn(
        'relative min-h-dvh pb-10 md:pb-16 px-10 md:px-20 transition-all',
        className,
      )}
      {...props}
    >
      <div
        ref={arch}
        className={
          'flex flex-col max-md:mt-12 items-center h-[78.625vh] justify-center [mask-image:url(/assets/arch-vector.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] overflow-hidden'
        }
      >
        <img
          data-scroll
          data-scroll-speed={0.0985}
          ref={img}
          src={'/assets/placeholder.avif'}
          alt={'placeholder'}
          className={'w-full h-[120vh] object-cover'}
        />
      </div>

      <div
        className={
          'absolute -top-10 md:top-20 left-0 w-full h-fit transition-all pointer-events-none'
        }
      >
        <h1
          data-scroll
          data-scroll-speed={-0.0985}
          className={
            'uppercase font-canela text-[11.125vw] lg:text-[9.725vw] w-full leading-none m-auto text-center select-none cursor-default'
          }
        >
          The boutique experiece
        </h1>
      </div>
      <Flair parent={arch}>Click me</Flair>
      <div
        data-scroll
        data-scroll-speed={0.2125}
        className={'w-full flex justify-between items-end -mt-12'}
      >
        <div className={'basis-1/2 lg:basis-1/3'}>
          <div className={'w-fit p-5 rounded-full border border-black/25'}>
            <ArrowDownIcon className={'size-6 self-center text-black'} />
          </div>
        </div>
        <div className={'max-lg:hidden lg:basis-1/3'}>
          <p
            className={
              'text-balance text-center leading-tight max-w-72 m-auto uppercase'
            }
          >
            Welcome to the Southwestern Evoia
          </p>
        </div>
        <div
          className={'basis-1/2 lg:basis-1/3 flex justify-start lg:justify-end'}
        >
          <div className={'max-w-80 flex flex-col gap-4'}>
            <Logo.Mark className={'size-10'} />
            <p className={'text-balance text-sm md:text-xl font-canela'}>
              Nestled in the serene coastal village of Limni, our hotel offers a
              perfect blend of traditional charm and modern comfort. Welcome
              home!
            </p>
            <Link href={'/rooms'} className={'uppercase'}>
              Get directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
