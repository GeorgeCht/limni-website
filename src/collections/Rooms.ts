import { slugField } from '@/lib/slug'
import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Room essentials',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'code',
              unique: true,
              label: 'Room code',
              type: 'text',
              required: true,
              admin: {
                width: '15%',
                description: 'Unique room code example: DP001',
                placeholder: 'DP001',
              },
            },
            {
              name: 'name',
              label: 'Room name',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '15%',
                description: 'The name of the room',
                placeholder: 'Deluxe Poolside',
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
      name: 'Room details',
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
      name: 'Media',
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
