import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { Metadata } from 'next'
import type { Media } from '@/payload-types'
import type { LocalizedString } from '@/lib/locale'
import { FAQItems } from '@/components/sections/faq-items'
import { FAQPage } from '@/components/sections/faq-page'

interface Question {
  id: string
  question: LocalizedString
  answer: LocalizedString
  updatedAt: string
  createdAt: string
}

interface LocalizedCTA {
  label: LocalizedString
  url: string
}

export const metadata: Metadata = {
  title: 'Limni | FAQs',
}

export default async function ExperiencesPage() {
  const payload = await getPayloadHMR({ config })
  const result = await payload.find({
    collection: 'questions',
    locale: 'all',
    limit: 999,
  })

  const questionsPage = await payload.findGlobal({
    slug: 'questionsPage',
    locale: 'all',
  })

  return (
    <React.Fragment>
      <FAQPage
        title={questionsPage.title as unknown as LocalizedString}
        label={questionsPage.label as unknown as LocalizedString}
        paragraph={questionsPage.paragraph as unknown as LocalizedString}
        cta={questionsPage.cta[0] as unknown as LocalizedCTA}
      >
        <FAQItems questions={result.docs as unknown as Array<Question>} />
      </FAQPage>
    </React.Fragment>
  )
}
