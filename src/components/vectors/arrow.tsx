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

export const ArrowUpIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={'18'}
      height={'16'}
      viewBox={'0 0 18 16'}
      fill={'none'}
      {...props}
    >
      <path
        d={
          'M8.96073 0.113369L9.90595 1.05859L1.6171 9.34745L0.671875 8.40223L8.96073 0.113369Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M8.01345 1.0585L8.95867 0.113281L17.2475 8.40214L16.3023 9.34736L8.01345 1.0585Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M8.1451 0.929002L9.48184 0.929002L9.48185 15.8367H8.1451L8.1451 0.929002Z'
        }
        fill={'currentColor'}
      />
    </svg>
  )
}

export const ArrowOutbound = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={'12'}
      height={'12'}
      viewBox={'0 0 12 12'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M11.7222 0.00146782V1.33821H0L4.18368e-09 0.00146779L11.7222 0.00146782Z'
        }
        fill={'currentColor'}
      />
      <path
        d={'M10.3824 0L11.7191 4.18277e-09V11.7222H10.3824V0Z'}
        fill={'currentColor'}
      />
      <path
        d={
          'M10.5699 0.00146486L11.5151 0.946686L0.973762 11.488L0.0285409 10.5428L10.5699 0.00146486Z'
        }
        fill={'currentColor'}
      />
    </svg>
  )
}
