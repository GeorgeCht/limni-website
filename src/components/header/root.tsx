'use client'

import React from 'react'
import gsap from 'gsap'
import useDetectScroll from '@smakss/react-scroll-direction'

import { cn } from '@/lib/utils'
import { Logo } from '@/components/vectors/logo'
import { MenuIcon } from '@/components/vectors/menu'
import { Button } from '@/components/ui/button'
import { HoverFlip } from '@/components/ui/hoverflip'

import { Link } from 'next-view-transitions'
import { HeaderFlyout } from './flyout'
import { HeaderCTA } from './cta'

import { useGSAP } from '@gsap/react'
import { useLocale } from '@/stores/locale'
import { staticData } from '@/lib/static'

export const HeaderRoot = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const header = React.useRef<HTMLElement>(null)

  const { locale } = useLocale()
  const { scrollDir, scrollPosition } = useDetectScroll()

  const [ctaIsOpen, setCtaIsOpen] = React.useState(false)
  const [flyoutIsOpen, setFlyoutIsOpen] = React.useState(false)

  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    return cleaned.length > 10
      ? cleaned.replace(/(\d{2})(\d{5})(\d{2})(\d+)/, '+$1 $2 $3 $4')
      : cleaned.replace(/(\d{5})(\d{2})(\d+)/, '$1 $2 $3')
  }

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
      <HeaderFlyout
        locale={locale}
        isOpen={flyoutIsOpen}
        setIsOpen={setFlyoutIsOpen}
      />
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
              {flyoutIsOpen ? (locale === 'en' ? 'Close' : 'Κλείσιμο') : 'Menu'}
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
          <Link
            href={'/'}
            className={'w-fit inline-block'}
            onClick={() => {
              setCtaIsOpen(false)
              setFlyoutIsOpen(false)
            }}
          >
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
            href={`tel:${staticData.menu.contact.phone}`}
          >
            {formatPhoneNumber(staticData.menu.contact.phone)}
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
            {locale === 'en'
              ? staticData.menu.cta.sm.en
              : staticData.menu.cta.sm.el}
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
            {locale === 'en'
              ? staticData.menu.cta.lg.en
              : staticData.menu.cta.lg.el}
          </Button>
        </div>
      </header>
    </React.Fragment>
  )
}
