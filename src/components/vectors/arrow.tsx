'use client'

import type React from 'react'

export const ArrowDownIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={'16'}
      height={'37'}
      viewBox={'0 0 16 37'}
      fill={'none'}
      {...props}
    >
      <path
        d={
          'M7.29289 36.7071C7.68342 37.0976 8.31658 37.0976 8.70711 36.7071L15.0711 30.3431C15.4616 29.9526 15.4616 29.3195 15.0711 28.9289C14.6805 28.5384 14.0474 28.5384 13.6569 28.9289L8 34.5858L2.34314 28.9289C1.95262 28.5384 1.31945 28.5384 0.92893 28.9289C0.538406 29.3195 0.538406 29.9526 0.92893 30.3431L7.29289 36.7071ZM7 0.5L7 36L9 36L9 0.5L7 0.5Z'
        }
        fill={'currentColor'}
      />
    </svg>
  )
}