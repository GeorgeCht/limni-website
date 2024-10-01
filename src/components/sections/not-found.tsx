'use client'

import type React from 'react'

import { useLocale } from '@/stores/locale'

export const NotFoundSection = ({
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const { locale } = useLocale()

  return (
    <section
      className={
        'relative h-screen min-[1628px]:min-h-dvh pb-10 md:pb-16 px-10 md:px-20 transition-all'
      }
      {...props}
    >
      <h1
        className={
          'text-center uppercase text-[11.125vw] lg:text-[9.725vw]  font-canela text-balance'
        }
      >
        {locale === 'en'
          ? 'Oops, page not found! :('
          : 'Δεν βρέθηκε η σελίδα! :('}
      </h1>
    </section>
  )
}
