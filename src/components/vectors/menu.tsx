'use client'

import type React from 'react'

export const MenuIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={'28'}
      height={'9'}
      viewBox={'0 0 28 9'}
      fill={'none'}
      {...props}
    >
      <rect x={'8'} y={'7'} width={'20'} height={'2'} fill={'currentColor'} />
      <rect width={'22'} height={'2'} fill={'currentColor'} />
    </svg>
  )
}
