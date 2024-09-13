'use client'

import type React from 'react'

import { useRouter } from 'next/navigation'
import { setLocale, type Locale } from '@/lib/locale'
import { cn } from '@/lib/utils'

interface Props {
  locale: Locale
  currentLocale: Locale
}

export const LocaleButton = ({ locale, currentLocale }: Props) => {
  const router = useRouter()

  const handleClick = async () => {
    await setLocale(locale)
    router.refresh()
  }

  return (
    <button
      type={'button'}
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center rounded-full size-10 border transition-all',
        locale === currentLocale ? 'border-black' : 'border-transparent',
      )}
    >
      {locale === 'el' ? 'ΕΛ' : 'EN'}
    </button>
  )
}
