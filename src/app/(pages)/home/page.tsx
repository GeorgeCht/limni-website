import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Test } from '@/components/ui/test'
import { HeroSection } from '@/components/sections/hero'
import { InfoTextCTA } from '@/components/sections/infotext-cta'
import { Prefooter } from '@/components/sections/prefooter'
import { RoomsDisplay } from '@/components/sections/rooms-display'

export const dynamic = 'force-static'

export default async function HomePage() {
  // const payload = await getPayloadHMR({ config })
  // const textContents = await payload.findGlobal({
  //   slug: 'text-contents',
  //   depth: 2,
  // })

  return (
    <div>
      <HeroSection />
      <InfoTextCTA withImage className={'mt-20'} />
      <RoomsDisplay />
      <Prefooter />
    </div>
  )
}
