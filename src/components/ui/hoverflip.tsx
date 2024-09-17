'use client'

import type React from 'react'

import { Link } from 'next-view-transitions'
import type { LinkProps } from 'next/link'
import { cn } from '@/lib/utils'

interface RootProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: string
}

const HoverFlipRoot = ({ children, className, ...props }: RootProps) => {
  return (
    <span
      className={cn(
        'linkflip relative inline-block overflow-hidden h-auto cursor-pointer',
        className,
      )}
      {...props}
    >
      <span data-text={children}>{children}</span>
    </span>
  )
}

interface Props extends LinkProps {
  children: string
  className?: string
}

const HoverFlipLink = ({ children, className, href, ...props }: Props) => {
  return (
    <Link
      className={cn(
        'linkflip relative inline-block overflow-hidden h-auto cursor-pointer',
        className,
      )}
      href={href}
      {...props}
    >
      <span data-text={children}>{children}</span>
    </Link>
  )
}

export const HoverFlip = {
  Root: HoverFlipRoot,
  Link: HoverFlipLink,
}
