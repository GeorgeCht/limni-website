'use client'

import React from 'react'
import gsap from 'gsap'

import { Link } from 'next-view-transitions'
import { useGSAP } from '@gsap/react'

import { cn } from '@/lib/utils'
import { useScroller } from '@/components/providers/scroll'
import { UnderlinedLinkWithImage } from '@/components/ui/underline'
import { HoverFlip } from '@/components/ui/hoverflip'

const ActionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        'relative w-1/2 max-lg:w-full min-h-72 flex justify-start bg-black/25'
      }
    >
      {children}
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

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        ref.current,
        { yPercent: -100, height: 0 },
        {
          yPercent: 0,
          height: 'fit-content',
          duration: 0.985,
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
          'flex max-md:flex-col gap-9 size-full pt-40 pb-10 md:pb-20 px-10 md:px-20 transition-all'
        }
      >
        <ActionCard>
          <h2 className={'font-canela text-white text-6xl'}>Find your room</h2>
        </ActionCard>
        <ActionCard>
          <h2 className={'font-canela text-white text-6xl'}>Fast booking</h2>
        </ActionCard>
      </div>
    </div>
  )
}
