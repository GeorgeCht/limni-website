'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useGSAP } from '@gsap/react'
import { Link } from 'next-view-transitions'

const HeadingComponent = ({
  header,
  subtitle,
  description,
}: {
  header: string
  subtitle: string
  description: string
}) => {
  return (
    <div className={'flex max-lg:flex-col gap-10 w-full'}>
      <h4 className={'w-1/4 max-lg:w-full uppercase'}>{subtitle}</h4>
      <div
        className={
          'w-3/4 max-lg:w-full flex flex-row max-md:flex-col justify-between items-end gap-4'
        }
      >
        <h2
          className={
            'w-2/3 max-md:w-full font-canela text-balance text-6xl md:text-8xl leading-none'
          }
        >
          {header}
        </h2>
        <p className={'w-1/3 max-md:w-full text-balance font-canela'}>
          {description}
        </p>
      </div>
    </div>
  )
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme?: 'dark' | 'light'
}

export const RecommendedExperiences = ({
  theme = 'dark',
  className,
  ...props
}: Props) => {
  return (
    <section
      className={cn(
        'relative flex flex-col gap-14 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        theme === 'dark' ? 'bg-[#414135] text-[#E7E0D5]' : 'text-[#414135]',
        className,
      )}
      {...props}
    >
      <HeadingComponent
        header={'Experience a deluxe stay'}
        subtitle={'Boutique experiences'}
        description={
          "Whether you're seeking a peaceful retreat or an adventure-filled getaway, our hotel promises an unforgettable boutique experience."
        }
      />
      <div>content B</div>
    </section>
  )
}
