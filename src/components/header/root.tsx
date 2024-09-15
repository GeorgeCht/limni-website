'use client'

import type React from 'react'

import { Logo } from '../vectors/logo'
import { MenuIcon } from '../vectors/menu'
import { Button } from '../ui/button'
import { Link } from 'next-view-transitions'

export const HeaderRoot = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <header
      className={
        'sticky top-0 z-50 flex w-full justify-between items-center py-8 md:py-14 px-10 md:px-20 transition-all'
      }
      {...props}
    >
      <div
        className={'basis-1/3 max-[460px]:basis-1/2 flex items-center gap-5'}
      >
        <div role={'button'} className={'flex items-center gap-4'}>
          <MenuIcon />
          <span className={'uppercase'}>Menu</span>
        </div>
        {children}
      </div>
      <div
        className={
          'basis-1/3 flex items-center justify-center max-[460px]:hidden'
        }
      >
        <Link href={'/'} className={'w-fit inline-block'}>
          <Logo.Root className={'w-32 md:w-40 max-md:hidden transition-all'} />
          <Logo.Mark className={'size-10 md:hidden transition-all'} />
        </Link>
      </div>
      <div
        className={
          'basis-1/3 max-[460px]:basis-1/2 flex justify-end items-center gap-5'
        }
      >
        <Link className={'max-xl:hidden'} href={'tel:0030694443433'}>
          +30 69444 34 3343
        </Link>
        <Button className={'max-md:hidden'}>Book your room</Button>
        <Button className={'md:hidden max-[474px]:text-sm'}>Book now</Button>
      </div>
    </header>
  )
}
