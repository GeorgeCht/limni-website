'use client'

import type React from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

import { useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import Link, { type LinkProps } from 'next/link'

type Props = LinkProps & {
  underLineSize?: number
  active?: boolean
  backgroundExitPosition?: number
  className?: string
  children: React.ReactNode
}

export function AnimatedLink(props: Props) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [hovering, setHovering] = useState(false)
  const underLineSize = props.underLineSize || 2
  const active = props.active || false
  const backgroundExitPosition = props.backgroundExitPosition || 800

  return (
    <Transition nodeRef={linkRef} in={hovering || active} timeout={400}>
      {(state) => {
        let backgroundSize = `0 ${underLineSize}px`
        let backgroundPosition = '0 100%'
        let transitionTime = '0.5s'

        if (state !== 'exited') {
          backgroundSize = `100% ${underLineSize}px`
        }

        if (state === 'exiting') {
          backgroundPosition = `${backgroundExitPosition}px 100%`
        }

        if (state === 'exited') {
          transitionTime = '0s'
          backgroundPosition = '0 100%'
        }

        return (
          <Link
            {...props}
            ref={linkRef}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
              backgroundImage: 'linear-gradient(#000, #000)',
              backgroundSize: backgroundSize,
              backgroundPosition: backgroundPosition,
              textDecoration: 'none',
              backgroundRepeat: 'no-repeat',
              transition: `all ${transitionTime} ease-in-out`,
              paddingBottom: '3px',
            }}
          >
            {props.children}
          </Link>
        )
      }}
    </Transition>
  )
}
