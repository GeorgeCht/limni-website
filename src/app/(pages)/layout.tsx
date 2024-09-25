import '../globals.css'

import localFont from 'next/font/local'

import type React from 'react'
import type { Metadata } from 'next'

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

export default function PageLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    /**
     * @see: https://github.com/shuding/next-view-transitions
     * @see: https://next-view-transitions.vercel.app/
     */
    <ViewTransitions>
      <Providers.Root>
        <head>
          <link rel={'icon'} href={'/favicon.ico'} sizes={'32x32'} />
          <link rel={'icon'} href={'/favicon.svg'} type={'image/svg+xml'} />
        </head>
        <body
          className={cn(
            canela.variable,
            jetbrains.variable,
            'font-jetbrains text-black',
          )}
        >
          <Providers.Scroll>
            <Header.Root>
              <LocaleSwitch />
            </Header.Root>
            {children}
            <Footer.Root />
          </Providers.Scroll>
        </body>
      </Providers.Root>
    </ViewTransitions>
  )
}

export const metadata: Metadata = {
  title: 'Limni',
  twitter: {
    card: 'summary_large_image',
    creator: '@limni',
  },
}
