import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { notFound } from 'next/navigation'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'

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
    depth: 3,
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  const room = result.docs[0]

  if (!room) {
    return notFound()
  }

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.roomDetails.area}</p>
      <RecommendedExperiences
        theme={'light'}
        experiences={room.recommendedExperiences[0]}
      />
    </div>
  )
}
