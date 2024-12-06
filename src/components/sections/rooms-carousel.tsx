'use client'

import React from 'react'

import type { Experience, Media, Room } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'
import { Logo } from '@/components/vectors/logo'
import { Link } from 'next-view-transitions'

export interface LocalizedRoom
  extends Omit<Room, 'name' | 'recommendedExperiences' | 'prefooter'> {
  name: LocalizedString
  recommendedExperiences: LocalizedObject<Experience>
  prefooter: {
    block: LocalizedObject<{
      subheader: string
      header: string
      line1: string
      line2: string
      url: string
      background: string | Media
      id?: string | null
      blockName?: string | null
      blockType: 'PreFooter'
    }>
  }
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  rooms: Array<LocalizedRoom>
  category: 'standard' | 'deluxe' | 'superior'
}

function sentenceCase(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

export const RoomCategoryCarousel = ({
  rooms,
  category,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  return (
    <React.Fragment>
      <section
        className={cn(
          'relative flex flex-col gap-14 w-full h-fit py-12 md:py-20 px-10 md:px-20 pr-0 md:pr-0 transition-all',
          className,
        )}
        {...props}
      >
        <h2
          className={
            'font-canela text-balance text-5xl md:text-7xl leading-none'
          }
        >
          {locale === 'en'
            ? `${sentenceCase(category)} Rooms`
            : `${sentenceCase(category)} Δωμάτια`}
        </h2>
      </section>
      <Carousel
        opts={{
          align: 'start',
        }}
        className={'w-full'}
      >
        <CarouselContent className={'cursor-grab active:cursor-grabbing'}>
          {rooms.map((room) => {
            return (
              <CarouselItem
                key={room.id}
                className={cn(
                  'md:basis-1/2 lg:basis-2/5 basis-4/5 pr-4 lg:pr-8',
                )}
              >
                <Link
                  className={'group flex flex-col gap-8 lg:gap-12'}
                  href={`/room/${room.slug}`}
                >
                  <div className={'relative aspect-[1.5] overflow-hidden'}>
                    <img
                      src={(room.media.cover as Media).url!}
                      alt={(room.media.cover as Media).alt}
                      className={
                        'object-cover absolute inset-0 w-full h-full group-hover:scale-105 transition-transform will-change-transform ease-in duration-200 hover:[view-transition-name:active-image]'
                      }
                    />
                  </div>
                  <div className={'flex flex-col gap-4 lg:gap-8'}>
                    <h3
                      className={
                        'font-canela text-balance text-3xl md:text-4xl lg:text-5xl leading-none select-none'
                      }
                    >
                      {room.name[locale]}
                    </h3>
                    <div
                      className={
                        'w-full flex max-[1780px]:flex-col gap-4 *:select-none'
                      }
                    >
                      <p
                        className={
                          'w-full min-[1780px]:w-3/4 font-canela text-balance text-xl line-clamp-3'
                        }
                      >
                        {
                          (
                            room.midSection
                              .paragraph as unknown as LocalizedString
                          )[locale]
                        }
                      </p>
                      <div
                        className={'w-full min-[1780px]:w-1/4 flex flex-col'}
                      >
                        <div className={'flex items-center gap-4 uppercase'}>
                          <Logo.Mark className={'size-4'} />
                          <span>
                            {locale === 'en' ? (
                              <React.Fragment>
                                {room.roomDetails.area}m<sup>2</sup>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                {room.roomDetails.area}μ<sup>2</sup>
                              </React.Fragment>
                            )}
                          </span>
                        </div>
                        <div className={'flex items-center gap-4 uppercase'}>
                          <Logo.Mark className={'size-4'} />
                          <span>
                            {locale === 'en' ? (
                              <React.Fragment>
                                {room.roomDetails.visitors} Guests
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                {room.roomDetails.visitors} Επισκεπτες
                              </React.Fragment>
                            )}
                          </span>
                        </div>
                        <div className={'flex items-center gap-4 uppercase'}>
                          <Logo.Mark className={'size-4'} />
                          <span>
                            {locale === 'en' ? (
                              <React.Fragment>
                                {room.roomDetails.beds} Beds
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                {room.roomDetails.beds}{' '}
                                {room.roomDetails.beds === 1
                                  ? 'Κρεβατι'
                                  : 'Κρεβατια'}
                              </React.Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </React.Fragment>
  )
}
