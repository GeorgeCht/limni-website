'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'
import { HoverFlip } from '@/components/ui/hoverflip'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/stores/locale'

import { useTransitionRouter } from 'next-view-transitions'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import type { Media } from '@/payload-types'
import type { LocalizedString } from '@/lib/locale'
import { usePathname } from 'next/navigation'

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref'
  > {
  coverImage: Media
  roomDetails: {
    visitors: number
    area: string
    beds: number
  }
  code: string
  name: LocalizedString
  paragraph: LocalizedString
  primaryButton: {
    text: LocalizedString
    url: string
  }
}

export const RoomHero = ({
  coverImage,
  roomDetails,
  code,
  name,
  paragraph,
  primaryButton,
  className,
  ...props
}: Props) => {
  gsap.registerPlugin(ScrollTrigger)

  const section = React.useRef<HTMLElement>(null)
  const container = React.useRef<HTMLDivElement>(null)
  const image = React.useRef<HTMLImageElement>(null)

  const router = useTransitionRouter()
  const pathname = usePathname()
  const { locale } = useLocale()

  useGSAP(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    width > 768 &&
      gsap.fromTo(
        section.current,
        {
          '--gsap-image-scale': 1.1,
          '--gsap-image-height': '100%',
          '--gsap-image-top': 0,
          '--gsap-container-height': '100%',
          '--gsap-container-top': 0,
          '--gsap-color-text': 'rgb(255, 255, 255)',
        },
        {
          '--gsap-image-scale': 1.275,
          '--gsap-image-height': '50%',
          '--gsap-image-top': '-100%',
          '--gsap-container-height': 0,
          '--gsap-container-top': '66.666%',
          '--gsap-color-text': 'rgb(0, 0, 0)',
          scrollTrigger: {
            trigger: section.current,
            scrub: 1,
            start: 'top 1%',
            end: 'bottom 25%',
            // end: '+=25vh',
            pin: true,
          },
        },
      )
  }, [pathname])

  return (
    <React.Fragment>
      {/* <style jsx global>
        {`
        .pin-spacer {
          padding: 0 !important;
          height: 85vw !important;
        }
        @media (min-width: 1024px) {
          .pin-spacer {
            height: 66.6vw !important;
          }
        }
      `}
      </style> */}
      <section
        ref={section}
        className={cn(
          'relative w-full max-[564px]:h-[626px] max-md:h-[460px] md:!h-[--gsap-container-height] top-[--gsap-image-top] -mt-[112px] md:-mt-[160px]',
          className,
        )}
        {...props}
      >
        <img
          ref={image}
          src={coverImage.url!}
          alt={coverImage.alt}
          className={cn(
            'relative object-cover aspect-[3/2] size-full max-lg:hidden scale-[--gsap-image-scale] top-[--gsap-image-top] h-[--gsap-image-height] [view-transition-name:active-image]',
          )}
        />
        <div
          ref={container}
          className={
            'size-full !h-[--gsap-container-height] top-[--gsap-container-top] min-h-fit absolute inset-0 flex max-lg:flex-col gap-10 lg:text-[--gsap-color-text] justify-end lg:justify-between items-start lg:items-end py-12 md:py-20 md:pt-36 px-10 md:px-20 z-10'
          }
        >
          <div className={'flex flex-col gap-1 w-full lg:w-[60%]'}>
            <p className={'uppercase'}>
              {locale === 'en' ? 'Room code ' : 'Κωδικος '} #{code}
            </p>
            <h1
              className={
                'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px]'
              }
            >
              {name[locale]}
            </h1>
          </div>
          <div className={'flex flex-col gap-3 w-full lg:w-[40%]'}>
            <p className={'uppercase'}>
              {(() => {
                switch (locale) {
                  case 'en':
                    return (
                      <React.Fragment>
                        {roomDetails.visitors} Guests / {roomDetails.beds} Beds
                        / {roomDetails.area}m<sup>2</sup>
                      </React.Fragment>
                    )
                  case 'el':
                    return (
                      <React.Fragment>
                        {roomDetails.visitors} Επισκεπτες / {roomDetails.beds}{' '}
                        {roomDetails.beds === 1 ? 'Κρεβατι' : 'Κρεβατια'} /{' '}
                        {roomDetails.area}μ<sup>2</sup>
                      </React.Fragment>
                    )
                }
              })()}
            </p>
            <p className={'text-balance text-xl font-canela'}>
              {paragraph[locale]}
            </p>
            <Button
              className={'w-fit bg-white text-black mt-3'}
              onClick={() => router.push(primaryButton.url)}
            >
              {primaryButton.text[locale]}
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

// 'use client'

// import React from 'react'
// import gsap from 'gsap'

// import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/button'
// import { useLocale } from '@/stores/locale'

// import { useTransitionRouter } from 'next-view-transitions'

// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import type { Media } from '@/payload-types'
// import type { LocalizedString } from '@/lib/locale'
// import { usePathname } from 'next/navigation'

// interface Props
//   extends Omit<
//     React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
//     'ref'
//   > {
//   coverImage: Media
//   roomDetails: {
//     visitors: number
//     area: string
//     beds: number
//   }
//   code: string
//   name: LocalizedString
//   paragraph: LocalizedString
//   primaryButton: {
//     text: LocalizedString
//     url: string
//   }
// }

// export const RoomHero = ({
//   coverImage,
//   roomDetails,
//   code,
//   name,
//   paragraph,
//   primaryButton,
//   className,
//   ...props
// }: Props) => {
//   gsap.registerPlugin(ScrollTrigger)

//   const section = React.useRef<HTMLElement>(null)
//   const container = React.useRef<HTMLDivElement>(null)
//   const image = React.useRef<HTMLImageElement>(null)

//   const router = useTransitionRouter()
//   const pathname = usePathname()
//   const { locale } = useLocale()

//   useGSAP(() => {
//     let width = 0
//     if (typeof window !== 'undefined') {
//       width = window.innerWidth
//     }

//     // Only apply animation on larger screens
//     if (width > 768) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section.current,
//           start: 'top top',
//           end: 'bottom 25%',
//           scrub: true,
//           pin: true,
//         },
//       })

//       tl.fromTo(
//         section.current,
//         {
//           '--gsap-image-scale': 1,
//           '--gsap-image-height': '100%',
//           '--gsap-image-top': 0,
//           '--gsap-container-height': '100%',
//           '--gsap-container-top': 0,
//           '--gsap-color-text': '#FFF',
//           '--gsap-text-opacity': 1,
//         },
//         {
//           '--gsap-image-scale': 1.2,
//           '--gsap-image-height': '90%',
//           '--gsap-image-top': '-10%',
//           '--gsap-container-height': '50%',
//           '--gsap-container-top': '50%',
//           '--gsap-color-text': '#000',
//           '--gsap-text-opacity': 0.8,
//           ease: 'power2.inOut', // Smoother easing
//           duration: 1,
//         },
//       )
//     }
//   }, [pathname])

//   return (
//     <React.Fragment>
//       <style jsx global>
//         {`
//         .pin-spacer {
//           padding: 0 !important;
//           height: 85vw !important;
//         }
//         @media (min-width: 1024px) {
//           .pin-spacer {
//             height: 75vw !important;
//           }
//         }
//       `}
//       </style>
//       <section
//         ref={section}
//         className={cn(
//           'relative w-full max-md:h-dvh md:!h-[--gsap-container-height] top-[--gsap-image-top] -mt-[112px] md:-mt-[160px]',
//           className,
//         )}
//         {...props}
//       >
//         <img
//           ref={image}
//           src={coverImage.url!}
//           alt={coverImage.alt}
//           className={cn(
//             'relative object-cover size-full scale-[--gsap-image-scale] top-[--gsap-image-top] h-[--gsap-image-height] [view-transition-name:active-image]',
//           )}
//         />
//         <div
//           ref={container}
//           className={
//             'size-full !h-[--gsap-container-height] top-[--gsap-container-top] min-h-fit absolute inset-0 flex max-lg:flex-col gap-10 text-[--gsap-color-text] justify-end lg:justify-between items-start lg:items-end py-12 md:py-20 px-10 md:px-20 z-10 opacity-[--gsap-text-opacity]'
//           }
//         >
//           <div className={'flex flex-col gap-1 w-full lg:w-[60%]'}>
//             <p className={'uppercase'}>
//               {locale === 'en' ? 'Room code ' : 'Κωδικος '} #{code}
//             </p>
//             <h1
//               className={
//                 'font-canela uppercase text-balance text-6xl md:text-8xl leading-none max-w-[768px]'
//               }
//             >
//               {name[locale]}
//             </h1>
//           </div>
//           <div className={'flex flex-col gap-3 w-full lg:w-[40%]'}>
//             <p className={'uppercase'}>
//               {(() => {
//                 switch (locale) {
//                   case 'en':
//                     return (
//                       <React.Fragment>
//                         {roomDetails.visitors} Guests / {roomDetails.beds} Beds
//                         / {roomDetails.area}m<sup>2</sup>
//                       </React.Fragment>
//                     )
//                   case 'el':
//                     return (
//                       <React.Fragment>
//                         {roomDetails.visitors} Επισκεπτες / {roomDetails.beds}{' '}
//                         {roomDetails.beds === 1 ? 'Κρεβατι' : 'Κρεβατια'} /{' '}
//                         {roomDetails.area}μ<sup>2</sup>
//                       </React.Fragment>
//                     )
//                 }
//               })()}
//             </p>
//             <p className={'text-balance text-xl font-canela'}>
//               {paragraph[locale]}
//             </p>
//             <Button
//               className={'w-fit bg-white text-black mt-3'}
//               onClick={() => router.push(primaryButton.url)}
//             >
//               {primaryButton.text[locale]}
//             </Button>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   )
// }
