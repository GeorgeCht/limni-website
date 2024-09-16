'use client'

import React from 'react'

import { Logo } from '../vectors/logo'
import { MenuIcon } from '../vectors/menu'
import { Button } from '../ui/button'
import { Link } from 'next-view-transitions'
import { HeaderFlyout } from './flyout'
import { cn } from '@/lib/utils'

export const HeaderRoot = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <HeaderFlyout isOpen={isOpen} setIsOpen={setIsOpen} />
      <header
        className={
          'sticky top-0 z-[9999] flex w-full justify-between items-center py-8 md:py-14 px-10 md:px-20 transition-all'
        }
        {...props}
      >
        <div
          className={cn(
            'basis-1/3 max-[460px]:basis-1/2 flex items-center gap-5',
            isOpen ? 'text-white' : 'text-black',
          )}
        >
          <div
            role={'button'}
            className={'flex items-center gap-4'}
            onClick={() => setIsOpen((state) => !state)}
          >
            <MenuIcon className={'transition-all delay-[255ms]'} />
            <span className={'uppercase transition-all delay-[255ms] min-w-14'}>
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </div>
          {children}
        </div>
        <div
          className={cn(
            'basis-1/3 flex items-center justify-center max-[360px]:hidden',
            isOpen ? 'text-white' : 'text-black',
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
            isOpen ? 'text-white' : 'text-black',
          )}
        >
          <Link
            className={'max-xl:hidden transition-all delay-[255ms]'}
            href={'tel:0030694443433'}
          >
            +30 69444 34 3343
          </Link>
          <Button
            className={cn(
              'max-md:hidden transition-all border delay-[255ms]',
              isOpen
                ? 'text-white bg-transparent border-white'
                : 'bg-black text-white border-transparent',
            )}
          >
            Book your room
          </Button>
          <Button
            className={
              'md:hidden max-[474px]:text-sm transition-all delay-[255ms]'
            }
          >
            Book now
          </Button>
        </div>
      </header>
    </React.Fragment>
  )
}
