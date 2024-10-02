import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { AboutHero } from '@/components/sections/about-hero'

import type { Metadata } from 'next'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'
import type { Media } from '@/payload-types'
import { AboutBullets } from '@/components/sections/about-bullets'

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
    </React.Fragment>
  )
}
