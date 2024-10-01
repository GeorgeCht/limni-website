'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'

import type { LocalizedString } from '@/lib/locale'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: LocalizedString
  description: LocalizedString
}

export const ExperienceHero = ({
  name,
  description,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  return (
    <section
      className={cn(
        'relative w-full flex max-lg:flex-col gap-10 justify-end lg:justify-between items-start lg:items-end pt-12 md:pt-20 px-10 md:px-20',
        className,
      )}
      {...props}
    >
      <div className={'flex flex-col gap-1 w-full lg:w-[60%] overflow-hidden'}>
        <h1
          className={
            'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px]'
          }
        >
          {locale === 'en' ? name.en : name.el}
        </h1>
      </div>
      <div className={'flex flex-col gap-3 w-full lg:w-[40%]'}>
        <p className={'text-balance text-xl font-canela'}>
          {locale === 'en' ? description.en : description.el}
        </p>
        <HoverFlip.Link href={'/contact'} className={'uppercase'}>
          {locale === 'en' ? 'Contact us' : 'Επικοινωνία'}
        </HoverFlip.Link>
      </div>
    </section>
  )
}
