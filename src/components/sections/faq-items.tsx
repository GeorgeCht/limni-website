'use client'

import type React from 'react'
import type { LocalizedString } from '@/lib/locale'

import { useLocale } from '@/stores/locale'
import { Accordion } from '@/components/ui/accordion'

interface Question {
  id: string
  question: LocalizedString
  answer: LocalizedString
  updatedAt: string
  createdAt: string
}

export const FAQItems = ({
  questions,
}: {
  questions: Array<Question>
}) => {
  const { locale } = useLocale()

  return (
    <Accordion
      items={questions.map((question) => ({
        question: question.question[locale] || '',
        answer: question.answer[locale] || '',
      }))}
    />
  )
}
