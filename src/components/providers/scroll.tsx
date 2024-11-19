'use client'

// import React from 'react'
// import LocomotiveScroll from 'locomotive-scroll'

// import type { ILenisScrollValues } from 'locomotive-scroll'
// import { gsap } from 'gsap/all'
// import { usePathname } from 'next/navigation'

// type ScrollHandler = (values: ILenisScrollValues) => void

// interface ScrollContextType {
//   scroller: LocomotiveScroll | null
//   setOnScroll: (handler: ScrollHandler) => void
// }

// const ScrollContext = React.createContext<ScrollContextType | null>(null)

// export const useScroller = () => {
//   const context = React.useContext(ScrollContext)
//   if (context === null) {
//     throw new Error('useScroller must be used within a ScrollProvider')
//   }
//   return context
// }

// export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
//   const [scroller, setScroller] = React.useState<LocomotiveScroll | null>(null)
//   const [scrollHandler, setScrollHandler] =
//     React.useState<ScrollHandler | null>(null)

//   const pathname = usePathname()

//   const setOnScroll = React.useCallback((handler: ScrollHandler) => {
//     setScrollHandler(() => handler)
//   }, [])

//   const internalScrollHandler = React.useCallback(
//     (values: ILenisScrollValues) => {
//       if (scrollHandler) {
//         scrollHandler(values)
//       }
//     },
//     [scrollHandler],
//   )

//   React.useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Disable smooth scroll on mobile
//       if (window.innerWidth < 1024) {
//         setScroller(null)
//         return
//       }
//       const locomotiveScroll = new LocomotiveScroll({
//         initCustomTicker: (render) => {
//           gsap.ticker.add(render)
//         },
//         destroyCustomTicker: (render) => {
//           gsap.ticker.remove(render)
//         },
//         scrollCallback: internalScrollHandler,
//       })

//       setScroller(locomotiveScroll)

//       return () => {
//         locomotiveScroll.destroy()
//       }
//     }
//   }, [internalScrollHandler])

// React.useEffect(() => {
//   if (scroller) {
//     window.scrollTo({ top: 0, behavior: 'instant' })
//     // scroller.scrollTo(0)
//   }
// }, [pathname])

//   return (
//     <ScrollContext.Provider value={{ scroller, setOnScroll }}>
//       {children}
//     </ScrollContext.Provider>
//   )
// }

import gsap from 'gsap'
import React from 'react'

import { usePathname } from 'next/navigation'
import { ReactLenis, useLenis } from '@/lib/lenis'
import { useEffect, useRef } from 'react'
import type { LenisRef } from 'lenis/dist/lenis-react.js'

function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenis = useLenis()
  const lenisRef = useRef<LenisRef | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  React.useEffect(() => {
    lenis?.stop()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      lenis?.start()
    }, 100)
  }, [pathname])

  return (
    <React.Fragment>
      <style jsx global>
        {`
          .pin-spacer {
            padding: 0 !important;
            height: 85vw !important;
          }
          @media (min-width: 1024px) {
            .pin-spacer {
              height: 66.6vw !important;
            }
          }
        `}
      </style>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        {children}
      </ReactLenis>
    </React.Fragment>
  )
}

export default LenisProvider
