'use client'

import React from 'react'

import { useLocale } from '@/stores/locale'
import { useScroller } from '@/components/providers/scroll'

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const { scroller } = useScroller()
  const { locale } = useLocale()

  React.useEffect(() => {
    setTimeout(() => {
      if (scroller) {
        scroller.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo({ top: 0 })
      }
    }, 100)
  }, [])

  return (
    <html lang={locale} suppressHydrationWarning>
      {children}
    </html>
  )
}
