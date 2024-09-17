'use client'

import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap/all'

/**
 * Context for the ScrollProvider
 */
const ScrollContext = React.createContext<LocomotiveScroll | null>(null)

/**
 * Hook for accessing the LocomotiveScroll instance
 *
 * @returns {LocomotiveScroll | null} The LocomotiveScroll instance
 */
export const useScroller = () => {
  const context = React.useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScroller must be used within a ScrollProvider')
  }
  return context
}

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scroller, setScroller] = React.useState<LocomotiveScroll | null>(null)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll({
        initCustomTicker: (render) => {
          gsap.ticker.add(render)
        },
        destroyCustomTicker: (render) => {
          gsap.ticker.remove(render)
        },
      })

      setScroller(locomotiveScroll)

      return () => {
        locomotiveScroll.destroy()
      }
    }
  }, [])

  return (
    <ScrollContext.Provider value={scroller}>{children}</ScrollContext.Provider>
  )
}
