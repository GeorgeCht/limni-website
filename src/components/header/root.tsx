'use client'

import React from 'react'
import gsap from 'gsap'

import { Logo } from '../vectors/logo'
import { MenuIcon } from '../vectors/menu'
import { Button } from '../ui/button'
import { Link } from 'next-view-transitions'
import { HeaderFlyout } from './flyout'
import { cn } from '@/lib/utils'
import { HoverFlip } from '../ui/hoverflip'
import { HeaderCTA } from './cta'

import { useGSAP } from '@gsap/react'
import useDetectScroll from '@smakss/react-scroll-direction'

export const HeaderRoot = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const header = React.useRef<HTMLElement>(null)
  const { scrollDir, scrollPosition } = useDetectScroll()
  const [ctaIsOpen, setCtaIsOpen] = React.useState(false)
  const [flyoutIsOpen, setFlyoutIsOpen] = React.useState(false)

  useGSAP(() => {
    gsap.fromTo(
      header.current,
      {
        y: -35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
    )
  })

  React.useEffect(() => {
    if (scrollPosition.top < 150) {
      gsap.to(header.current, { y: 0 })
    } else {
      if (scrollDir === 'up') {
        gsap.to(header.current, { y: 0 })
      }
      if (scrollDir === 'down') {
        gsap.to(header.current, { y: -200 })
      }
    }
  }, [scrollDir, scrollPosition])

  return (
    <React.Fragment>
      <HeaderFlyout isOpen={flyoutIsOpen} setIsOpen={setFlyoutIsOpen} />
      <HeaderCTA
        isOpen={ctaIsOpen}
        setIsOpen={setCtaIsOpen}
        headerRef={header}
      />
      <header
        ref={header}
        className={
          'sticky top-0 z-[9999] flex w-full justify-between items-center py-8 md:py-14 px-10 md:px-20 opacity-0'
        }
        {...props}
      >
        <div
          className={cn(
            'basis-1/3 max-[460px]:basis-1/2 flex items-center gap-5',
            flyoutIsOpen || ctaIsOpen ? 'text-white' : 'text-black',
          )}
        >
          <div
            role={'button'}
            className={'flex items-center gap-4'}
            onClick={() => {
              setFlyoutIsOpen((state) => !state)
              setCtaIsOpen(false)
            }}
          >
            <MenuIcon className={'transition-all delay-[255ms]'} />
            <HoverFlip.Root
              className={'uppercase transition-all delay-[255ms] min-w-14'}
            >
              {flyoutIsOpen ? 'Close' : 'Menu'}
            </HoverFlip.Root>
          </div>
          {children}
        </div>
        <div
          className={cn(
            'basis-1/3 flex items-center justify-center max-[360px]:hidden',
            flyoutIsOpen || ctaIsOpen ? 'text-white' : 'text-black',
          )}
        >
          <Link href={'/'} className={'w-fit inline-block'}>
            <Logo.Root
              className={
                'w-32 md:w-40 max-md:hidden transition-all delay-[255ms]'
              }
            />
            <Logo.Mark
              className={'size-10 md:hidden transition-all delay-[255ms]'}
            />
          </Link>
        </div>
        <div
          className={cn(
            'basis-1/3 max-[460px]:basis-1/2 flex justify-end items-center gap-5',
            flyoutIsOpen || ctaIsOpen ? 'text-white' : 'text-black',
          )}
        >
          <HoverFlip.Link
            className={'max-xl:hidden transition-all delay-[255ms]'}
            href={'tel:0030694443433'}
          >
            +30 69444 34 3343
          </HoverFlip.Link>
          <Button
            onClick={() => setCtaIsOpen((state) => !state)}
            className={cn(
              'max-md:hidden border transition-all delay-[255ms]',
              flyoutIsOpen || ctaIsOpen
                ? 'text-white bg-transparent border-white'
                : 'bg-black text-white border-transparent',
            )}
          >
            Book your room
          </Button>
          <Button
            onClick={() => setCtaIsOpen((state) => !state)}
            className={cn(
              'md:hidden max-[474px]:text-sm border transition-all delay-[255ms]',
              flyoutIsOpen || ctaIsOpen
                ? 'text-white bg-transparent border-white'
                : 'bg-black text-white border-transparent',
            )}
          >
            Book now
          </Button>
        </div>
      </header>
    </React.Fragment>
  )
}
