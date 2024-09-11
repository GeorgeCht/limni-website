import type React from 'react'
import type { Metadata } from 'next'

import '../globals.css'

import { Providers } from '@/components/providers'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await import('@/lib/locale').then(({ getLocale }) => getLocale())
  return (
    <html lang={locale || 'en'} suppressHydrationWarning>
      <head>
        <link rel={'icon'} href={'/favicon.ico'} sizes={'32x32'} />
        <link rel={'icon'} href={'/favicon.svg'} type={'image/svg+xml'} />
      </head>
      <body>
        <Providers.PageTransition>{children}</Providers.PageTransition>
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
