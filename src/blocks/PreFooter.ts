import type { Block } from 'payload'

export const PreFooterBlock: Block = {
  slug: 'PreFooter',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'subheader',
          label: 'Subheader',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: 'Time to live the boutique experience',
        },
        {
          name: 'header',
          label: 'Header',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: 'Book your room today!',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'line1',
          label: 'Sub text line 1',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: 'Have any questions?',
        },
        {
          name: 'line2',
          label: 'Sub text line 2',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: 'Check our FAQ page',
        },
      ],
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
      defaultValue: '/rooms',
    },
    {
      name: 'background',
      label: 'Background photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
