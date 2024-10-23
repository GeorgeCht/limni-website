'use client'

import React from 'react'

import { useLocale } from '@/stores/locale'

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useLocale()

  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 })
    }, 100)
  }, [])

  return (
    <html lang={locale} suppressHydrationWarning>
      {children}
    </html>
  )
}
