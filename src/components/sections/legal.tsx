'use client'

import React from 'react'

import { formatDate } from '@/lib/utils'
import { useLocale } from '@/stores/locale'

import type { LocalizedObject, LocalizedString } from '@/lib/locale'

interface TextBlock {
  id: string
  header: string
  paragraph: string
}

const TextBlock = ({ block }: { block: TextBlock }) => {
  const { header, paragraph } = block

  return (
    <div className={'container max-w-[768px] flex flex-col gap-6'}>
      <h2 className={'font-canela text-4xl lg:text-5xl leading-none'}>
        {header}
      </h2>
      <p className={'text-lg text-justify'}>{paragraph}</p>
    </div>
  )
}

export const LegalSection = ({
  title,
  textBlocks,
  updatedAt,
}: {
  title: LocalizedString
  textBlocks: LocalizedObject<TextBlock>
  updatedAt?: string | null | undefined
}) => {
  const { locale } = useLocale()

  return (
    <section
      className={
        'relative flex flex-col items-center gap-10 w-full h-full min-h-dvh py-12 md:py-20 px-10 md:px-20 transition-all'
      }
    >
      <div
        role={'contentinfo'}
        className={'container max-w-[768px] flex flex-col items-start'}
      >
        {updatedAt && (
          <p className={'uppercase text-sm'}>
            {locale === 'en' ? 'Last updated' : 'Τελευταία ενημέρωση'}
            <span className={'text-bold'}>: {formatDate(updatedAt)}</span>
          </p>
        )}
        <h1 className={'font-canela text-6xl lg:text-7xl leading-none'}>
          {title[locale]}
        </h1>
      </div>
      {textBlocks[locale]?.map((block) =>
        block ? <TextBlock key={block.id} block={block} /> : null,
      )}
    </section>
  )
}
