import { slugField } from '@/lib/slug'
import type { CollectionConfig } from 'payload'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        position: 'sidebar',
        description: 'Name of the experience',
        placeholder: 'Botanical Spa Experience',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Short description paragraph',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      localized: true,
      admin: {
        description: 'The title after the image slider',
      },
    },
    {
      name: 'Call to action',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'ctaLabel',
              label: 'Call to action button text label',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                description: 'The call to action text label',
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
                description: 'The URL for the call to action',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Mid Section',
      type: 'group',
      interfaceName: 'mid',
      fields: [
        {
          name: 'title',
          label: 'Mid section title',
          type: 'text',
          localized: true,
          admin: {
            placeholder: 'Our guests favorite',
          },
        },
        {
          name: 'paragraph',
          label: 'Mid section paragraph',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'includePolicy',
          label: 'Include policy link',
          type: 'checkbox',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'ctaLabel',
              label: 'Call to action button text label',
              type: 'text',
              localized: true,
              admin: {
                width: '25%',
                description: 'The call to action text label',
                placeholder: 'View our menu',
              },
            },
            {
              name: 'ctaUrl',
              label: 'Call to action URL',
              type: 'text',
              admin: {
                width: '25%',
                description: 'The URL for the call to action',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'frontImage',
              label: 'Front image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'backImage',
              label: 'Back image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    {
      name: 'availability',
      label: 'Availability',
      type: 'radio',
      required: true,
      options: [
        {
          label: 'Summer',
          value: 'summer',
        },
        {
          label: 'Winter',
          value: 'winter',
        },
        {
          label: 'Spring',
          value: 'spring',
        },
        {
          label: 'Fall',
          value: 'fall',
        },
        {
          label: 'All seasons',
          value: 'all',
        },
      ],
    },
    {
      name: 'Media',
      type: 'group',
      fields: [
        {
          name: 'images',
          label: 'Slider photos',
          type: 'upload',
          hasMany: true,
          relationTo: 'media',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'cover',
              label: 'Cover photo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'frontDisplay',
              label: 'Front display photo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
    slugField('name'),
  ],
}
