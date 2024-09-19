import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Test } from '@/components/ui/test'
import { HeroSection } from '@/components/sections/hero'

export const dynamic = 'force-static'

export default async function HomePage() {
  const payload = await getPayloadHMR({ config })
  const textContents = await payload.findGlobal({
    slug: 'text-contents',
    depth: 2,
  })

  return (
    <div>
      <HeroSection />
      {/* <Test /> */}
    </div>
  )
}
