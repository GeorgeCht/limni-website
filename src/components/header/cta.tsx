'use client'

import React from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

import { cn } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'

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
        <p className={'uppercase text-white w-fit'}>{cta}</p>
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
          title={'Find your room'}
          cta={'View all rooms'}
          onClick={() => router.push('/rooms')}
        />
        <ActionCard
          ref={card2}
          title={'Fast booking'}
          cta={'Book an appartment'}
          onClick={() => router.push('/rooms')}
        />
      </div>
    </div>
  )
}
