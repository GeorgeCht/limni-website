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
  > {
  theme?: 'dark' | 'light'
}

export const RoomsDisplay = ({
  theme = 'dark',
  className,
  ...props
}: Props) => {
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const section = React.useRef<HTMLElement>(null)
  const listItems = React.useRef<Array<HTMLLIElement | null>>([])

  const handleMouseEnter = (index: number) => {
    setIsTransitioning(true)
    gsap.to(listItems.current[index], {
      width: '40%',
      duration: 0.275,
      onComplete: () => setIsTransitioning(false),
      onInterrupt: () => setIsTransitioning(false),
    })
    listItems.current
      .filter((_, i) => i !== index)
      .forEach((element) => {
        gsap.to(element, {
          width: '30%',
          duration: 0.275,
          onComplete: () => setIsTransitioning(false),
          onInterrupt: () => setIsTransitioning(false),
        })
      })
  }

  useGSAP(() => {
    gsap.to(listItems.current[2], {
      width: '40%',
      duration: 0.275,
    })
    // get first two elements
    Array.from(listItems.current)
      .slice(0, 2)
      .forEach((element) => {
        gsap.to(element, {
          width: '30%',
          duration: 0.275,
        })
      })
  })

  const handleMouseLeave = () => {
    if (!isTransitioning) {
      listItems.current.forEach((element) => {
        gsap.to(element, {
          width: '33.333%',
          duration: 0.275,
        })
      })
    }
  }

  const roomCategories = [
    {
      title: 'Premium Rooms',
      href: '/categories/premium',
      image: '/assets/placeholder.avif',
      count: 10,
    },
    {
      title: 'Deluxe Rooms',
      href: '/categories/deluxe',
      image: '/assets/placeholder.avif',
      count: 4,
    },
    {
      title: 'Suites',
      href: '/categories/suites',
      image: '/assets/placeholder.avif',
      count: 3,
    },
  ]

  return (
    <section
      ref={section}
      className={cn(
        'relative flex flex-col gap-10 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        theme === 'dark' ? 'bg-[#414135] text-[#E7E0D5]' : 'text-[#414135]',
        className,
      )}
      {...props}
    >
      <div className={'flex max-[1280px]:flex-col gap-10 items-end w-full'}>
        <h2
          className={
            'w-full min-[1280px]:w-1/2 font-canela text-5xl text-balance md:text-7xl leading-none'
          }
        >
          Explore our rooms
        </h2>
        <div
          className={
            'w-full min-[1280px]:w-1/2 flex max-sm:flex-col justify-between items-end gap-4'
          }
        >
          <p
            className={
              'w-full sm:max-w-1/2 text-balance font-canela text-lg md:text-xl'
            }
          >
            Nestled in the serene coastal village of Limni, our hotel offers a
            perfect blend of traditional charm and modern comfort. Dear visitor,
            welcome home!
          </p>
          <div className={'w-full'}>
            <HoverFlip.Link
              href={'/rooms'}
              className={'uppercase w-full text-start sm:text-end'}
            >
              View all rooms
            </HoverFlip.Link>
          </div>
        </div>
      </div>
      <ul className={'flex max-lg:flex-col gap-10 *:h-[50vh]'}>
        {roomCategories.map((category, index) => {
          return (
            <li
              ref={(element) => {
                listItems.current[index] = element
              }}
              key={`${category.title}-${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              className={'group relative w-full lg:w-1/3 bg-black'}
            >
              <Link
                className={
                  'relative w-full h-full flex flex-col items-center justify-between p-6'
                }
                href={category.href}
              >
                <img
                  src={'/assets/placeholder.avif'}
                  alt={'placeholder'}
                  className={
                    'absolute top-0 left-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all z-0'
                  }
                />
                <span
                  className={
                    'text-white z-10 uppercase opacity-0 transition-all group-hover:opacity-100'
                  }
                >
                  ({category.count} Available)
                </span>
                <div
                  className={
                    'flex flex-col gap-4 text-white text-center z-10 opacity-0 transition-all group-hover:opacity-100'
                  }
                >
                  <h3 className={'font-canela text-3xl md:text-5xl text-white'}>
                    {category.title}
                  </h3>
                  <HoverFlip.Root className={'uppercase'}>
                    Discover more
                  </HoverFlip.Root>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}