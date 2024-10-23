import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { Metadata } from 'next'
import type { Experience, Media } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'
import type { LocalizedRoom } from '@/components/sections/rooms-carousel'

import { RoomCategoryCarousel } from '@/components/sections/rooms-carousel'
import { RoomsHero } from '@/components/sections/rooms-hero'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'
import { Wrapper } from '@/components/misc/wrapper'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Limni | Rooms',
}

interface Experiences {
  header: string
  subtitle: string
  description: string
  paragraph: string
  experiences?: Array<{
    experience: string | Experience
    video?: (string | null) | Media
    id?: string | null
  }> | null
  id?: string | null
  blockName?: string | null
  blockType: 'SelectedExperiences'
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const rooms = await payload.find({
    collection: 'rooms',
    limit: 999,
  })

  return rooms.docs.map((room) => ({
    slug: room.slug as string,
  }))
}

export default async function RoomsPage() {
  const payload = await getPayloadHMR({ config })
  const roomsPage = await payload.findGlobal({
    slug: 'roomsPage',
    locale: 'all',
  })

  const findRoomsByCategory = async (category: string) => {
    return await payload.find({
      collection: 'rooms',
      locale: 'all',
      depth: 2,
      where: {
        category: {
          equals: category,
        },
      },
    })
  }

  const rooms = {
    standard: (await findRoomsByCategory('standard'))
      .docs as unknown as Array<LocalizedRoom>,
    deluxe: (await findRoomsByCategory('deluxe'))
      .docs as unknown as Array<LocalizedRoom>,
    superior: (await findRoomsByCategory('superior'))
      .docs as unknown as Array<LocalizedRoom>,
  }

  return (
    <Wrapper>
      <RoomsHero
        title={roomsPage.intro.title as unknown as LocalizedString}
        description={roomsPage.intro.paragraph as unknown as LocalizedString}
      />
      <RoomCategoryCarousel rooms={rooms.standard} category={'standard'} />
      <RoomCategoryCarousel rooms={rooms.deluxe} category={'deluxe'} />
      <RoomCategoryCarousel rooms={rooms.superior} category={'superior'} />
      <RecommendedExperiences
        className={'mt-12 md:mt-20'}
        experiences={
          roomsPage.recommendedExperiences as unknown as LocalizedObject<Experiences>
        }
      />
    </Wrapper>
  )
}
