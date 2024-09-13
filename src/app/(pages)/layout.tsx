import '../globals.css'

import localFont from 'next/font/local'

import type React from 'react'
import type { Metadata } from 'next'

import { JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'

const canela = localFont({
  src: '../../../public/fonts/canela.ttf',
  variable: '--font-canela',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin', 'greek'],
  display: 'swap',
})

export default async function PageLayout({
  children,
}: { children: React.ReactNode }) {
  const locale = await import('@/lib/locale').then(({ getLocale }) =>
    getLocale(),
  )
  return (
    <html lang={locale || 'en'} suppressHydrationWarning>
      <head>
        <link rel={'icon'} href={'/favicon.ico'} sizes={'32x32'} />
        <link rel={'icon'} href={'/favicon.svg'} type={'image/svg+xml'} />
      </head>
      <body
        className={cn(canela.variable, jetbrains.variable, 'font-jetbrains')}
      >
        <Providers.PageTransition>
          <Providers.Lenis root>{children}</Providers.Lenis>
        </Providers.PageTransition>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Limni',
  twitter: {
    card: 'summary_large_image',
    creator: '@limni',
  },
}
