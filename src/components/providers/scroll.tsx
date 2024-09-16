'use client'

import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap/all'

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  if (typeof window !== 'undefined') {
    const _ = new LocomotiveScroll({
      initCustomTicker: (render) => {
        gsap.ticker.add(render)
      },
      destroyCustomTicker: (render) => {
        gsap.ticker.remove(render)
      },
    })
  }

  return <React.Fragment>{children}</React.Fragment>
}
