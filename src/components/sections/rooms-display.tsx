'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useGSAP } from '@gsap/react'
import { Link } from 'next-view-transitions'
import { useLocale } from '@/stores/locale'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme?: 'dark' | 'light'
  roomCount: {
    standard: number
    deluxe: number
    superior: number
  }
}

export const RoomsDisplay = ({
  theme = 'dark',
  roomCount,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()
  const [_, setIsTransitioning] = React.useState(false)

  const section = React.useRef<HTMLElement>(null)
  const listItems = React.useRef<Array<HTMLLIElement | null>>([])

  const hoverflips = React.useRef<Array<HTMLSpanElement | null>>([])
  const headings = React.useRef<Array<HTMLHeadingElement | null>>([])
  const availabilityCounts = React.useRef<Array<HTMLSpanElement | null>>([])

  const handleMouseEnter = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setIsTransitioning(true)
      gsap.to(listItems.current[index], {
        width: '50%',
        ease: 'circ.inOut',
        duration: 0.475,
        onComplete: () => setIsTransitioning(false),
        onInterrupt: () => setIsTransitioning(false),
      })

      gsap.to(availabilityCounts.current[index], {
        marginTop: 0,
        ease: 'circ.inOut',
        delay: 0.175,
        duration: 0.475,
      })

      gsap.to(headings.current[index], {
        scaleX: '125%',
        scaleY: '125%',
        marginTop: 0,
        ease: 'circ.inOut',
        delay: 0.125,
        duration: 0.475,
      })

      availabilityCounts.current
        .filter((_, i) => i !== index)
        .forEach((element) => {
          gsap.to(element, {
            marginTop: -10,
            duration: 0.475,
          })
        })

      headings.current
        .filter((_, i) => i !== index)
        .forEach((element) => {
          gsap.to(element, {
            scaleX: '100%',
            scaleY: '100%',
            marginTop: 10,
            duration: 0.475,
          })
        })

      listItems.current
        .filter((_, i) => i !== index)
        .forEach((element) => {
          gsap.to(element, {
            width: '24%',
            ease: 'circ.inOut',
            duration: 0.475,
            onComplete: () => setIsTransitioning(false),
            onInterrupt: () => setIsTransitioning(false),
          })
        })
    }
  }

  useGSAP(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
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
    }
  })

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    if (typeof window !== 'undefined')
      if (window.innerWidth >= 1024) {
        listItems.current.forEach((element) => {
          gsap.to(element, {
            width: '33.333%',
            duration: 0.275,
          })
        })
      } else {
        listItems.current.forEach((element) => {
          gsap.to(element, {
            width: '100%',
            duration: 0.275,
          })
        })
      }
  }

  const roomCategories = [
    {
      title: 'Standard',
      href: '/rooms',
      image: '/assets/placeholder.avif',
      count: roomCount.standard,
    },
    {
      title: 'Deluxe',
      href: '/rooms',
      image: '/assets/placeholder.avif',
      count: roomCount.deluxe,
    },
    {
      title: 'Superior',
      href: '/rooms',
      image: '/assets/placeholder.avif',
      count: roomCount.standard,
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
            'w-full min-[1280px]:w-1/2 font-canela text-balance text-6xl md:text-8xl leading-none'
          }
        >
          <span className={'max-w-[682px] inline-block'}>
            Explore our rooms
          </span>
        </h2>
        <div
          className={
            'w-full min-[1280px]:w-1/2 flex max-sm:flex-col justify-between items-end gap-4'
          }
        >
          <p
            className={
              'w-full sm:max-w-1/2 text-balance font-canela text-xl md:text-2xl'
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
              {locale === 'en' ? 'View all rooms' : 'Ολα τα δωμάτια'}
            </HoverFlip.Link>
          </div>
        </div>
      </div>
      <ul
        className={
          'flex w-full max-lg:flex-col gap-8 overflow-hidden *:md:h-[65vw] *:md:max-h-[65vh] *:h-auto'
        }
      >
        {roomCategories.map((category, index) => {
          return (
            <li
              ref={(element) => {
                listItems.current[index] = element
              }}
              key={`${category.title}-${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              className={
                'group relative w-full lg:w-1/3 aspect-square bg-black'
              }
            >
              <Link
                className={
                  'relative w-full h-full flex flex-col items-center justify-between p-6 overflow-hidden'
                }
                href={category.href}
              >
                <img
                  src={'/assets/placeholder.avif'}
                  alt={'placeholder'}
                  className={
                    'absolute top-0 left-0 w-full h-full object-cover md:opacity-100 max-md:opacity-60 group-hover:scale-110 group-hover:opacity-60 transition-all ease-in-out duration-[875ms] z-0'
                  }
                />
                <span
                  ref={(element) => {
                    availabilityCounts.current[index] = element
                  }}
                  className={
                    'text-white z-10 uppercase md:opacity-0 transition-all md:group-hover:opacity-100'
                  }
                >
                  ({category.count} Available)
                </span>
                <div
                  className={
                    'flex flex-col gap-4 text-white text-center z-10 md:opacity-0 transition-all md:group-hover:opacity-100'
                  }
                >
                  <h3
                    ref={(element) => {
                      headings.current[index] = element
                    }}
                    className={'font-canela text-3xl md:text-5xl text-white'}
                  >
                    {category.title}
                  </h3>
                  <HoverFlip.Root
                    ref={(element) => {
                      hoverflips.current[index] = element
                    }}
                    className={'uppercase'}
                  >
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
