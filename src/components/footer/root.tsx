'use client'

import type React from 'react'

import { Link } from 'next-view-transitions'
import { FooterNewsletter } from './newsletter'

import { Logo } from '@/components/vectors/logo'
import { HoverFlip } from '@/components/ui/hoverflip'
import { Button } from '@/components/ui/button'
import { ArrowUpIcon } from '@/components/vectors/arrow'
import { staticData } from '@/lib/static'

import { usePathname } from 'next/navigation'
import { useLenis } from '@/lib/lenis'
import { useLocale } from '@/stores/locale'

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const copyright = staticData.footer.copyright
  const [beforeYear, afterYear] = copyright.split('{{year}}')
  const [beforeAuthor, afterAuthor] = afterYear.split('{{author}}')

  return (
    <div
      className={
        'w-full md:w-1/3 lg:w-[40%] flex flex-col text-balance justify-start items-start'
      }
    >
      {beforeYear}
      {currentYear}
      {beforeAuthor}
      <Link
        href={'https://usually.design'}
        target={'_blank'}
        className={'hover:underline'}
      >
        Usually.design
      </Link>
      {afterAuthor}
    </div>
  )
}

export const FooterRoot = ({
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const lenis = useLenis()
  const { locale } = useLocale()
  const pathname = usePathname()

  if (pathname.includes('contact')) return null

  return (
    <footer
      id={'footer'}
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
            {staticData.footer.menu.items.map((link, index) => (
              <li
                key={`${link.href}-${index}`}
                className={'font-canela text-2xl leading-none uppercase'}
              >
                <HoverFlip.Link href={link.href}>
                  {link.label[locale]}
                </HoverFlip.Link>
              </li>
            ))}
          </ul>
          <div
            className={
              'w-full sm:w-1/3 flex flex-col gap-10 justify-start items-start'
            }
          >
            <HoverFlip.Link
              href={staticData.footer.menu.contact.href}
              className={'font-canela text-2xl leading-none uppercase'}
            >
              {staticData.footer.menu.contact.label[locale]}
            </HoverFlip.Link>
            <ul className={'flex flex-col gap-1.5'}>
              {staticData.menu.socialMedia.map((link, index) => (
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
              onClick={() => {
                lenis?.scrollTo(0)
              }}
            >
              <span className={'max-[1380px]:hidden'}>
                {staticData.footer.backToTop.label[locale]}
              </span>
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
          <Copyright />
          <div
            className={
              'w-full md:w-2/3 lg:w-[60%] flex flex-col justify-start items-start max-lg:-ml-3.5 max-md:ml-0'
            }
          >
            <HoverFlip.Link href={staticData.footer.legal.terms.href}>
              {staticData.footer.legal.terms.label[locale]}
            </HoverFlip.Link>
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
            <HoverFlip.Link href={staticData.footer.legal.residency.href}>
              {staticData.footer.legal.residency.label[locale]}
            </HoverFlip.Link>
          </div>
          <div
            className={
              'w-full sm:w-1/3 flex flex-col justify-start items-start'
            }
          >
            <HoverFlip.Link href={staticData.footer.legal.privacy.href}>
              {staticData.footer.legal.privacy.label[locale]}
            </HoverFlip.Link>
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
