'use client'

import type React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}: AccordionItemProps) => {
  return (
    <div className={'border-b border-black'}>
      <button
        type={'button'}
        className={
          'flex justify-between items-center w-full py-4 px-6 text-left'
        }
        onClick={toggleOpen}
      >
        <span className={'font-canela text-4xl leading-none text-balance'}>
          {question}
        </span>
        <span
          className={`font-canela text-7xl transition-all ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <p className={'font-canela text-2xl md:text-3xl text-balance pt-0 p-6'}>
          {answer}
        </p>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  return (
    <div className={'w-full'}>
      {items.map((item, index) => (
        <AccordionItem
          key={`${item.question}-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
