'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { useScroller } from '@/components/providers/scroll'
import { UnderlinedLinkWithImage } from '@/components/ui/underline'
import { HoverFlip } from '../ui/hoverflip'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const HeaderFlyout = ({
  isOpen,
  setIsOpen,
  className,
  ...props
}: Props) => {
  const scroller = useScroller()

  const ref = React.useRef<HTMLDivElement>(null)
  const linksRef = React.useRef<Array<HTMLLIElement | null>>([])
  const footerRef = React.useRef<HTMLDivElement>(null)
  const timeline = React.useRef<gsap.core.Timeline | null>(null)

  useGSAP(() => {
    scroller?.stop()
    if (isOpen) {
      gsap.fromTo(
        ref.current,
        { yPercent: -100, height: 0 },
        {
          yPercent: 0,
          height: '100%',
          duration: 0.985,
          ease: 'circ.inOut',
        },
      )
      timeline.current = gsap.timeline().to(linksRef.current, {
        y: 10,
        opacity: 1,
        delay: 0.625,
        stagger: 0.125,
        duration: 0.675,
        ease: 'circ.in',
      })
      timeline.current = gsap.timeline().to(footerRef.current, {
        y: 10,
        opacity: 1,
        delay: 1.385,
        duration: 0.675,
        ease: 'circ.in',
      })
    } else {
      scroller?.start()
      if (timeline.current) {
        timeline.current.kill()
      }
      gsap.to(ref.current, {
        yPercent: 100,
        delay: 0.175,
        duration: 0.825,
        ease: 'circ.inOut',
      })
      timeline.current = gsap.timeline().to(linksRef.current, {
        y: -25,
        opacity: 0,
        stagger: 0.125,
        duration: 0.475,
        reversed: true,
        ease: 'circ.out',
      })
      timeline.current = gsap.timeline().to(footerRef.current, {
        y: -15,
        opacity: 0,
        duration: 0.475,
        ease: 'circ.out',
      })
    }
  }, [isOpen])

  const linksData = [
    {
      href: '/rooms',
      label: 'Find a room',
      image: '/assets/placeholder.avif',
    },
    {
      href: '/about',
      label: 'Our hotel',
      image: '/assets/placeholder.avif',
    },
    {
      href: '/experiences',
      label: 'Experiences',
      image: '/assets/placeholder.avif',
    },
    {
      href: '/contact',
      label: 'Contact us',
      image: '/assets/placeholder.avif',
    },
    {
      href: '/faqs',
      label: 'FAQs',
      image: '/assets/placeholder.avif',
    },
  ]

  const socialLinksData = [
    {
      href: 'https://www.instagram.com/limnihotel/',
      label: 'Instagram',
    },
    {
      href: 'https://www.facebook.com/limnihotel/',
      label: 'Facebook',
    },
    {
      href: 'https://www.booking.com/hotel/gr/limni-hotel.html',
      label: 'Booking',
    },
  ]

  return (
    <div
      ref={ref}
      role={'dialog'}
      className={cn(
        'w-dvw h-0 z-[9998] bg-[#B47351] fixed top-0 left-0 overflow-hidden',
        className,
      )}
      {...props}
    >
      <div
        className={
          'flex flex-col justify-between size-full py-8 md:py-14 px-10 md:px-20'
        }
      >
        <ul
          role={'navigation'}
          className={
            'flex flex-col items-center justify-center gap-1 w-full pt-40'
          }
        >
          {linksData.map((link, index) => (
            <li
              key={`${link.href}-${index}`}
              ref={(element) => {
                if (element) {
                  linksRef.current[index] = element
                } else {
                  delete linksRef.current[index]
                }
              }}
              className={
                'flex max-sm:text-start max-sm:w-full max-sm:justify-between items-start gap-5 opacity-0'
              }
            >
              <UnderlinedLinkWithImage
                image={link.image}
                className={
                  'font-canela text-white max-sm:text-4xl max-lg:text-6xl text-[6.125vw] leading-none uppercase'
                }
                href={link.href}
              >
                {link.label}
              </UnderlinedLinkWithImage>
              <span className={'text-white text-sm'}>0{index + 1}</span>
            </li>
          ))}
        </ul>
        <div
          ref={footerRef}
          aria-describedby={'footer-description'}
          className={
            'flex max-lg:flex-col items-end pb-2.5 max-lg:items-center justify-between text-white uppercase opacity-0'
          }
        >
          <div className={'basis-1/3 max-lg:basis-full flex justify-start'}>
            <HoverFlip.Link href={'mailto:info@limni-hotel.com'}>
              info@limni-hotel.com
            </HoverFlip.Link>
          </div>
          <div
            className={
              'basis-1/3 max-lg:basis-full flex justify-center text-center m-auto'
            }
          >
            ODOS LIMNIS, EVOIA 3243, SOUTHWESTERN EVOIA
          </div>
          <div className={'basis-1/3 max-lg:basis-full flex justify-end'}>
            <ul className={'flex items-center gap-2'}>
              {socialLinksData.map((link, index) => {
                const label = `(${link.label})`
                return (
                  <li
                    key={`${link.href}-${index}`}
                    className={'flex items-center gap-2'}
                  >
                    <HoverFlip.Link href={link.href}>{label}</HoverFlip.Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
