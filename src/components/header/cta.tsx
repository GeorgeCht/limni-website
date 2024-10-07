'use client'

import React from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

import { cn } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'
import { ArrowDownIcon } from '@/components/vectors/arrow'
import { useLocale } from '@/stores/locale'

interface ActionCardProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'children'
  > {
  title: string
  cta: string
}

const ActionCard = ({ title, cta, className, ...props }: ActionCardProps) => {
  return (
    <div
      className={cn(
        'group relative w-1/2 max-lg:w-full min-h-64 overflow-hidden cursor-pointer bg-black/15',
        className,
      )}
      {...props}
    >
      <img
        src={'/assets/placeholder.avif'}
        alt={'card'}
        className={
          'absolute w-full h-full object-cover opacity-65 z-0 transition-transform duration-500 group-hover:scale-105'
        }
      />
      <div
        role={'contentinfo'}
        className={
          'w-full h-full p-8 md:p-10 *:z-10 flex flex-col gap-4 justify-end items-start'
        }
      >
        <h2
          className={
            'font-canela text-white text-4xl md:text-5xl lg:text-6xl leading-none w-fit'
          }
        >
          {title}
        </h2>
        <div
          role={'button'}
          onClick={() => {}}
          className={
            'group flex flex-row items-center gap-6 w-full h-[50px] cursor-pointer'
          }
        >
          <span
            className={
              'flex size-2.5 group-hover:size-fit group-hover:p-3 rounded-full bg-transparent border border-white group-hover:border-[#B47351] group-hover:bg-[#B47351] transition-all ease-in-out duration-[475ms]'
            }
          >
            <ArrowDownIcon
              className={
                'size-0 group-hover:size-6 self-center text-white -rotate-90'
              }
            />
          </span>
          <span className={'uppercase text-white w-fit'}>{cta}</span>
        </div>
      </div>
    </div>
  )
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  headerRef: React.RefObject<HTMLElement | null>
}

export const HeaderCTA = ({
  isOpen,
  setIsOpen,
  headerRef,
  className,
  ...props
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const card1 = React.useRef<HTMLDivElement>(null)
  const card2 = React.useRef<HTMLDivElement>(null)
  const router = useTransitionRouter()

  const { locale } = useLocale()

  useGSAP(() => {
    let width = 0
    if (typeof window !== 'undefined') {
      width = window.innerWidth
    }
    if (isOpen) {
      gsap.fromTo(
        ref.current,
        { yPercent: -100, height: 0 },
        {
          yPercent: 0,
          height: width < 768 ? '700' : '496',
          duration: 0.985,
          ease: 'circ.inOut',
        },
      )
      gsap.fromTo(
        card1.current,
        { y: -75, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.875,
          delay: 0.175,
          ease: 'circ.inOut',
        },
      )
      gsap.fromTo(
        card2.current,
        { y: -75, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.875,
          delay: 0.275,
          ease: 'circ.inOut',
        },
      )
    } else {
      gsap.to(ref.current, {
        yPercent: -100,
        delay: 0.175,
        duration: 0.625,
        ease: 'circ.inOut',
      })
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      const dialogRef = ref.current
      const headerElement = headerRef.current

      // Check if the mouse leaves both the dialogRef and headerRef
      if (isOpen && dialogRef && headerElement) {
        const dialogRect = dialogRef.getBoundingClientRect()
        const headerRect = headerElement.getBoundingClientRect()

        const isInDialog =
          event.clientX >= dialogRect.left &&
          event.clientX <= dialogRect.right &&
          event.clientY >= dialogRect.top &&
          event.clientY <= dialogRect.bottom

        const isInHeader =
          event.clientX >= headerRect.left &&
          event.clientX <= headerRect.right &&
          event.clientY >= headerRect.top &&
          event.clientY <= headerRect.bottom

        if (!isInDialog && !isInHeader) {
          setIsOpen(false)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    const dialogRef = ref.current

    if (dialogRef) {
      dialogRef.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      if (dialogRef) {
        dialogRef.removeEventListener('mouseleave', handleMouseLeave)
      }
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, setIsOpen])

  return (
    <div
      ref={ref}
      role={'dialog'}
      className={cn(
        'w-dvw h-0 z-[9999] bg-[#414135] fixed top-0 left-0 overflow-hidden',
        className,
      )}
      {...props}
    >
      <div
        className={
          'flex max-md:flex-col gap-9 size-full pt-28 md:pt-40 pb-10 md:pb-20 px-10 md:px-20 transition-all'
        }
      >
        <ActionCard
          ref={card1}
          title={locale === 'en' ? 'Find your room' : 'Βρειτε δωματιο'}
          cta={locale === 'en' ? 'View all rooms' : 'Ολα τα δωματια'}
          onClick={() => router.push('/rooms')}
        />
        <ActionCard
          ref={card2}
          title={locale === 'en' ? 'Fast booking' : 'Καντε κρατηση'}
          cta={locale === 'en' ? 'Book an appartment' : 'Κρατηση δωματιου'}
          onClick={() => router.push('/rooms')}
        />
      </div>
    </div>
  )
}
