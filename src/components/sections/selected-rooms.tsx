'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'
import { HoverFlip } from '@/components/ui/hoverflip'

import type { Media, Room } from '@/payload-types'
import type { LocalizedString } from '@/lib/locale'

interface Rooms {
  room: string | Room
  image: string | Media
  id?: string | null
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  rooms: Array<Rooms>
}

export const SelectedRooms = ({ rooms, className, ...props }: Props) => {
  const { locale } = useLocale()
  const [selectedRoom, setSelectedRoom] = React.useState(0)

  return (
    <section
      className={cn(
        'relative flex flex-col gap-10 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        className,
      )}
      {...props}
    >
      <div role={'contentinfo'} className={'flex lg:flex-row flex-col gap-20'}>
        <div className={'w-full h-[90vw] lg:h-[50vw] lg:w-1/2 relative'}>
          <div
            className={
              'block w-[80%] absolute top-0 right-0 aspect-[20/25] overflow-hidden'
            }
          >
            <img
              data-scroll
              data-scroll-speed={-0.0625}
              src={
                ((rooms[selectedRoom].room as Room).media.cover as Media).url!
              }
              alt={
                ((rooms[selectedRoom].room as Room).media.cover as Media).alt
              }
              className={'object-cover w-full h-full'}
            />
          </div>
          <div
            className={'block w-[30%] absolute bottom-0 left-0 aspect-[20/25]'}
          >
            <img
              data-scroll
              data-scroll-speed={0.0625}
              src={(rooms[selectedRoom].image as Media).url!}
              alt={(rooms[selectedRoom].image as Media).alt}
              className={'object-cover w-full h-full'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed={0.0625}
            className={'flex flex-col gap-6 absolute top-0 left-0 mt-16'}
          >
            <p className={'uppercase text-balance'}>
              {(rooms[selectedRoom].room as Room).category}
            </p>
            <h2
              className={
                'max-w-[768px] font-canela text-balance text-6xl md:text-8xl leading-none'
              }
            >
              {locale === 'en'
                ? (
                    (rooms[selectedRoom].room as Room)
                      .name as unknown as LocalizedString
                  ).en!
                : (
                    (rooms[selectedRoom].room as Room)
                      .name as unknown as LocalizedString
                  ).el!}
            </h2>
          </div>
        </div>
        <div
          className={
            'w-full lg:w-1/2 flex flex-col items-start justify-center gap-12'
          }
        >
          <div className={'flex flex-col gap-4'}>
            <p className={'uppercase'}>
              {(() => {
                const details = (rooms[selectedRoom].room as Room).roomDetails
                switch (locale) {
                  case 'en':
                    return (
                      <React.Fragment>
                        {details.visitors} Guests / {details.beds} Beds /{' '}
                        {details.area}m<sup>2</sup>
                      </React.Fragment>
                    )
                  case 'el':
                    return (
                      <React.Fragment>
                        {details.visitors} Επισκεπτες / {details.beds}{' '}
                        {details.beds === 1 ? 'Κρεβατι' : 'Κρεβατια'} /{' '}
                        {details.area}μ<sup>2</sup>
                      </React.Fragment>
                    )
                }
              })()}
            </p>
            <p
              className={
                'font-canela text-balance max-w-[768px] text-2xl md:text-3xl'
              }
            >
              {locale === 'en'
                ? (
                    (rooms[selectedRoom].room as Room).midSection
                      .paragraph as unknown as LocalizedString
                  ).en!
                : (
                    (rooms[selectedRoom].room as Room).midSection
                      .paragraph as unknown as LocalizedString
                  ).el!}
            </p>
          </div>
          <HoverFlip.Link
            href={`/room/${(rooms[selectedRoom].room as Room).slug}`}
            className={'uppercase'}
          >
            {locale === 'en' ? 'Check availability' : 'Περισσότερα'}
          </HoverFlip.Link>
          <div className={'flex w-full justify-between items-center mt-12'}>
            <div className={'flex gap-3'}>
              <button
                type={'button'}
                onClick={() => {
                  setSelectedRoom((state) =>
                    state === 0 ? rooms.length - 1 : state - 1,
                  )
                }}
                className={
                  'size-24 flex items-center justify-center border border-black/25 hover:border-black/75 leading-none transition-all rounded-full uppercase'
                }
              >
                {locale === 'en' ? 'Prev' : 'Προηγ'}
              </button>
              <button
                type={'button'}
                onClick={() => {
                  setSelectedRoom((state) =>
                    state === rooms.length - 1 ? 0 : state + 1,
                  )
                }}
                className={
                  'size-24 flex items-center justify-center border border-black/25 hover:border-black/75 leading-none transition-all rounded-full uppercase'
                }
              >
                {locale === 'en' ? 'Next' : 'Επομ'}
              </button>
            </div>
            <span>
              {selectedRoom + 1} / {rooms.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
