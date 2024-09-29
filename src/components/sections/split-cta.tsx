'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'
import { HoverFlip } from '@/components/ui/hoverflip'
import { Button } from '@/components/ui/button'
import { ArrowOutbound } from '@/components/vectors/arrow'
import { useTransitionRouter } from 'next-view-transitions'

import type { LocalizedString } from '@/lib/locale'
import type { Media } from '@/payload-types'

const ImagesSection = ({
  direction,
  frontImage,
  backImage,
}: {
  direction?: 'left' | 'right'
  frontImage: Media
  backImage: Media
}) => {
  return (
    <div className={'w-full h-[90vw] lg:h-[50vw] lg:w-1/2 relative'}>
      <div
        className={cn(
          'block w-[80%] absolute top-0 aspect-[20/25] overflow-hidden',
          direction === 'left' ? 'right-0' : 'left-0',
        )}
      >
        <img
          data-scroll
          data-scroll-speed={-0.0625}
          src={backImage.url!}
          alt={backImage.alt}
          className={'object-cover w-full h-full'}
        />
      </div>
      <div
        className={cn(
          'block w-[50%] absolute bottom-[25%] aspect-[20/25]',
          direction === 'left' ? 'left-0' : 'right-0',
        )}
      >
        <img
          data-scroll
          data-scroll-speed={0.0625}
          src={frontImage.url!}
          alt={frontImage.alt}
          className={'object-cover w-full h-full'}
        />
      </div>
    </div>
  )
}

const TextSection = ({
  title,
  paragraph,
  headingSize,
  primaryButton,
  secondaryButton,
}: {
  title: LocalizedString
  paragraph: LocalizedString
  headingSize: 'sm' | 'lg'
  primaryButton: {
    text: LocalizedString
    url: string
  }
  secondaryButton?: {
    text: LocalizedString
    url: string
  }
}) => {
  const { locale } = useLocale()
  const router = useTransitionRouter()

  return (
    <div
      className={
        'w-full lg:w-1/2 flex flex-col items-start justify-center gap-12'
      }
    >
      <div className={'flex flex-col gap-4'}>
        <h3
          className={cn(
            headingSize === 'sm'
              ? 'uppercase pb-4'
              : 'font-canela text-balance max-w-[768px] text-6xl md:text-8xl leading-none',
          )}
        >
          {locale === 'en' ? title.en : title.el}
        </h3>
        <p
          className={
            'font-canela text-balance max-w-[768px] text-2xl md:text-3xl'
          }
        >
          {locale === 'en' ? paragraph.en : paragraph.el}
        </p>
      </div>
      <div className={'flex flex-row items-center gap-14'}>
        <Button onClick={() => router.push(primaryButton.url)}>
          {locale === 'en'
            ? (primaryButton.text.en as string)
            : (primaryButton.text.el as string)}
          <ArrowOutbound className={'ml-4'} />
        </Button>
        {secondaryButton && (
          <HoverFlip.Link href={secondaryButton.url} className={'uppercase'}>
            {locale === 'en'
              ? (secondaryButton.text.en as string)
              : (secondaryButton.text.el as string)}
          </HoverFlip.Link>
        )}
      </div>
    </div>
  )
}

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'title'
  > {
  theme?: 'light' | 'dark'
  direction?: 'left' | 'right'
  headingSize?: 'sm' | 'lg'
  title: LocalizedString
  paragraph: LocalizedString
  primaryButton: {
    text: LocalizedString
    url: string
  }
  secondaryButton?: {
    text: LocalizedString
    url: string
  }
  frontImage: Media
  backImage: Media
}

export const SplitCTA = ({
  theme = 'light',
  direction = 'left',
  headingSize = 'lg',
  title,
  paragraph,
  primaryButton,
  secondaryButton,
  frontImage,
  backImage,
  className,
  ...props
}: Props) => {
  return (
    <section
      className={cn(
        'relative w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        theme === 'dark' && 'bg-[#414135] text-[#E7E0D5]',
        className,
      )}
      {...props}
    >
      <div
        role={'contentinfo'}
        className={cn(
          'flex gap-10 md:gap-20',
          direction === 'left'
            ? 'lg:flex-row flex-col'
            : 'lg:flex-row-reverse flex-col',
        )}
      >
        <ImagesSection
          direction={direction}
          frontImage={frontImage}
          backImage={backImage}
        />
        <TextSection
          title={title}
          paragraph={paragraph}
          headingSize={headingSize}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      </div>
    </section>
  )
}
