import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { Metadata } from 'next'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'
import type { Experience, Media } from '@/payload-types'

import { AboutHero } from '@/components/sections/about-hero'
import { AboutBullets } from '@/components/sections/about-bullets'
import { ImageCarousel } from '@/components/sections/image-carousel'
import { VerticalCTA } from '@/components/sections/vertical-cta'
import { RecommendedExperiences } from '@/components/sections/recommended-experiences'

interface AboutIntro {
  title: LocalizedString
  paragraph: LocalizedString
  image?: Media
  cta: Array<{
    label: LocalizedString
    url: string
    id?: string | null
    blockName?: string | null
    blockType: 'CallToAction'
  }>
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

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Limni | About',
}

export default async function ContactPage() {
  const payload = await getPayloadHMR({ config })
  const about = await payload.findGlobal({
    slug: 'about',
    locale: 'all',
  })

  return (
    <React.Fragment>
      <AboutHero props={about.introSection as unknown as AboutIntro} />
      <AboutBullets
        title={about.secondSection.title as unknown as LocalizedString}
        bulletPoints={
          about.secondSection.bulletPoints as unknown as LocalizedObject<{
            text: string
            id?: string | null
          }>
        }
      />
      <ImageCarousel
        className={'bg-[#414135]'}
        images={about.secondSection.sliderImages as Array<Media>}
      />

      <VerticalCTA
        title={about.breakSection.title as unknown as LocalizedString}
        paragraph={about.breakSection.paragraph as unknown as LocalizedString}
        primaryButton={{
          text: about.breakSection.cta[0].label as unknown as LocalizedString,
          url: about.breakSection.cta[0].url,
        }}
        topImage={about.breakSection.smallImage as Media}
        sideImage={about.breakSection.bigImage as Media}
      />
      <RecommendedExperiences
        theme={'light'}
        experiences={
          about.recommendedExperiences as unknown as LocalizedObject<Experiences>
        }
      />
    </React.Fragment>
  )
}
