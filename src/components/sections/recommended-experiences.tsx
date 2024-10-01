'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { Link } from 'next-view-transitions'
import { useLocale } from '@/stores/locale'

import type { Experience, Media } from '@/payload-types'
import type { LocalizedObject, LocalizedString } from '@/lib/locale'

const HeadingComponent = ({
  header,
  subtitle,
  description,
}: {
  header: string
  subtitle: string
  description: string
}) => {
  return (
    <div className={'flex max-lg:flex-col gap-10 w-full'}>
      <h4 className={'w-1/4 max-lg:w-full uppercase'}>{subtitle}</h4>
      <div
        className={
          'w-3/4 max-lg:w-full flex flex-row max-md:flex-col justify-between items-end gap-10'
        }
      >
        <h2
          className={
            'w-2/3 max-md:w-full font-canela text-balance text-6xl md:text-8xl leading-none'
          }
        >
          {header}
        </h2>
        <p className={'w-1/3 max-md:w-full text-balance text-xl font-canela'}>
          {description}
        </p>
      </div>
    </div>
  )
}

interface Experiences {
  header: string
  subtitle: string
  description: string
  paragraph: string
  experiences?: Array<{
    experience: string | Experience
    video?: (string | null) | Media
    id?: string | null
  }> | null
  id?: string | null
  blockName?: string | null
  blockType: 'SelectedExperiences'
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  experiences: LocalizedObject<Experiences>
  theme?: 'dark' | 'light'
}

export const RecommendedExperiences = ({
  theme = 'dark',
  experiences,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()
  const isMedia = (
    video: string | null | undefined | Media,
  ): video is Media => {
    return video !== null && typeof video === 'object' && 'id' in video
  }

  return (
    <section
      className={cn(
        'relative flex flex-col gap-14 w-full h-fit py-12 md:py-20 px-10 md:px-20 transition-all',
        theme === 'dark' ? 'bg-[#414135] text-[#E7E0D5]' : 'text-[#414135]',
        className,
      )}
      {...props}
    >
      <HeadingComponent
        header={
          locale === 'en'
            ? experiences.en?.[0]?.header! ?? ''
            : experiences.el?.[0]?.header! ?? ''
        }
        subtitle={
          locale === 'en'
            ? experiences.en?.[0]?.subtitle! ?? ''
            : experiences.el?.[0]?.subtitle! ?? ''
        }
        description={
          locale === 'en'
            ? experiences.en?.[0]?.description! ?? ''
            : experiences.el?.[0]?.description! ?? ''
        }
      />
      <div
        className={'flex max-[1280px]:flex-col-reverse items-end gap-10 w-full'}
      >
        <div className={'w-1/4 max-[1280px]:w-full flex flex-col gap-8'}>
          <p className={'max-w-96 text-balance text-xl font-canela'}>
            {locale === 'en'
              ? experiences.en?.[0]?.paragraph! ?? ''
              : experiences.el?.[0]?.paragraph! ?? ''}
          </p>
          <HoverFlip.Link href={'/experiences'} className={'uppercase w-fit'}>
            {locale === 'en' ? 'Learn more' : 'Περισσότερα'}
          </HoverFlip.Link>
        </div>
        <ul
          className={
            'w-3/4 max-[1280px]:w-full flex flex-row max-[1280px]:flex-col gap-8 *:min-[1280px]:aspect-[7/10] *:aspect-square'
          }
        >
          {experiences[locale]?.[0]?.experiences?.map((experience) => {
            const item = experience.experience as Experience
            return (
              <li
                key={experience.id}
                className={'group relative w-full min-[1280px]:w-1/3 bg-black'}
              >
                <Link
                  className={
                    'relative w-full h-full flex flex-col items-center justify-between p-6 overflow-hidden'
                  }
                  href={`/experiences/${item.slug}`}
                >
                  <img
                    src={(item.media.cover as Media).url!}
                    alt={(item.media.cover as Media).alt}
                    className={
                      'absolute top-0 left-0 w-full h-full object-cover md:opacity-100 max-md:opacity-60 group-hover:md:opacity-0 transition-all z-0'
                    }
                  />
                  {(() => {
                    if (experience.video && isMedia(experience.video))
                      return (
                        <React.Fragment>
                          {experience.video.mimeType?.startsWith('video') && (
                            <video
                              autoPlay
                              loop
                              muted
                              src={experience.video.url!}
                              className={
                                'absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:md:opacity-65 transition-all md:z-[1]'
                              }
                            />
                          )}
                          {experience.video.mimeType?.startsWith('image') && (
                            <img
                              src={experience.video.url!}
                              alt={experience.video.alt || ''}
                              className={
                                'absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:md:opacity-65 transition-all md:z-[1]'
                              }
                            />
                          )}
                        </React.Fragment>
                      )
                  })()}
                  <span
                    className={
                      'text-white z-10 uppercase md:opacity-0 transition-all md:group-hover:opacity-100'
                    }
                  >
                    {(() => {
                      switch (item.availability) {
                        case 'winter':
                          return locale === 'en'
                            ? 'Available at winter'
                            : 'Διαθέσιμο από χειμωνα'
                        case 'summer':
                          return locale === 'en'
                            ? 'Available at summer'
                            : 'Διαθέσιμο από καλοκαιρι'
                        case 'spring':
                          return locale === 'en'
                            ? 'Available at spring'
                            : 'Διαθέσιμο από ανοιξη'
                        case 'fall':
                          return locale === 'en'
                            ? 'Available at fall'
                            : 'Διαθέσιμο από φθινοπωρο'
                        case 'all':
                          return locale === 'en'
                            ? 'Available all year'
                            : 'Διαθέσιμο ολο το έτος'
                        default:
                          return locale === 'en'
                            ? 'Available all year'
                            : 'Διαθέσιμο ολο το έτος'
                      }
                    })()}
                  </span>
                  <h3
                    className={
                      'font-canela text-white text-4xl text-center md:text-5xl md:opacity-0 transition-all md:group-hover:opacity-100 z-10'
                    }
                  >
                    {locale === 'en'
                      ? (item.name as unknown as LocalizedString).en
                      : (item.name as unknown as LocalizedString).el}
                  </h3>
                  <HoverFlip.Root
                    className={
                      'uppercase text-white md:opacity-0 transition-all md:group-hover:opacity-100'
                    }
                  >
                    {locale === 'en' ? 'Discover more' : 'Περισσότερα'}
                  </HoverFlip.Root>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
