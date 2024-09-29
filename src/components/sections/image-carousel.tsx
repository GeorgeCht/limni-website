'use client'

import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'

import type { Media } from '@/payload-types'
import { Flair } from '@/components/ui/flair'
import { useLocale } from '@/stores/locale'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref'
  > {
  images: Array<Media>
}

export const ImageCarousel = ({ images, className, ...props }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { locale } = useLocale()
  return (
    <section
      ref={ref}
      className={cn(
        'relative w-full h-fit py-12 md:py-20 px-10 md:px-20 pr-0 md:pr-0 transition-all cursor-grab active:cursor-grabbing',
        className,
      )}
      {...props}
    >
      <Carousel
        opts={{
          align: 'start',
        }}
        className={'w-full'}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className={
                'md:basis-1/2 lg:basis-5/6 basis-5/6 aspect-square lg:aspect-video pr-4 lg:pr-8'
              }
            >
              <div className={'relative size-full'}>
                <img
                  src={image.url!}
                  alt={image.alt}
                  className={'object-cover absolute inset-0 w-full h-full'}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Flair
        parent={ref}
        className={'bg-transparent border border-black text-black'}
      >
        <span className={'p-4 leading-none text-center'}>
          {locale === 'en' ? 'Drag to slide' : 'Σύρετε'}
        </span>
      </Flair>
    </section>
  )
}
