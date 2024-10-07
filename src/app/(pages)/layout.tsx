import '../globals.css'

import localFont from 'next/font/local'

import type React from 'react'
import type { Metadata, Viewport } from 'next'

import { JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { LocaleSwitch } from '@/components/locale/switch'
import { ViewTransitions } from 'next-view-transitions'
import { Footer } from '@/components/footer'

const canela = localFont({
  src: '../../../public/fonts/canela.woff2',
  variable: '--font-canela',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin', 'greek'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Limni',
  description: 'Discover the best hotel in Limni',
}

export default function PageLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    /**
     * @see: https://github.com/shuding/next-view-transitions
     * @see: https://next-view-transitions.vercel.app/
     */
    <ViewTransitions>
      <Providers.Scroll>
        <Providers.Root>
          <head>
            <link rel={'icon'} href={'/icons/favicon.ico'} sizes={'32x32'} />
            <link
              rel={'icon'}
              href={'/icons/favicon.svg'}
              type={'image/svg+xml'}
            />
          </head>
          <body
            className={cn(
              canela.variable,
              jetbrains.variable,
              'font-jetbrains text-black',
            )}
          >
            <Header.Root>
              <LocaleSwitch />
            </Header.Root>
            {children}
            <Footer.Root />
          </body>
        </Providers.Root>
      </Providers.Scroll>
    </ViewTransitions>
  )
}
