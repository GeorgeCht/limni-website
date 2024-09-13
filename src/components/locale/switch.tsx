import React from 'react'

import { getLocale } from '@/lib/locale'
import { LocaleButton } from './button'

export const LocaleSwitch = async () => {
  const locale = await getLocale()
  return (
    <div role={'combobox'} className={'flex max-lg:hidden items-center gap-2'}>
      {(['en', 'el'] as const).map((l) => (
        <LocaleButton key={l} locale={l} currentLocale={locale} />
      ))}
    </div>
  )
}
