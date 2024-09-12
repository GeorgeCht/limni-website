'use client'

import type React from 'react'
import gsap from 'gsap'

import { useEffect, useReducer, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const nodeRef = useRef(null)
  const pathname = usePathname()
  const hasInitialized = useRef(false)

  // this is used to force a re-render when the hash changes to avoid race conditions
  // by ensuring the DOM is updated before we running `getElementById` and `scrollIntoView`
  const [transitionTicker, dispatchTransitionTicker] = useReducer(
    (state: number) => state + 1,
    0,
  )

  const [hash, setHash] = useState<string>(() => {
    if (
      !(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
      )
    )
      return ''
    return window.location.hash
  })

  useEffect(() => {
    const fn = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', fn)

    return () => window.removeEventListener('hashchange', fn)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    if (hash) {
      const hashWithoutMark = hash.substring(1)
      const element = document.getElementById(hashWithoutMark)
      element?.scrollIntoView()
    }
  }, [hash, transitionTicker])

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    if (hasInitialized.current) {
      // Fade out
      gsap.to(nodeRef.current, {
        opacity: 0,
        duration: 0.485,
        onComplete: () => {
          window.scrollTo(0, 0)
          // Fade in
          gsap.to(nodeRef.current, {
            opacity: 1,
            duration: 0.485,
          })
        },
      })
    }
    hasInitialized.current = true
  }, [pathname, hasInitialized])

  useEffect(() => {
    if (hash) dispatchTransitionTicker()
  }, [hash])

  return (
    <div role={'main'} ref={nodeRef}>
      {children}
    </div>
  )
}
