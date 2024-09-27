import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { HeroSection } from '@/components/sections/hero'
import { InfoTextCTA } from '@/components/sections/infotext-cta'
import { Prefooter } from '@/components/sections/prefooter'
import { RoomsDisplay } from '@/components/sections/rooms-display'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'
import { ImageCarousel } from '@/components/sections/image-carousel'

import type { Media, Room } from '@/payload-types'
import { SelectedRooms } from '@/components/sections/selected-rooms'
import { SplitCTA } from '@/components/sections/split-cta'

interface Rooms {
  room: string | Room
  image: string | Media
  id?: string | null | undefined
}

export const dynamic = 'force-static'

export default async function HomePage() {
  const payload = await getPayloadHMR({ config })
  const home = await payload.findGlobal({
    slug: 'home',
    depth: 3,
  })

  return (
    <div>
      <HeroSection />
      <SplitCTA
        headingSize={'sm'}
        title={'Deluxe Pool Side'}
        paragraph={
          'Enjoy your holiday in a spacious 30m² deluxe room with a pool view, perfect for a group of three. The room features a large bed, a sofa bed, and a wide range of amenities. This accommodation offers both comfort and tranquility.'
        }
        primaryButton={{
          text: 'Book now',
          url: '/room/pool-side',
        }}
        secondaryButton={{
          text: 'Book now',
          url: '/room/pool-side',
        }}
        frontImage={{
          src: '/api/media/file/placeholder2.avif',
          alt: 'alt',
        }}
        backImage={{
          src: '/api/media/file/placeholder.avif',
          alt: 'alt',
        }}
      />
      <SplitCTA
        direction={'right'}
        title={'Deluxe Pool Side'}
        paragraph={
          'Enjoy your holiday in a spacious 30m² deluxe room with a pool view, perfect for a group of three. The room features a large bed, a sofa bed, and a wide range of amenities. This accommodation offers both comfort and tranquility.'
        }
        primaryButton={{
          text: 'Book now',
          url: '/room/pool-side',
        }}
        secondaryButton={{
          text: 'Book now',
          url: '/room/pool-side',
        }}
        frontImage={{
          src: '/api/media/file/placeholder2.avif',
          alt: 'alt',
        }}
        backImage={{
          src: '/api/media/file/placeholder.avif',
          alt: 'alt',
        }}
      />
      <InfoTextCTA withImage className={'mt-20'} />
      <RoomsDisplay />
      <SelectedRooms rooms={home.fourth?.rooms as Array<Rooms>} />
      {/* <ImageCarousel images={mediaMock} /> */}
      {/* <RecommendedExperiences /> */}
      <Prefooter />
    </div>
  )
}
