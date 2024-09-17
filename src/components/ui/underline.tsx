'use client'

import React from 'react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'

import { Link } from 'next-view-transitions'
import { Transition } from 'react-transition-group'

import type { LinkProps } from 'next/link'

interface Props extends LinkProps {
  underLineSize?: number
  active?: boolean
  backgroundExitPosition?: number
  className?: string
  children: React.ReactNode
}

export const UnderlinedLink = ({ className, ...props }: Props) => {
  const link = React.useRef<HTMLAnchorElement>(null)
  const [hovering, setHovering] = React.useState(false)

  const underLineSize = props.underLineSize || 2
  const active = props.active || false
  const backgroundExitPosition = props.backgroundExitPosition || 2000

  return (
    <Transition nodeRef={link} in={hovering || active} timeout={875}>
      {(state) => {
        let backgroundSize = `0 ${underLineSize}px`
        let backgroundPosition = '0 90%'
        let transitionTime = '0.5s'

        if (state !== 'exited') {
          backgroundSize = `100% ${underLineSize}px`
        }

        if (state === 'exiting') {
          backgroundPosition = `${backgroundExitPosition}px 90%`
        }

        if (state === 'exited') {
          transitionTime = '0s'
          backgroundPosition = '0 90%'
        }

        return (
          <span className={cn('font-canela uppercase', className)}>
            <Link
              {...props}
              ref={link}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{
                backgroundImage: 'linear-gradient(currentColor, currentColor)',
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPosition,
                textDecoration: 'none',
                backgroundRepeat: 'no-repeat',
                transition: `all ${transitionTime} ease-in-out`,
              }}
            >
              {props.children}
            </Link>
          </span>
        )
      }}
    </Transition>
  )
}

interface WithImageProps extends Props {
  image: string
  children: string
}

export const UnderlinedLinkWithImage = ({
  className,
  image,
  ...props
}: WithImageProps) => {
  const link = React.useRef<HTMLAnchorElement>(null)
  const imageRef = React.useRef<HTMLImageElement>(null)
  const containerRef = React.useRef<HTMLElement>(null)

  const [hovering, setHovering] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [isWideScreen, setIsWideScreen] = React.useState(false)

  const underLineSize = props.underLineSize || 2
  const active = props.active || false
  const backgroundExitPosition = props.backgroundExitPosition || 2000

  const words = props.children.split(' ')

  React.useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    if (!isWideScreen) return

    if (hovering && imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.675,
        ease: 'circ.inOut',
        onStart: () => setIsTransitioning(true),
        onComplete: () => setIsTransitioning(false),
      })
      gsap.to(containerRef.current, {
        width: '6.125vw',
        duration: 0.675,
        ease: 'circ.inOut',
        onStart: () => setIsTransitioning(true),
        onComplete: () => setIsTransitioning(false),
      })
    } else if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.325,
        ease: 'circ.inOut',
        onStart: () => setIsTransitioning(true),
        onComplete: () => setIsTransitioning(false),
      })
      gsap.to(containerRef.current, {
        width: 0,
        duration: 0.325,
        ease: 'circ.inOut',
        onStart: () => setIsTransitioning(true),
        onComplete: () => setIsTransitioning(false),
      })
    }
  }, [hovering, isWideScreen])

  return (
    <Transition
      nodeRef={link}
      in={isWideScreen && (hovering || active)}
      timeout={875}
    >
      {(state) => {
        let backgroundSize = `0 ${underLineSize}px`
        let backgroundPosition = '0 90%'
        let transitionTime = '0.5s'

        if (state !== 'exited' && isWideScreen) {
          backgroundSize = `100% ${underLineSize}px`
        }

        if (state === 'exiting' && isWideScreen) {
          backgroundPosition = `${backgroundExitPosition}px 90%`
        }

        if (state === 'exited' || !isWideScreen) {
          transitionTime = '0s'
          backgroundPosition = '0 90%'
        }

        return (
          <span
            className={cn(
              'font-canela uppercase inline-block relative',
              className,
            )}
          >
            <Link
              {...props}
              ref={link}
              onMouseEnter={() =>
                isWideScreen && !isTransitioning && setHovering(true)
              }
              onMouseLeave={() => {
                if (isWideScreen) {
                  // If transitioning, wait for the transition to finish
                  // before setting hovering to false
                  if (isTransitioning) {
                    setTimeout(() => setHovering(false), 500)
                  } else {
                    setHovering(false)
                  }
                }
              }}
              style={{
                backgroundImage: 'linear-gradient(currentColor, currentColor)',
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPosition,
                textDecoration: 'none',
                backgroundRepeat: 'no-repeat',
                transition: `all ${transitionTime} ease-in-out`,
              }}
            >
              {isWideScreen && words.length > 1 ? (
                <React.Fragment>
                  {words[0]}{' '}
                  <span
                    ref={containerRef}
                    className={'relative inline-block w-full h-full'}
                  >
                    <img
                      ref={imageRef}
                      src={image}
                      alt={props.children}
                      className={
                        'absolute -mt-[70%] w-fit h-fit opacity-0 object-contain'
                      }
                    />
                  </span>{' '}
                  {words.slice(1).join(' ')}
                </React.Fragment>
              ) : isWideScreen ? (
                <React.Fragment>
                  <span
                    ref={containerRef}
                    className={'relative inline-block w-full h-full mr-4'}
                  >
                    <img
                      ref={imageRef}
                      src={image}
                      alt={props.children}
                      className={
                        'absolute -mt-[70%] mr-1 w-fit h-fit opacity-0 object-contain'
                      }
                    />
                  </span>
                  {props.children}
                </React.Fragment>
              ) : (
                props.children
              )}
            </Link>
          </span>
        )
      }}
    </Transition>
  )
}
