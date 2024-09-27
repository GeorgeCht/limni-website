'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { Button } from '@/components/ui/button'
import { ArrowOutbound } from '@/components/vectors/arrow'

import { useTransitionRouter } from 'next-view-transitions'

const TextSection = ({
  title,
  paragraph,
  primaryButton,
  secondaryButton,
  topImage,
}: {
  title: string
  paragraph: string
  primaryButton: {
    text: string
    url: string
  }
  secondaryButton?: {
    text: string
    url: string
  }
  topImage: {
    src: string
    alt: string
  }
}) => {
  const router = useTransitionRouter()

  return (
    <div
      className={
        'w-full lg:w-[40%] flex flex-col items-start justify-center gap-12'
      }
    >
      <img
        src={topImage.src}
        alt={topImage.alt}
        className={'object-cover w-full aspect-square'}
      />
      <div className={'flex flex-col gap-4 lg:pt-20'}>
        <h3 className={'uppercase pb-2'}>{title}</h3>
        <p
          className={
            'font-canela text-balance max-w-[768px] text-2xl md:text-3xl'
          }
        >
          {paragraph}
        </p>
      </div>
      <div className={'flex flex-row items-center gap-14'}>
        <Button onClick={() => router.push(primaryButton.url)}>
          {primaryButton.text}
          <ArrowOutbound className={'ml-4'} />
        </Button>
        {secondaryButton && (
          <HoverFlip.Link href={secondaryButton.url} className={'uppercase'}>
            {secondaryButton.text}
          </HoverFlip.Link>
        )}
      </div>
    </div>
  )
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string
  paragraph: string
  primaryButton: {
    text: string
    url: string
  }
  secondaryButton?: {
    text: string
    url: string
  }
  topImage: {
    src: string
    alt: string
  }
  sideImage: {
    src: string
    alt: string
  }
}

export const VerticalCTA = ({
  title,
  paragraph,
  primaryButton,
  secondaryButton,
  topImage,
  sideImage,
  className,
  ...props
}: Props) => {
  return (
    <section
      className={cn(
        'relative flex flex-col gap-10 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        'lg:bg-[linear-gradient(180deg,_rgba(65,65,53,1)_0%,_rgba(65,65,53,1)_49.99%,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0)_100%)]',
        className,
      )}
      {...props}
    >
      <div
        role={'contentinfo'}
        className={cn('flex gap-10 md:gap-20 lg:flex-row flex-col')}
      >
        <TextSection
          title={title}
          paragraph={paragraph}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
          topImage={topImage}
        />
        <div
          className={
            'w-full lg:w-[60%] h-auto flex flex-col items-start justify-center gap-12'
          }
        >
          <img
            data-scroll
            data-scroll-speed={0.0625}
            src={sideImage.src}
            alt={sideImage.alt}
            className={'object-cover w-full h-full max-lg:aspect-square'}
          />
        </div>
      </div>
    </section>
  )
}
