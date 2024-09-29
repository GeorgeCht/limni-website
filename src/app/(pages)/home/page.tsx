import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import { HeroSection } from '@/components/sections/hero'
import { InfoTextCTA } from '@/components/sections/infotext-cta'
import { Prefooter } from '@/components/sections/prefooter'
import { RoomsDisplay } from '@/components/sections/rooms-display'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'
import { SelectedRooms } from '@/components/sections/selected-rooms'

import type { Experience, Media, Room } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'

interface Rooms {
  room: string | Room
  image: string | Media
  id?: string | null | undefined
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

export default async function HomePage() {
  const payload = await getPayloadHMR({ config })
  const home = await payload.findGlobal({
    slug: 'home',
    locale: 'all',
    depth: 2,
  })

  return (
    <React.Fragment>
      <HeroSection
        header={home.hero.header as unknown as LocalizedString}
        subtitle={home.hero.subtitle as unknown as LocalizedString}
        cta={{
          label: home.hero.cta?.[0]?.label! as unknown as LocalizedString,
          url: home.hero.cta?.[0]?.url!,
        }}
        paragraph={home.hero.paragraph as unknown as LocalizedString}
        paragraphCta={{
          label: home.hero.paragraphCta?.[0]
            .label as unknown as LocalizedString,
          url: home.hero.paragraphCta?.[0].url!,
        }}
        image={home.hero.image as Media}
      />

      <InfoTextCTA
        withImage
        title={home.second.header as unknown as LocalizedString}
        cta={{
          label: home.second.ctaLabel as unknown as LocalizedString,
          url: home.second.ctaUrl!,
        }}
        image={home.second.image as Media}
        className={'mt-20'}
      />
      <RoomsDisplay />
      <SelectedRooms rooms={home.fourth?.rooms as Array<Rooms>} />
      <RecommendedExperiences
        experiences={
          home.fifth
            .selectedExperiences as unknown as LocalizedObject<Experiences>
        }
      />
      <Prefooter
        prefooter={
          home.sixth.prefooter as unknown as LocalizedObject<PrefooterType>
        }
      />
    </React.Fragment>
  )
}
