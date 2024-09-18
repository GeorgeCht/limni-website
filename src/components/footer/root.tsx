'use client'

import type React from 'react'

import { Logo } from '../vectors/logo'
import { Link } from 'next-view-transitions'
import { HoverFlip } from '../ui/hoverflip'
import { Button } from '../ui/button'
import { ArrowUpIcon } from '../vectors/arrow'
import { FooterNewsletter } from './newsletter'

export const FooterRoot = ({
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const PageLinks = [
    {
      label: 'Find a room',
      href: '/rooms',
    },
    {
      label: 'Our hotel',
      href: '/about',
    },
    {
      label: 'Experiences',
      href: '/experiences',
    },
    {
      label: 'Directions',
      href: 'https://google.com',
    },
    {
      label: 'FAQs',
      href: '/faqs',
    },
  ]

  const socialLinks = [
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
    <footer
      className={
        'flex flex-col gap-12 items-start w-full py-10 md:py-16 pb-12 md:pb-20 px-10 md:px-20 bg-[#414135] text-[#C7B09C] transition-all'
      }
      {...props}
    >
      <div className={'flex flex-col lg:flex-row gap-8 items-start w-full'}>
        <div
          className={
            'w-full lg:w-1/2 flex flex-col md:flex-row gap-8 justify-start items-start'
          }
        >
          <div
            className={
              'w-full md:w-1/3 lg:w-[40%] flex flex-col justify-start items-start'
            }
          >
            <Logo.Root className={'w-32 md:w-40'} />
          </div>
          <div
            className={
              'w-full md:w-2/3 lg:w-[60%] flex flex-col justify-start items-start max-lg:-ml-3.5 max-md:ml-0'
            }
          >
            <FooterNewsletter />
          </div>
        </div>
        <div
          className={
            'w-full lg:w-1/2 max-sm:flex-col flex gap-8 justify-start items-start'
          }
        >
          <ul
            className={
              'w-full sm:w-1/3 flex flex-col gap-1.5 justify-start items-start'
            }
          >
            {PageLinks.map((link, index) => (
              <li
                key={`${link.href}-${index}`}
                className={'font-canela text-2xl leading-none uppercase'}
              >
                <HoverFlip.Link href={link.href}>{link.label}</HoverFlip.Link>
              </li>
            ))}
          </ul>
          <div
            className={
              'w-full sm:w-1/3 flex flex-col gap-10 justify-start items-start'
            }
          >
            <HoverFlip.Link
              href={'/contact'}
              className={'font-canela text-2xl leading-none uppercase'}
            >
              Contact
            </HoverFlip.Link>
            <ul className={'flex flex-col gap-1.5'}>
              {socialLinks.map((link, index) => (
                <li
                  key={`${link.href}-${index}`}
                  className={'font-canela text-2xl leading-none uppercase'}
                >
                  <HoverFlip.Link href={link.href}>{link.label}</HoverFlip.Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              'w-full sm:w-1/3 flex flex-col justify-start sm:items-end'
            }
          >
            <Button
              className={
                'w-fit text-[15px] text-[#C7B09C] bg-transparent border border-[#C7B09C]/75'
              }
              onClick={() => window.scrollTo(0, 0)}
            >
              <span className={'max-[1380px]:hidden'}>Back to top</span>
              <ArrowUpIcon className={'size-3.5'} />
            </Button>
          </div>
        </div>
      </div>
      <div
        className={
          'flex flex-col lg:flex-row gap-8 items-end w-full *:uppercase *:text-sm *:leading-tight'
        }
      >
        <div
          className={
            'w-full lg:w-1/2 flex flex-col md:flex-row gap-8 justify-start items-end'
          }
        >
          <div
            className={
              'w-full md:w-1/3 lg:w-[40%] flex flex-col text-balance justify-start items-start'
            }
          >
            Limni Hotel © 2024. Created by{' '}
            <Link href={'/home'}>Usually.design</Link>
          </div>
          <div
            className={
              'w-full md:w-2/3 lg:w-[60%] flex flex-col justify-start items-start max-lg:-ml-3.5 max-md:ml-0'
            }
          >
            <HoverFlip.Link href={'/terms'}>Terms of Use</HoverFlip.Link>
          </div>
        </div>
        <div
          className={
            'w-full lg:w-1/2 max-sm:flex-col flex gap-8 justify-start items-end'
          }
        >
          <div
            className={
              'w-full sm:w-1/3 flex flex-col justify-start items-start'
            }
          >
            <HoverFlip.Link href={'/residency-policy'}>
              Residency Policy
            </HoverFlip.Link>
          </div>
          <div
            className={
              'w-full sm:w-1/3 flex flex-col justify-start items-start'
            }
          >
            <HoverFlip.Link href={'/privacy'}>Privacy Policy</HoverFlip.Link>
          </div>
          <div
            className={
              'w-full sm:w-1/3 flex flex-col justify-start sm:items-end'
            }
          >
            <Link href={'/home'}>
              <Logo.Mark className={'size-10 md:size-12'} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
