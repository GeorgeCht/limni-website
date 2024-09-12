import { cookies } from 'next/headers'

export function getCookie(name: string) {
  return cookies().get(name)?.value
}

export function setCookie(name: string, value: string) {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)
  cookies().set(name, value, {
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    expires,
  })
}
