import React from 'react'
import config from '@payload-config'

import { notFound } from 'next/navigation'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'
import { RoomHero } from '@/components/sections/room-hero'

import type { Experience, Media } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'

import { ImageCarousel } from '@/components/sections/image-carousel'
import { InfoTextCTA } from '@/components/sections/infotext-cta'
import { SplitCTA } from '@/components/sections/split-cta'
import { Prefooter } from '@/components/sections/prefooter'

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

interface PrefooterType {
  subheader: string
  header: string
  line1: string
  line2: string
  url: string
  background: string | Media
  id?: string | null
  blockName?: string | null
  blockType: 'PreFooter'
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const rooms = await payload.find({
    collection: 'rooms',
    limit: 999,
  })

  return rooms.docs.map((room) => ({
    slug: room.slug,
  }))
}

export default async function RoomPage({
  params,
}: { params: { slug: string } }) {
  const payload = await getPayloadHMR({ config })
  const result = await payload.find({
    collection: 'rooms',
    locale: 'all',
    depth: 2,
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  console.log(result)
  console.log(result.docs[0])

  const room = result.docs[0]
  const midSection = room.midSection

  if (!room) {
    return notFound()
  }

  return (
    <React.Fragment>
      <RoomHero
        code={room.roomEssentials.id}
        name={room.name as unknown as LocalizedString}
        paragraph={midSection.paragraph as unknown as LocalizedString}
        roomDetails={room.roomDetails}
        primaryButton={{
          text: midSection.cta[0].label as unknown as LocalizedString,
          url: midSection.cta[0].url,
        }}
        coverImage={room.media.cover as Media}
      />
      <ImageCarousel images={room.media.images as Array<Media>} />
      <InfoTextCTA
        title={midSection.title as unknown as LocalizedString}
        cta={{
          label: midSection.cta[0].label as unknown as LocalizedString,
          url: midSection.cta[0].url,
        }}
      />
      <SplitCTA
        headingSize={'sm'}
        title={midSection.title as unknown as LocalizedString}
        paragraph={midSection.paragraph as unknown as LocalizedString}
        primaryButton={{
          text: midSection.cta[0].label as unknown as LocalizedString,
          url: midSection.cta[0].url,
        }}
        frontImage={midSection.frontImage as Media}
        backImage={midSection.backImage as Media}
      />
      <Prefooter
        className={'bg-transparent'}
        prefooter={
          room.prefooter.block as unknown as LocalizedObject<PrefooterType>
        }
      />
      <RecommendedExperiences
        theme={'light'}
        experiences={
          room.recommendedExperiences as unknown as LocalizedObject<Experiences>
        }
      />
    </React.Fragment>
  )
}
