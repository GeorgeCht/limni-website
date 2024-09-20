'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'

interface FlairProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'ref'
  > {
  parent: React.RefObject<HTMLDivElement | null>
}

export const Flair = ({
  className,
  children,
  parent,
  ...props
}: FlairProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    if (!ref?.current || !parent.current) return

    const flairElement = ref.current
    const parentElement = parent.current

    // Initially hide the flair
    gsap.set(flairElement, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0,
    })

    const xTo = gsap.quickTo(flairElement, 'x', {
      duration: 0.875,
      ease: 'power3',
    })
    const yTo = gsap.quickTo(flairElement, 'y', {
      duration: 0.875,
      ease: 'power3',
    })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parentElement.getBoundingClientRect()
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      setIsVisible(isInside)

      if (isInside) {
        xTo(e.clientX)
        yTo(e.clientY)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    parentElement.addEventListener('mousemove', handleMouseMove)
    parentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove)
      parentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [parent])

  React.useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0,
      duration: 0.275,
      ease: 'power3',
    })
  }, [isVisible])

  return (
    <div
      ref={ref}
      role={'contentinfo'}
      className={cn(
        'fixed top-0 left-0 opacity-0 pointer-events-none size-36 bg-black text-white font-jetbrains rounded-full',
        'uppercase flex items-center justify-center',
        isVisible ? 'opacity-100' : 'opacity-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
