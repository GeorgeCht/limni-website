'use client'

import React from 'react'
import gsap from 'gsap'

import { type LenisProps, type LenisRef, ReactLenis } from '@/lib/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface LenisProviderProps extends LenisProps {
  children: React.ReactNode
}

export const Lenis = ({ children, ...props }: LenisProviderProps) => {
  gsap.registerPlugin(ScrollTrigger)
  const lenisRef = React.useRef<LenisRef>(null)

  React.useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    /**
     * GSAP ScrollTrigger is not working with Lenis smooth scroll.
     *
     * This is a workaround to make it work.
     *
     * @see: https://gsap.com/community/forums/topic/34814-scrolltrigger-with-lenis-smooth-scroll-problem-with-the-scrollerproxy-setup/
     */
    lenisRef.current?.lenis?.on(
      'scroll',
      // biome-ignore lint/correctness/noUnusedVariables: Used for possible debugging
      ({ scroll, limit, velocity, direction, progress }) => {
        ScrollTrigger.update()
      },
    )

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  React.useEffect(() => {
    const heartbeatInterval = setInterval(() => {
      if (!lenisRef.current?.lenis?.isScrolling === true) {
        lenisRef.current?.lenis?.destroy()
        lenisRef.current?.lenis?.start()
      }
    }, 30000) // Check every 30 seconds

    return () => {
      clearInterval(heartbeatInterval)
    }
  }, [])

  return (
    <ReactLenis {...props} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}
