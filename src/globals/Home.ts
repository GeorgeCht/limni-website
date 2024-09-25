import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      interfaceName: 'hero',
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
          type: 'row',
          fields: [
            {
              name: 'mainCtaLabel',
              label: 'Call to action text label',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                description: 'Call to action text label',
                placeholder: 'Book a room',
              },
            },
            {
              name: 'mainCtaUrl',
              label: 'Call to action URL',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
                description: 'URL for the call to action',
                placeholder: '/rooms',
              },
            },
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
          type: 'row',
          fields: [
            {
              name: 'paragraphCtaLabel',
              label: 'Call to action text label',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                description: 'Call to action text label below paragraph',
                placeholder: 'Get directions',
              },
            },
            {
              name: 'paragraphCtaUrl',
              label: 'Call to action URL',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
                description: 'URL for the call to action below paragraph',
                placeholder: 'https://www.google.com/maps/...',
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
      name: 'second',
      label: 'Second Section',
      type: 'group',
      interfaceName: 'second',
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
  ],
}
