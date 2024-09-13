'use server'

import { getCookie, setCookie } from '@/lib/cookies'
import { revalidatePath } from 'next/cache'

const COOKIE_NAME = 'locale'

export type Locale = 'en' | 'el'

/**
 * Get the user's locale from the `locale` cookie.
 * @returns {Locale} The user's locale, or the default locale if the cookie is not set.
 */
export async function getLocale() {
  return (getCookie(COOKIE_NAME) as Locale) || ('en' as Locale)
}

/**
 * Set the user's locale in the `locale` cookie.
 *
 * @param {Locale} locale The locale to set in the `locale` cookie.
 */
export async function setLocale(locale: Locale) {
  setCookie(COOKIE_NAME, locale)
  revalidatePath('/page2')
}
