import type { Locale } from '@/lib/locale'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocaleState {
  /**
   * The current locale
   */
  locale: Locale
  /**
   * The function to set the locale
   */
  setLocale: (locale: Locale) => void
}

export type InitialLocaleState = Pick<LocaleState, 'locale'>

export const initialState: InitialLocaleState = {
  locale: 'en',
}

/**
 * The locale store.
 *
 * This store is used to manage the locale client side.
 *
 * @example
 * ```ts
 * import { useLocale } from '@/stores/locale'
 *
 * const { locale, setLocale } = useLocale()
 * ```
 */
export const useLocale = create(
  persist<LocaleState>(
    (set) => ({
      ...initialState,
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'locale',
    },
  ),
)
