'use client'

import React from 'react'
import { useScroller } from '@/components/providers/scroll'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    setTimeout(() => {
      // window.scrollTo({ top: 0, behavior: 'instant' })
      // if (scroller) {
      //   scroller.scrollTo(0)
      // } else {
      //   window.scrollTo({ top: 0, behavior: 'instant' })
      // }
    }, 100)
  }, [])

  return children
}
