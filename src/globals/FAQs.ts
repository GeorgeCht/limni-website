import { CallToActionBlock } from '@/blocks/CallToAction'
import type { GlobalConfig } from 'payload'

export const FAQsPage: GlobalConfig = {
  slug: 'questionsPage',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Frequently asked questions',
      admin: {
        placeholder: 'Frequently asked questions',
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Still have questions?',
      admin: {
        placeholder: 'Still have questions?',
      },
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        placeholder: 'We are here to help you.',
      },
    },
    {
      name: 'cta',
      type: 'blocks',
      label: 'Call to Action',
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
      type: 'group',
      name: 'roomCategories',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Explore our rooms',
          },
        },
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          localized: true,
          admin: {
            placeholder: 'We offer a wide range of rooms...',
          },
        },
      ],
    },
  ],
}
