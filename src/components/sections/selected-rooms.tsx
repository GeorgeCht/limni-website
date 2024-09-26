'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useGSAP } from '@gsap/react'
import { Link } from 'next-view-transitions'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const SelectedRooms = ({ className, ...props }: Props) => {
  return (
    <section
      className={cn(
        'relative flex flex-col gap-10 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        className,
      )}
      {...props}
    >
      <div role={'contentinfo'} className={'flex lg:flex-row flex-col gap-20'}>
        <div className={'w-full h-[90vw] lg:h-[50vw] lg:w-1/2 relative'}>
          <div
            className={
              'block w-[80%] absolute top-0 right-0 aspect-[20/25] overflow-hidden'
            }
          >
            <img
              data-scroll
              data-scroll-speed={-0.0625}
              src={'/assets/placeholder.avif'}
              alt={'placeholder'}
              className={'object-cover w-full h-full'}
            />
          </div>
          <div
            className={'block w-[30%] absolute bottom-0 left-0 aspect-[20/25]'}
          >
            <img
              data-scroll
              data-scroll-speed={0.0625}
              src={'/assets/placeholder.avif'}
              alt={'placeholder'}
              className={'object-cover w-full h-full'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed={0.0625}
            className={'flex flex-col gap-6 absolute top-0 left-0 mt-16'}
          >
            <p className={'uppercase text-balance'}>Guest's favorite</p>
            <h2
              className={
                'max-w-[768px] font-canela text-balance text-6xl md:text-8xl leading-none'
              }
            >
              Superior balcony view
            </h2>
          </div>
        </div>
        <div
          className={
            'w-full lg:w-1/2 flex flex-col items-start justify-center gap-12'
          }
        >
          <div className={'flex flex-col gap-4'}>
            <p className={'uppercase'}>
              3 Visitors / 2 Beds / 30m<sup>2</sup>
            </p>
            <h3
              className={
                'font-canela text-balance max-w-[768px] text-2xl md:text-3xl'
              }
            >
              Depuis 40 ans, amoureux de la vie en mer sous toutes ses formes,
              nous avons. moureux de la vie en mer sous toutes ses formes, nous
              avons.
            </h3>
          </div>
          <HoverFlip.Link href={'/rooms'} className={'uppercase'}>
            Check availability
          </HoverFlip.Link>
          <div className={'flex w-full justify-between items-center mt-12'}>
            <div className={'flex gap-3'}>
              <button
                type={'button'}
                className={
                  'size-24 flex items-center justify-center border border-black/25 hover:border-black/75 leading-none transition-all rounded-full uppercase'
                }
              >
                Prev
              </button>
              <button
                type={'button'}
                className={
                  'size-24 flex items-center justify-center border border-black/25 hover:border-black/75 leading-none transition-all rounded-full uppercase'
                }
              >
                Next
              </button>
            </div>
            <span>1/3</span>
          </div>
        </div>
      </div>
    </section>
  )
}
