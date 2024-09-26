'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useGSAP } from '@gsap/react'
import { Link } from 'next-view-transitions'

const HeadingComponent = ({
  header,
  subtitle,
  description,
}: {
  header: string
  subtitle: string
  description: string
}) => {
  return (
    <div className={'flex max-lg:flex-col gap-10 w-full'}>
      <h4 className={'w-1/4 max-lg:w-full uppercase'}>{subtitle}</h4>
      <div
        className={
          'w-3/4 max-lg:w-full flex flex-row max-md:flex-col justify-between items-end gap-4'
        }
      >
        <h2
          className={
            'w-2/3 max-md:w-full font-canela text-balance text-6xl md:text-8xl leading-none'
          }
        >
          {header}
        </h2>
        <p className={'w-1/3 max-md:w-full text-balance font-canela'}>
          {description}
        </p>
      </div>
    </div>
  )
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme?: 'dark' | 'light'
}

export const RecommendedExperiences = ({
  theme = 'dark',
  className,
  ...props
}: Props) => {
  return (
    <section
      className={cn(
        'relative flex flex-col gap-14 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        theme === 'dark' ? 'bg-[#414135] text-[#E7E0D5]' : 'text-[#414135]',
        className,
      )}
      {...props}
    >
      <HeadingComponent
        header={'Experience a deluxe stay'}
        subtitle={'Boutique experiences'}
        description={
          "Whether you're seeking a peaceful retreat or an adventure-filled getaway, our hotel promises an unforgettable boutique experience."
        }
      />
      <div
        className={'flex max-[1280px]:flex-col-reverse items-end gap-10 w-full'}
      >
        <div className={'w-1/4 max-[1280px]:w-full flex flex-col gap-8'}>
          <p className={'max-w-96 text-balance font-canela'}>
            Nestled in the serene coastal village of Limni, our hotel offers a
            perfect blend of traditional charm and modern comfort.
          </p>
          <HoverFlip.Link href={'/experiences'} className={'uppercase w-fit'}>
            Learn more
          </HoverFlip.Link>
        </div>
        <ul
          className={
            'w-3/4 max-[1280px]:w-full flex flex-row max-[1280px]:flex-col gap-8 *:min-[1280px]:aspect-[7/10] *:aspect-square'
          }
        >
          <li className={'group relative w-full min-[1280px]:w-1/3 bg-black'}>
            <Link
              className={
                'relative w-full h-full flex flex-col items-center justify-between p-6'
              }
              href={'/'}
            >
              <img
                src={'/assets/placeholder.avif'}
                alt={'placeholder'}
                className={
                  'absolute top-0 left-0 w-full h-full object-cover md:opacity-100 max-md:opacity-60 group-hover:opacity-60 transition-all z-0'
                }
              />
              <span
                className={
                  'text-white z-10 uppercase md:opacity-0 transition-all md:group-hover:opacity-100'
                }
              >
                Available at summer
              </span>
              <h3
                className={
                  'font-canela text-4xl md:text-5xl md:opacity-0 transition-all md:group-hover:opacity-100 z-10'
                }
              >
                Boat Trips
              </h3>
              <HoverFlip.Root
                className={
                  'uppercase md:opacity-0 transition-all md:group-hover:opacity-100'
                }
              >
                Discover more
              </HoverFlip.Root>
            </Link>
          </li>
          <li className={'group relative w-full min-[1280px]:w-1/3 bg-black'}>
            <Link
              className={
                'relative w-full h-full flex flex-col items-center justify-between p-6'
              }
              href={'/'}
            >
              B
            </Link>
          </li>
          <li className={'group relative w-full min-[1280px]:w-1/3 bg-black'}>
            <Link
              className={
                'relative w-full h-full flex flex-col items-center justify-between p-6'
              }
              href={'/'}
            >
              C
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
