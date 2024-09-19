'use client'

import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'

import type { ILenisScrollValues } from 'locomotive-scroll'
import { gsap } from 'gsap/all'

type ScrollHandler = (values: ILenisScrollValues) => void

interface ScrollContextType {
  scroller: LocomotiveScroll | null
  setOnScroll: (handler: ScrollHandler) => void
}

const ScrollContext = React.createContext<ScrollContextType | null>(null)

export const useScroller = () => {
  const context = React.useContext(ScrollContext)
  if (context === null) {
    throw new Error('useScroller must be used within a ScrollProvider')
  }
  return context
}

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scroller, setScroller] = React.useState<LocomotiveScroll | null>(null)
  const [scrollHandler, setScrollHandler] =
    React.useState<ScrollHandler | null>(null)

  const setOnScroll = React.useCallback((handler: ScrollHandler) => {
    setScrollHandler(() => handler)
  }, [])

  const internalScrollHandler = React.useCallback(
    (values: ILenisScrollValues) => {
      if (scrollHandler) {
        scrollHandler(values)
      }
    },
    [scrollHandler],
  )

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Disable smooth scroll on mobile
      if (window.innerWidth < 1024) {
        setScroller(null)
        return
      }
      const locomotiveScroll = new LocomotiveScroll({
        initCustomTicker: (render) => {
          gsap.ticker.add(render)
        },
        destroyCustomTicker: (render) => {
          gsap.ticker.remove(render)
        },
        scrollCallback: internalScrollHandler,
      })

      setScroller(locomotiveScroll)

      return () => {
        locomotiveScroll.destroy()
      }
    }
  }, [internalScrollHandler])

  return (
    <ScrollContext.Provider value={{ scroller, setOnScroll }}>
      {children}
    </ScrollContext.Provider>
  )
}
