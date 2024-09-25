import { CallToActionBlock } from '@/blocks/CallToAction'
import { SelectedExperiencesBlock } from '@/blocks/SelectedExperiences'

import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  fields: [
    {
      name: 'introSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Intro section title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            placeholder: 'About our hotel',
          },
        },
        {
          name: 'paragraph',
          label: 'Intro section paragraph',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'cta',
          type: 'blocks',
          label: 'Intro Section Link',
          minRows: 1,
          maxRows: 1,
          required: true,
          blocks: [
            CallToActionBlock({
              label: {
                placeholder: 'Contact us',
              },
              url: {
                placeholder: '/contact',
              },
            }),
          ],
        },
      ],
    },
    {
      name: 'secondSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Second section title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            placeholder:
              'The preeminent leader in integrated luxury hospitality design.',
          },
        },
        {
          name: 'bulletPoints',
          label: 'Bullet Points Text Content',
          type: 'array',
          maxRows: 4,
          required: true,
          localized: true,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                placeholder: 'We offer a wide range of experiences...',
              },
            },
          ],
        },
        {
          name: 'sliderImages',
          label: 'Slider photos',
          type: 'upload',
          hasMany: true,
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'breakSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Break section title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            placeholder: 'Our guests favorite',
          },
        },
        {
          name: 'paragraph',
          label: 'Break section paragraph',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'cta',
          type: 'blocks',
          label: 'Break Section Link',
          minRows: 1,
          maxRows: 1,
          required: true,
          blocks: [
            CallToActionBlock({
              label: {
                placeholder: 'Contact us',
              },
              url: {
                placeholder: '/contact',
              },
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'smallImage',
              label: 'Small left image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'bigImage',
              label: 'Big right image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      name: 'recommendedExperiences',
      label: 'Recommended Experiences',
      type: 'blocks',
      minRows: 1,
      maxRows: 1,
      required: true,
      localized: true,
      blocks: [SelectedExperiencesBlock],
    },
  ],
}
