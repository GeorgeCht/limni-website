import React from 'react'
import config from "@payload-config";

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Test } from '@/components/ui/test';

export const dynamic = 'force-static'

export default async function MyPage() {

  const payload = await getPayloadHMR({ config })
  const textContents = await payload.findGlobal({
    slug: 'text-contents',
    depth: 2,
  })

  payload.logger.info(JSON.stringify(textContents))

  return (
    <div>
      <h1>Header global: {textContents['main-header']}</h1>
      <h1>Header global</h1>
      <p>MyPage contet</p>
      <Test />
    </div>
  )
}
