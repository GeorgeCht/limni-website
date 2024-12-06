'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { useLocale } from '@/stores/locale'

import type { LocalizedString } from '@/lib/locale'
import type { ExperiencesPage, Media } from '@/payload-types'
import { ArrowDownIcon } from '@/components/vectors/arrow'
import { useLenis } from '@/lib/lenis'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'content'
  > {
  content: ExperiencesPage
}

export const ExperiencesHero = ({ content, className, ...props }: Props) => {
  const { locale } = useLocale()
  const lenis = useLenis()

  return (
    <section
      className={cn(
        'relative bg-white w-full min-h-[600px] md:min-h-dvh h-fit -mt-[112px] md:-mt-[160px] flex',
        className,
      )}
      {...props}
    >
      <div
        className={
          'flex flex-col gap-16 min-[1280px]:flex-row w-full relative py-12 md:py-20 pt-24 md:pt-36 px-10 md:px-20 transition-all'
          // 'flex flex-col gap-16 min-[1280px]:flex-row w-full py-12 md:py-20 pt-24 md:pt-36 px-10 md:px-20 transition-all relative'
        }
      >
        <div
          className={
            'w-full h-full relative min-[1280px]:w-[calc(100vw-399px)] flex flex-col justify-between items-start gap-12'
          }
        >
          <div
            className={
              'lg:absolute max-w-full max-lg:max-w-[500px] h-[inherit] top-0 right-0 aspect-square z-0'
            }
          >
            <img
              data-scroll
              data-scroll-speed={0.0485}
              className={'size-full object-cover'}
              src={(content.imageBig as Media).url!}
              alt={(content.imageBig as Media).alt}
            />
          </div>
          <h1
            data-scroll
            data-scroll-speed={-0.0985}
            className={
              'font-canela uppercase text-balance text-7xl lg:text-9xl leading-none max-w-[768px] h-fit pt-0 lg:pt-12 z-10'
            }
          >
            {(content.headerBig as unknown as LocalizedString)[locale]}
          </h1>
          <div
            role={'button'}
            onClick={() => {
              lenis?.scrollTo('#experience-0')
            }}
            className={
              'w-fit p-5 cursor-pointer rounded-full border border-black/25 z-10'
            }
          >
            <ArrowDownIcon className={'size-6 self-center text-black'} />
          </div>
        </div>
        <div
          className={
            'w-full h-full relative min-[1280px]:w-[399px] flex flex-col gap-16 justify-end'
          }
        >
          <div
            className={
              'max-[1280px]:hidden relative w-full aspect-[460/570] mt-24'
            }
          >
            <img
              src={(content.imageSmall as Media).url!}
              alt={(content.imageSmall as Media).alt}
              className={'object-cover w-full h-full'}
            />
          </div>
          <div className={'flex flex-col gap-6'}>
            <h2 className={'font-canela uppercase text-4xl'}>
              {(content.headerSmall as unknown as LocalizedString)[locale]}
            </h2>
            <h3 className={'uppercase'}>
              {(content.label as unknown as LocalizedString)[locale]}
            </h3>
            <p className={'text-2xl font-canela text-balance'}>
              {(content.paragraph as unknown as LocalizedString)[locale]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ExperiencesIntro = ({ title }: { title: LocalizedString }) => {
  const { locale } = useLocale()

  return (
    <section
      className={
        'relative w-full flex max-lg:flex-col max-lg:gap-10 pb-12 md:pb-20 px-10 md:px-20 transition-all mt-20'
      }
    >
      <h2
        className={
          'w-full max-w-[1368px] lg:w-10/12 font-canela text-4xl md:text-6xl uppercase leading-none'
        }
      >
        {title[locale]}
      </h2>
    </section>
  )
}
