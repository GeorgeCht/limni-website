'use client'

import gsap from 'gsap'

import { useCallback, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useInView } from 'react-intersection-observer'
import { ArrowDownIcon } from '../vectors/arrow'
import { Logo } from '../vectors/logo'
import { ArchShape } from '../vectors/arch'
import { MenuIcon } from '../vectors/menu'
import { Flair } from './flair'
import { UnderlinedLink } from './underline'
import { Link } from 'next-view-transitions'

export function Test() {
  const ref = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(ScrollTrigger)

  const refTrg = useRef<HTMLDivElement>(null)
  const refElemnt = useRef<HTMLDivElement>(null)

  const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  })

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)
    },
    [inViewRef],
  )

  useGSAP(() => {
    inView &&
      gsap.to(ref.current, {
        x: 100,
        duration: 0.875,
      })
  }, [inView])

  useGSAP(() => {
    gsap.fromTo(
      refElemnt.current,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: document?.body,
          scrub: 1,
          start: 'top center',
          end: 'bottom center',
        },
      },
    )
  }, [])

  return (
    <div
      ref={refTrg}
      className={
        'flex flex-col h-auto gap-4 items-center justify-center p-14 max-w-xl bg-gradient-to-tr from-slate-500 to-neutral-100'
      }
    >
      <ArrowDownIcon className={'size-6 text-red-600'} />
      <Logo.Root className={'size-16 text-red-600'} />
      <Logo.Mark className={'size-39 text-red-600'} />
      <ArchShape className={'size-6 text-red-600'} />
      <MenuIcon className={'size-6 text-red-600'} />

      <div ref={parentRef} className={'relative w-full h-screen bg-sky-400'}>
        <Flair parent={parentRef}>Click me</Flair>
      </div>

      <div
        className={
          'flex flex-col items-center justify-center p-14 max-w-[140px]'
        }
      >
        <UnderlinedLink className={'text-9xl leading-none'} href={'/home'}>
          Book your room today!
        </UnderlinedLink>
      </div>

      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.” The purpose of lorem ipsum is to create a
        natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content. The passage experienced
        a surge in popularity during the 1960s when Letraset used it on their
        dry-transfer sheets, and again during the 90s as desktop publishers
        bundled the text with their software. Today it&apos;s seen all around
        the web; on templates, websites, and stock designs. Use our generator to
        get your own, or read on for the authoritative history of lorem ipsum.
      </p>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero&apos;s De Finibus Bonorum et Malorum for use
        in a type specimen book. It usually begins with: “Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.” The purpose of lorem ipsum is to create
        a natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content. The passage experienced
        a surge in popularity during the 1960s when Letraset used it on their
        dry-transfer sheets, and again during the 90s as desktop publishers
        bundled the text with their software. Today it&apos;s seen all around
        the web; on templates, websites, and stock designs. Use our generator to
        get your own, or read on for the authoritative history of lorem ipsum.
      </p>
      <div className={'size-16 rounded-md bg-emerald-600'} ref={refElemnt} />
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero&apos;s De Finibus Bonorum et Malorum for use
        in a type specimen book. It usually begins with: “Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.” The purpose of lorem ipsum is to create
        a natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content. The passage experienced
        a surge in popularity during the 1960s when Letraset used it on their
        dry-transfer sheets, and again during the 90s as desktop publishers
        bundled the text with their software. Today it&apos;s seen all around
        the web; on templates, websites, and stock designs. Use our generator to
        get your own, or read on for the authoritative history of lorem ipsum.
      </p>
      <span>{inView ? 'In View' : 'Out of View'}</span>
      <div className={'size-16 rounded-md bg-red-600'} ref={setRefs} />
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.” The purpose of lorem ipsum is to create a
        natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content. The passage experienced
        a surge in popularity during the 1960s when Letraset used it on their
        dry-transfer sheets, and again during the 90s as desktop publishers
        bundled the text with their software. Today it&apos;s seen all around
        the web; on templates, websites, and stock designs. Use our generator to
        get your own, or read on for the authoritative history of lorem ipsum.
      </p>
      <Link
        className={'bg-yellow-400 p-3 rounded-full'}
        href={'/page2'}
        // scroll={false}
      >
        Go to Page2
      </Link>
      <Link
        className={'bg-yellow-400 p-3 rounded-full'}
        href={'/page3'}
        // scroll={false}
      >
        Go to Page3
      </Link>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero&apos;s De Finibus Bonorum et Malorum for use
        in a type specimen book. It usually begins with: “Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.” The purpose of lorem ipsum is to create
        a natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content. The passage experienced
        a surge in popularity during the 1960s when Letraset used it on their
        dry-transfer sheets, and again during the 90s as desktop publishers
        bundled the text with their software. Today it&apos;s seen all around
        the web; on templates, websites, and stock designs. Use our generator to
        get your own, or read on for the authoritative history of lorem ipsum.
      </p>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero&apos;s De Finibus Bonorum et Malorum for use
        in a type specimen book. It usually begins with: “Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.” The purpose of lorem ipsum is to create
        a natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content. The passage experienced
        a surge in popularity during the 1960s when Letraset used it on their
        dry-transfer sheets, and again during the 90s as desktop publishers
        bundled the text with their software. Today it&apos;s seen all around
        the web; on templates, websites, and stock designs. Use our generator to
        get your own, or read on for the authoritative history of lorem ipsum.
      </p>
    </div>
  )
}
