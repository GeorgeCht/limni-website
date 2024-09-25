import type { GlobalConfig } from 'payload'

import { CallToActionBlock } from '@/blocks/CallToAction'
import { PreFooterBlock } from '@/blocks/PreFooter'
import { SelectedExperiencesBlock } from '@/blocks/SelectedExperiences'

export const Home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'header',
              label: 'Hero section title',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                placeholder: 'The boutique experience',
              },
            },
            {
              name: 'subtitle',
              label: 'Hero section subtitle',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                placeholder: 'Welcome to Southwestern Evoia',
              },
            },
          ],
        },
        {
          name: 'cta',
          label: 'Call to action',
          type: 'blocks',
          minRows: 1,
          maxRows: 1,
          blocks: [
            CallToActionBlock({
              label: {
                placeholder: 'Book a room',
              },
              url: {
                placeholder: '/rooms',
              },
            }),
          ],
        },
        {
          name: 'paragraph',
          label: 'Hero section paragraph',
          type: 'textarea',
          required: true,
          localized: true,
          admin: {
            description: 'Hero section paragraph',
            placeholder: 'Nestled in the serene coastal village of Limni...',
          },
        },
        {
          name: 'paragraphCta',
          label: 'Call to action',
          type: 'blocks',
          minRows: 1,
          maxRows: 1,
          blocks: [
            CallToActionBlock({
              label: {
                placeholder: 'Get directions',
                description: 'Call to action text label below paragraph',
              },
              url: {
                placeholder: 'https://www.google.com/maps/...',
                description: 'URL for the call to action below paragraph',
              },
            }),
          ],
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'second',
      label: 'Second Section',
      type: 'group',
      fields: [
        {
          name: 'header',
          label: 'Second section title',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder:
              'The preeminent leader in integrated luxury hospitality design.',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'ctaLabel',
              label: 'Call to action text label',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                description: 'Call to action text label',
                placeholder: 'Request a call',
              },
            },
            {
              name: 'ctaUrl',
              label: 'Call to action URL',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
                description: 'URL for the call to action',
                placeholder: '/contact',
              },
            },
          ],
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'third',
      label: 'Third Section / Room Categories',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Third section title',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Explore our rooms',
          },
        },
        {
          name: 'paragraph',
          label: 'Third section paragraph',
          type: 'textarea',
          required: true,
          localized: true,
          admin: {
            description: 'Third section paragraph',
            placeholder: 'We offer a wide range of rooms...',
          },
        },
      ],
    },
    {
      name: 'fourth',
      label: 'Fourth Section / Selected Rooms',
      type: 'group',
      fields: [
        {
          name: 'rooms',
          type: 'array',
          label: 'Selected rooms',
          maxRows: 5,
          labels: {
            singular: 'Room',
            plural: 'Rooms',
          },
          fields: [
            {
              name: 'room',
              type: 'relationship',
              relationTo: 'rooms',
              label: 'Room',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              label: 'Front image',
              relationTo: 'media',
              required: true,
            },
          ],
          // admin:{
          //   components: {
          //     RowLabel: ({ data, index }) => {
          //       return data?.title || `Slide ${String(index).padStart(2, '0')}`
          //     },
          //   },
          // }
        },
      ],
    },
    {
      name: 'fifth',
      label: 'Fifth Section / Selected Experiences',
      type: 'group',
      fields: [
        {
          name: 'selectedExperiences',
          label: 'Selected Experiences',
          type: 'blocks',
          minRows: 1,
          maxRows: 1,
          required: true,
          localized: true,
          blocks: [SelectedExperiencesBlock],
        },
      ],
    },
    {
      name: 'sixth',
      label: 'Sixth Section / Pre Footer',
      type: 'group',
      fields: [
        {
          name: 'prefooter',
          type: 'blocks',
          label: 'Pre Footer',
          minRows: 1,
          maxRows: 1,
          required: true,
          localized: true,
          blocks: [PreFooterBlock],
        },
      ],
    },
  ],
}
