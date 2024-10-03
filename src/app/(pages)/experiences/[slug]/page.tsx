import React from 'react'
import config from '@payload-config'

import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { ImageCarousel } from '@/components/sections/image-carousel'
import { InfoTextCTA } from '@/components/sections/infotext-cta'
import { SplitCTA } from '@/components/sections/split-cta'
import { VerticalCTA } from '@/components/sections/vertical-cta'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'
import { ExperienceHero } from '@/components/sections/experience-hero'

import type { Experience, Media } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'

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

export async function generateMetadata({
  params,
}: { params: { slug: string } }) {
  const payload = await getPayloadHMR({ config })
  const result = await payload.find({
    collection: 'experiences',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  return {
    title: `Limni | ${result.docs[0].name as string}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const experiences = await payload.find({
    collection: 'experiences',
    limit: 999,
  })

  return experiences.docs.map((experience) => ({
    slug: experience.slug,
  }))
}

export default async function ExperiencePage({
  params,
}: { params: { slug: string } }) {
  const payload = await getPayloadHMR({ config })
  const result = await payload.find({
    collection: 'experiences',
    locale: 'all',
    depth: 2,
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  const experience = result.docs[0] as Experience

  if (!experience) {
    return notFound()
  }

  return (
    <React.Fragment>
      <ExperienceHero
        name={experience.name as unknown as LocalizedString}
        description={experience.description as unknown as LocalizedString}
      />
      <ImageCarousel
        className={
          'lg:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0)_79.99%,_rgba(65,65,53,1)_80%,_rgba(65,65,53,1)_100%)]'
        }
        images={experience.media.images as Array<Media>}
      />
      <InfoTextCTA
        className={'bg-[#414135] text-[#E7E0D5] pt-12 md:pt-20'}
        title={experience.title as unknown as LocalizedString}
        cta={{
          label: experience.cta[0].label as unknown as LocalizedString,
          url: experience.cta[0].url,
        }}
      />
      <SplitCTA
        theme={'dark'}
        headingSize={'sm'}
        title={experience.midSection.title as unknown as LocalizedString}
        paragraph={
          experience.midSection.paragraph as unknown as LocalizedString
        }
        primaryButton={{
          text: experience.midSection.cta[0]
            .label as unknown as LocalizedString,
          url: experience.midSection.cta[0].url,
        }}
        frontImage={experience.midSection.frontImage as Media}
        backImage={experience.midSection.backImage as Media}
      />
      <VerticalCTA
        title={experience.breakSection.title as unknown as LocalizedString}
        paragraph={
          experience.breakSection.paragraph as unknown as LocalizedString
        }
        primaryButton={{
          text: experience.breakSection.cta[0]
            .label as unknown as LocalizedString,
          url: experience.breakSection.cta[0].url,
        }}
        topImage={experience.breakSection.smallImage as Media}
        sideImage={experience.breakSection.bigImage as Media}
      />
      <RecommendedExperiences
        theme={'light'}
        experiences={
          experience.recommendedExperiences as unknown as LocalizedObject<Experiences>
        }
      />
    </React.Fragment>
  )
}
