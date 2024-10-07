'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'
import { HoverFlip } from '@/components/ui/hoverflip'

import type { Media, Room } from '@/payload-types'
import type { LocalizedString } from '@/lib/locale'

interface Rooms {
  id?: string | null
  room: string | Room
  image: string | Media
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

  const roomName = React.useRef<HTMLHeadingElement>(null)
  const roomCategory = React.useRef<HTMLParagraphElement>(null)
  const roomCover = React.useRef<HTMLImageElement>(null)
  const roomImage = React.useRef<HTMLImageElement>(null)
  const roomDetails = React.useRef<HTMLParagraphElement>(null)
  const roomParagraph = React.useRef<HTMLParagraphElement>(null)
  const roomCTA = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

    // Animate roomCover (image on top-right)
    tl.fromTo(
      roomCover.current,
      { x: selectedRoom === 0 ? 25 : -25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 },
    )

    // Animate roomName (text section)
    tl.fromTo(
      roomName.current,
      { x: 25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 },
      '-=0.4',
    )

    // Animate roomCategory (text section)
    tl.fromTo(
      roomCategory.current,
      { x: 25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 },
      '-=0.4',
    )

    // Animate roomImage (image on bottom-left)
    tl.fromTo(
      roomImage.current,
      { x: 35, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.4',
    )

    // Animate roomDetails (text section)
    tl.fromTo(
      roomDetails.current,
      { x: 25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 },
      '-=0.4',
    )

    // Animate roomParagraph (paragraph section)
    tl.fromTo(
      roomParagraph.current,
      { x: 25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 },
      '-=0.4',
    )

    // Animate roomCTA (button)
    tl.fromTo(
      roomCTA.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      '-=0.4',
    )

    // Cleanup the previous animations
    return () => {
      tl.kill()
    }
  }, [selectedRoom])

  return (
    <section
      className={cn(
        'relative flex flex-col gap-10 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        className,
      )}
      {...props}
    >
      <div
        role={'contentinfo'}
        className={'flex lg:flex-row flex-col gap-20 justify-center'}
      >
        <div
          className={
            'relative w-full h-[90vw] lg:h-[50vw] lg:w-1/2 max-w-[860px] max-h-[896px]'
          }
        >
          <div
            className={
              'block w-[80%] absolute top-0 right-0 aspect-[20/25] overflow-hidden'
            }
          >
            <img
              ref={roomCover}
              // data-scroll
              // data-scroll-speed={-0.0625}
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
              ref={roomImage}
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
            <p ref={roomCategory} className={'uppercase text-balance'}>
              {(rooms[selectedRoom].room as Room).category}
            </p>
            <h2
              ref={roomName}
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
            'w-full lg:w-1/2 flex flex-col items-start justify-center gap-12 max-w-[860px]'
          }
        >
          <div className={'flex flex-col gap-4'}>
            <p ref={roomDetails} className={'uppercase'}>
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
              ref={roomParagraph}
              className={
                'font-canela text-balance max-w-[768px] text-2xl md:text-3xl'
              }
            >
              {(
                (rooms[selectedRoom].room as Room).midSection
                  .paragraph as unknown as LocalizedString
              )[locale]! || ''}
            </p>
          </div>
          <span ref={roomCTA}>
            <HoverFlip.Link
              href={`/room/${(rooms[selectedRoom].room as Room).slug}`}
              className={'uppercase'}
            >
              {locale === 'en' ? 'Check availability' : 'Περισσότερα'}
            </HoverFlip.Link>
          </span>
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
