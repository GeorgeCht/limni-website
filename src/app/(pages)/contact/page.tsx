import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { ContactSection } from '@/components/sections/contact'

import type { LocalizedString } from '@/lib/locale'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Limni | Contact',
}

export default async function ContactPage() {
  const payload = await getPayloadHMR({ config })
  const contact = await payload.findGlobal({
    slug: 'contact',
    locale: 'all',
  })

  return (
    <React.Fragment>
      <ContactSection
        title={contact.title as unknown as LocalizedString}
        paragraph={contact.paragraph as unknown as LocalizedString}
      />
    </React.Fragment>
  )
}
