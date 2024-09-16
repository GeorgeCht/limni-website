import React from 'react'
import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Test } from '@/components/ui/test'
import type { LocalizedString } from '@/lib/locale'

export const dynamic = 'force-static'

export default async function MyPage() {
  const payload = await getPayloadHMR({ config })
  const textContents = await payload.findGlobal({
    slug: 'text-contents',
    depth: 2,
    locale: 'all',
  })

  return (
    <div>
      <h1 className={'text-3xl font-canela'}>
        Header global: δοκιμή:{' '}
        {(textContents.mainHeader as unknown as LocalizedString).el}
      </h1>
      <h1>Header global</h1>
      <p>MyPage contet</p>
      <Test />
    </div>
  )
}
