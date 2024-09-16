'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
import { useGSAP } from '@gsap/react'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const HeaderFlyout = ({
  children,
  isOpen,
  setIsOpen,
  className,
  ...props
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        ref.current,
        { yPercent: -100, height: 0 },
        { yPercent: 0, height: '100%', duration: 0.985, ease: 'circ.inOut' },
      )
    } else {
      gsap.to(ref.current, {
        yPercent: 100,
        duration: 0.825,
        ease: 'circ.inOut',
      })
    }
  }, [isOpen])

  return (
    <div
      ref={ref}
      role={'dialog'}
      className={cn(
        'w-dvw h-0 z-[9998] bg-emerald-500 fixed top-0 left-0 overflow-hidden',
        className,
      )}
      {...props}
    >
      <ul
        role={'navigation'}
        className={
          'flex flex-col items-center justify-center gap-1 w-full h-full'
        }
      >
        <li className={'flex items-start gap-5'}>
          <Link
            href={'/rooms'}
            className={
              'font-canela text-white max-sm:text-5xl max-lg:text-6xl text-[6.125vw] leading-none uppercase'
            }
          >
            Find a room
          </Link>
          <span className={'text-white text-sm'}>01</span>
        </li>
        <li className={'flex items-start gap-5'}>
          <Link
            href={'/rooms'}
            className={
              'font-canela text-white max-sm:text-5xl max-lg:text-6xl text-[6.125vw] leading-none uppercase'
            }
          >
            Our Hotel
          </Link>
          <span className={'text-white text-sm'}>02</span>
        </li>
        <li className={'flex items-start gap-5'}>
          <Link
            href={'/rooms'}
            className={
              'font-canela text-white max-sm:text-5xl max-lg:text-6xl text-[6.125vw] leading-none uppercase'
            }
          >
            Experience
          </Link>
          <span className={'text-white text-sm'}>03</span>
        </li>
        <li className={'flex items-start gap-5'}>
          <Link
            href={'/rooms'}
            className={
              'font-canela text-white max-sm:text-5xl max-lg:text-6xl text-[6.125vw] leading-none uppercase'
            }
          >
            Contact us
          </Link>
          <span className={'text-white text-sm'}>04</span>
        </li>
        <li className={'flex items-start gap-5'}>
          <Link
            href={'/rooms'}
            className={
              'font-canela text-white max-sm:text-5xl max-lg:text-6xl text-[6.125vw] leading-none uppercase'
            }
          >
            FAQs
          </Link>
          <span className={'text-white text-sm'}>05</span>
        </li>
      </ul>
    </div>
  )
}
