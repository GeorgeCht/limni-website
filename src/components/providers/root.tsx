'use client'

import { useLocale } from '@/stores/locale'

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      {children}
    </html>
  )
}
