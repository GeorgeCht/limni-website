import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { SplitCTA } from '@/components/sections/split-cta'
import {
  ExperiencesHero,
  ExperiencesIntro,
} from '@/components/sections/experiences-hero'

import type { Metadata } from 'next'
import type { Media } from '@/payload-types'
import type { LocalizedString } from '@/lib/locale'

export const metadata: Metadata = {
  title: 'Limni | Experiences',
}

export default async function ExperiencesPage() {
  const payload = await getPayloadHMR({ config })
  const result = await payload.find({
    collection: 'experiences',
    locale: 'all',
    limit: 999,
    depth: 2,
  })

  const experiencesPage = await payload.findGlobal({
    slug: 'experiencesPage',
    locale: 'all',
  })

  return (
    <React.Fragment>
      <ExperiencesHero content={experiencesPage} />
      <ExperiencesIntro
        title={experiencesPage.headerBelow as unknown as LocalizedString}
      />
      {result.docs.map((experience, index) => (
        <SplitCTA
          id={`experience-${index}`}
          key={experience.slug}
          direction={index % 2 === 0 ? 'left' : 'right'}
          title={experience.name as unknown as LocalizedString}
          paragraph={experience.description as unknown as LocalizedString}
          primaryButton={{
            text: {
              el: 'Περισσότερα',
              en: 'Learn more',
            },
            url: `/experiences/${experience.slug}`,
          }}
          frontImage={experience.media.frontDisplay as Media}
          backImage={experience.media.cover as Media}
        />
      ))}
    </React.Fragment>
  )
}
