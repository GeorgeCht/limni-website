import { CallToActionBlock } from '@/blocks/CallToAction'
import { PreFooterBlock } from '@/blocks/PreFooter'
import { SelectedExperiencesBlock } from '@/blocks/SelectedExperiences'
import { slugField } from '@/lib/slug'
import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Room name',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        position: 'sidebar',
        description: 'The name of the room',
        placeholder: 'Deluxe Poolside',
      },
    },
    {
      name: 'roomEssentials',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'code',
              required: true,
              label: 'Room code',
              type: 'text',
              admin: {
                width: '15%',
                description: 'Unique room code example: DP001',
                placeholder: 'DP001',
              },
            },
            {
              name: 'url',
              label: 'The external booking link',
              type: 'text',
              required: true,
              admin: {
                width: '15%',
                description: 'The external booking URL for the room',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'roomDetails',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'visitors',
              label: 'Allowed number of guests',
              defaultValue: 2,
              type: 'number',
              required: true,
              admin: {
                width: '15%',
                description: 'Maximum number of guests allowed in the room.',
                placeholder: '2',
              },
            },
            {
              name: 'area',
              label: 'Room area',
              type: 'text',
              required: true,
              admin: {
                width: '15%',
                description: 'The area of the room in square meters.',
              },
            },
            {
              name: 'beds',
              label: 'Number of beds',
              defaultValue: 2,
              type: 'number',
              required: true,
              admin: {
                width: '15%',
                description: 'The number of beds in the room.',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      label: 'Room category',
      type: 'radio',
      required: true,
      options: [
        {
          label: 'Superior',
          value: 'superior',
        },
        {
          label: 'Standard',
          value: 'standard',
        },
        {
          label: 'Deluxe',
          value: 'deluxe',
        },
      ],
    },
    {
      name: 'amenities',
      label: 'Amenities',
      type: 'select',
      defaultValue: ['tv', 'wifi'],
      required: true,
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: 'TV',
          value: 'tv',
        },
        {
          label: 'Wifi',
          value: 'wifi',
        },
        {
          label: 'Air conditioning',
          value: 'air_conditioning',
        },
        {
          label: 'Pool',
          value: 'pool',
        },
      ],
    },
    {
      name: 'midSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Mid section title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            placeholder:
              'The preeminent leader in integrated luxury hospitality design.',
          },
        },
        {
          name: 'label',
          label: 'Mid section label',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Guests favorite',
          },
        },
        {
          name: 'paragraph',
          label: 'Mid section paragraph',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'cta',
          type: 'blocks',
          label: 'Mid Section Link',
          minRows: 1,
          maxRows: 1,
          required: true,
          blocks: [CallToActionBlock({})],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'backImage',
              label: 'Back image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'frontImage',
              label: 'Front image',
              type: 'upload',
              relationTo: 'media',
              required: true,
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
    {
      name: 'prefooter',
      label: 'Pre Footer',
      type: 'group',
      fields: [
        {
          name: 'block',
          type: 'blocks',
          label: 'Block',
          minRows: 1,
          maxRows: 1,
          required: true,
          localized: true,
          blocks: [PreFooterBlock],
        },
      ],
    },
    {
      name: 'media',
      type: 'group',
      fields: [
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
              name: 'images',
              label: 'Slider photos',
              type: 'upload',
              hasMany: true,
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    slugField('name'),
  ],
}
