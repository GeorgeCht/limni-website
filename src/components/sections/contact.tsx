'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'

import type { LocalizedString } from '@/lib/locale'
import { staticData } from '@/lib/static'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'title'
  > {
  title: LocalizedString
  paragraph: LocalizedString
}

export const ContactSection = ({
  title,
  paragraph,
  className,
  ...props
}: Props) => {
  const { locale } = useLocale()

  return (
    <section
      className={cn(
        'relative w-full h-dvh -mt-[112px] md:-mt-[160px]',
        className,
      )}
      {...props}
    >
      <div
        className={
          'absolute top-0 max-[1280px]:left-[100%] left-[60%] w-2/5 max-[1280px]:w-0 h-dvh overflow-hidden transition-all'
        }
      >
        <img
          src={'/storage/placeholder-1.avif'}
          alt={'contact'}
          className={'object-cover size-full'}
        />
      </div>
      <div
        className={
          'flex flex-col justify-between gap-10 lg:gap-16 w-full min-[1280px]:w-[60%] min-h-dvh py-12 md:py-20 px-10 md:px-20 pt-[112px] md:pt-[160px] transition-all'
        }
      >
        <div className={'flex flex-col gap-10 lg:gap-16'}>
          <h1
            className={
              'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px]'
            }
          >
            {title[locale]}
          </h1>
          <div
            className={
              'flex lg:flex-row flex-col gap-10 lg:gap-20 *:w-full *:lg:w-1/3'
            }
          >
            <div className={'flex flex-col gap-4'}>
              <p className={'text-balance text-2xl font-canela'}>
                {paragraph[locale]}
              </p>
              <HoverFlip.Link href={'/contact'} className={'uppercase'}>
                {locale === 'en' ? 'FAQs' : 'Συχνες ερωτησεις'}
              </HoverFlip.Link>
            </div>
            <div className={'flex flex-col gap-12 lg:gap-16'}>
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Give us a call' : 'Τηλ επικοινωνιας'}
                </p>
                <a
                  href={`tel:${staticData.menu.contact.phone}`}
                  className={'text-2xl font-canela'}
                >
                  {staticData.menu.contact.phone}
                </a>
              </div>
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Address' : 'Διεύθυνση'}
                </p>
                <h2 className={'text-balance text-2xl font-canela'}>
                  {staticData.menu.contact.address[locale]}
                </h2>
                <HoverFlip.Link href={'/'} className={'uppercase'}>
                  {locale === 'en' ? 'Get directions' : 'Οδηγίες'}
                </HoverFlip.Link>
              </div>
            </div>

            <div className={'flex flex-col gap-12 lg:gap-16'}>
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Send us a mail' : 'Στειλτε μας email'}
                </p>
                <a
                  href={`mailto:${staticData.menu.contact.email}`}
                  className={'text-2xl font-canela'}
                >
                  {staticData.menu.contact.email}
                </a>
              </div>
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Follow us' : 'Social Media'}
                </p>
                <ul className={'flex flex-col items-start justify-start gap-2'}>
                  {staticData.menu.socialMedia.map((link, index) => (
                    <li
                      key={`${link.href}-${index}`}
                      className={'flex items-center gap-1'}
                    >
                      <a
                        className={'text-balance text-2xl font-canela'}
                        target={'_blank'}
                        href={link.href}
                        rel={'noreferrer'}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            'flex lg:flex-row flex-col gap-10 lg:gap-20 *:w-full *:lg:w-1/3'
          }
        >
          <HoverFlip.Link
            href={staticData.footer.legal.privacy.href}
            className={'uppercase'}
          >
            {staticData.footer.legal.privacy.label[locale]}
          </HoverFlip.Link>
          <HoverFlip.Link
            href={staticData.footer.legal.terms.href}
            className={'uppercase'}
          >
            {staticData.footer.legal.terms.label[locale]}
          </HoverFlip.Link>
          <HoverFlip.Link
            href={staticData.footer.legal.residency.href}
            className={'uppercase'}
          >
            {staticData.footer.legal.residency.label[locale]}
          </HoverFlip.Link>
        </div>
      </div>
    </section>
  )
}
