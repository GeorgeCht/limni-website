'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { useLocale } from '@/stores/locale'
import { useGSAP } from '@gsap/react'

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

  // Refs for animating elements
  const sectionRef = React.useRef<HTMLElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const paragraphRef = React.useRef<HTMLParagraphElement>(null)
  const faqLinkRef = React.useRef<HTMLAnchorElement>(null)
  const phoneRef = React.useRef<HTMLDivElement>(null)
  const addressRef = React.useRef<HTMLDivElement>(null)
  const emailRef = React.useRef<HTMLDivElement>(null)
  const socialMediaRef = React.useRef<HTMLUListElement>(null)
  const imageSectionRef = React.useRef<HTMLDivElement>(null)
  const legalLinksRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Animate all elements simultaneously with shorter durations
    tl.fromTo(
      [
        titleRef.current,
        paragraphRef.current,
        faqLinkRef.current,
        phoneRef.current,
        addressRef.current,
        emailRef.current,
        socialMediaRef.current?.children!,
        imageSectionRef.current,
        legalLinksRef.current?.children!,
      ],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.05,
      },
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative w-full h-dvh -mt-[112px] md:-mt-[160px]',
        className,
      )}
      {...props}
    >
      <div
        ref={imageSectionRef}
        className={
          'absolute top-0 max-[1280px]:left-[100%] left-[60%] w-2/5 max-[1280px]:w-0 h-dvh overflow-hidden transition-all opacity-0'
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
            ref={titleRef}
            className={
              'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px] opacity-0'
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
              <p
                ref={paragraphRef}
                className={'text-balance text-2xl font-canela opacity-0'}
              >
                {paragraph[locale]}
              </p>
              <HoverFlip.Link
                // @ts-expect-error
                ref={faqLinkRef}
                href={'/contact'}
                className={'uppercase w-fit border-b border-black opacity-0'}
              >
                {locale === 'en' ? 'FAQs' : 'Συχνες ερωτησεις'}
              </HoverFlip.Link>
            </div>
            <div
              ref={phoneRef}
              className={'flex flex-col gap-12 lg:gap-16 opacity-0'}
            >
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Give us a call' : 'Τηλ επικοινωνιας'}
                </p>
                <HoverFlip.Link
                  href={`tel:${staticData.menu.contact.phone}`}
                  className={'text-2xl font-canela'}
                >
                  {staticData.menu.contact.phone}
                </HoverFlip.Link>
              </div>
              <div ref={addressRef} className={'flex flex-col gap-4 opacity-0'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Address' : 'Διεύθυνση'}
                </p>
                <h2 className={'text-balance text-2xl font-canela'}>
                  {staticData.menu.contact.address[locale]}
                </h2>
                <HoverFlip.Link
                  href={'/'}
                  className={'uppercase w-fit border-b border-black'}
                >
                  {locale === 'en' ? 'Get directions' : 'Οδηγίες'}
                </HoverFlip.Link>
              </div>
            </div>

            <div
              ref={emailRef}
              className={'flex flex-col gap-12 lg:gap-16 opacity-0'}
            >
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Send us a mail' : 'Στειλτε μας email'}
                </p>
                <HoverFlip.Link
                  href={`mailto:${staticData.menu.contact.email}`}
                  className={'text-2xl font-canela'}
                >
                  {staticData.menu.contact.email}
                </HoverFlip.Link>
              </div>
              <div className={'flex flex-col gap-4'}>
                <p className={'uppercase text-sm'}>
                  {locale === 'en' ? 'Follow us' : 'Social Media'}
                </p>
                <ul
                  ref={socialMediaRef}
                  className={'flex flex-col items-start justify-start gap-2'}
                >
                  {staticData.menu.socialMedia.map((link, index) => (
                    <li
                      key={`${link.href}-${index}`}
                      className={'flex items-center gap-1'}
                    >
                      <HoverFlip.Link
                        className={'text-balance text-2xl font-canela'}
                        href={link.href}
                      >
                        {link.label}
                      </HoverFlip.Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={legalLinksRef}
          className={
            'flex lg:flex-row flex-col gap-10 lg:gap-20 *:w-full *:lg:w-1/3'
          }
        >
          <HoverFlip.Link
            href={staticData.footer.legal.privacy.href}
            className={'uppercase opacity-0'}
          >
            {staticData.footer.legal.privacy.label[locale]}
          </HoverFlip.Link>
          <HoverFlip.Link
            href={staticData.footer.legal.terms.href}
            className={'uppercase opacity-0'}
          >
            {staticData.footer.legal.terms.label[locale]}
          </HoverFlip.Link>
          <HoverFlip.Link
            href={staticData.footer.legal.residency.href}
            className={'uppercase opacity-0'}
          >
            {staticData.footer.legal.residency.label[locale]}
          </HoverFlip.Link>
        </div>
      </div>
    </section>
  )
}
