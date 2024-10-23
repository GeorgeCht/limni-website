'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from './hoverflip'

export const Button = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      type={'button'}
      className={cn(
        'flex items-center justify-center gap-3 rounded-full max-[474px]:px-4 max-[474px]:pt-3 max-[474px]:pb-2.5 px-6 pt-4 pb-3.5 bg-black text-white uppercase leading-none transition-all',
        className,
      )}
      {...props}
    >
      {typeof children === 'string' ? (
        <HoverFlip.Root>{children}</HoverFlip.Root>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </button>
  )
}
