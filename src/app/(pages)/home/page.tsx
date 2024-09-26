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

export const dynamic = 'force-static'

export default async function HomePage() {
  const payload = await getPayloadHMR({ config })
  const home = await payload.findGlobal({
    slug: 'home',
    depth: 3,
  })

  home.fourth?.rooms?.forEach(async (room) => {
    ;(room.room as Room).media.images?.forEach((image) => {
      image as Media
    })
  })

  const mediaMock: Array<Media> = [
    {
      id: '123',
      alt: 'alt',
      updatedAt: '000',
      createdAt: '000',
      url: '/assets/placeholder.avif',
    },
    {
      id: '124',
      alt: 'alt',
      updatedAt: '000',
      createdAt: '000',
      url: '/assets/placeholder.avif',
    },
    {
      id: '125',
      alt: 'alt',
      updatedAt: '000',
      createdAt: '000',
      url: '/assets/placeholder.avif',
    },
    {
      id: '126',
      alt: 'alt',
      updatedAt: '000',
      createdAt: '000',
      url: '/assets/placeholder.avif',
    },
  ]

  return (
    <div>
      <HeroSection />
      <InfoTextCTA withImage className={'mt-20'} />
      <RoomsDisplay />
      <SelectedRooms />
      {/* <ImageCarousel images={mediaMock} /> */}
      {/* <RecommendedExperiences /> */}
      <Prefooter />
    </div>
  )
}
