'use client'

import React from 'react'

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
