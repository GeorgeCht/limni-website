import React from 'react'
import config from '@payload-config'

import type { Metadata } from 'next'
import type { LocalizedObject } from '@/lib/locale'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { LegalSection } from '@/components/sections/legal'
import { Wrapper } from '@/components/misc/wrapper'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Limni | Home',
}

interface TextBlock {
  id: string
  header: string
  paragraph: string
}

export default async function PrivacyPage() {
  const payload = await getPayloadHMR({ config })
  const results = await payload.findGlobal({
    slug: 'residencyPolicy',
    locale: 'all',
    depth: 2,
  })

  return (
    <Wrapper>
      <LegalSection
        // @ts-expect-error
        textBlocks={
          results.textBlocks as unknown as LocalizedObject<Array<TextBlock>>
        }
        title={{
          en: 'Residency policy',
          el: 'Πολιτική διαμονής',
        }}
        updatedAt={results.updatedAt}
      />
    </Wrapper>
  )
}
