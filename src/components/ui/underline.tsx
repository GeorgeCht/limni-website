'use client'

import type React from 'react'
import { cn } from '@/lib/utils'

import { useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import Link, { type LinkProps } from 'next/link'

interface Props extends LinkProps {
  underLineSize?: number
  active?: boolean
  backgroundExitPosition?: number
  className?: string
  children: React.ReactNode
}

export function AnimatedLink({ className, ...props }: Props) {
  const link = useRef<HTMLAnchorElement>(null)
  const [hovering, setHovering] = useState(false)

  const underLineSize = props.underLineSize || 2
  const active = props.active || false
  const backgroundExitPosition = props.backgroundExitPosition || 800

  return (
    <Transition nodeRef={link} in={hovering || active} timeout={400}>
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
          <span className={cn('font-canela uppercase', className)}>
            <Link
              {...props}
              ref={link}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{
                backgroundImage: 'linear-gradient(currentColor, currentColor)',
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPosition,
                textDecoration: 'none',
                backgroundRepeat: 'no-repeat',
                transition: `all ${transitionTime} ease-in-out`,
              }}
            >
              {props.children}
            </Link>
          </span>
        )
      }}
    </Transition>
  )
}
