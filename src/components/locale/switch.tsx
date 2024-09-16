'use client'

import React from 'react'

import type { Locale } from '@/lib/locale'
import { useLocale } from '@/stores/locale'
import { cn } from '@/lib/utils'

export const LocaleSwitch = () => {
  const { locale, setLocale } = useLocale()
  return (
    <div role={'combobox'} className={'flex max-lg:hidden items-center gap-2'}>
      {(['en', 'el'] as const).map((l) => (
        <button
          key={l}
          type={'button'}
          onClick={() => setLocale(l as unknown as Locale)}
          className={cn(
            'flex items-center justify-center rounded-full size-10 border transition-all delay-[255ms]',
            l === locale ? 'border-[currentColor]' : 'border-transparent',
          )}
        >
          {l === 'el' ? 'ΕΛ' : 'EN'}
        </button>
      ))}
    </div>
  )
}
