'use client'

import React from 'react'
import { useScroller } from '@/components/providers/scroll'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { scroller } = useScroller()

  React.useEffect(() => {
    setTimeout(() => {
      if (scroller) {
        scroller.scrollTo(0)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return children
}
