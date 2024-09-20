import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'code',
      label: 'Room code',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      label: 'Room name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'visitors',
      label: 'Allowed number of guests',
      type: 'number',
      required: true,
    },
    {
      name: 'area',
      label: 'Room area',
      type: 'text',
      required: true,
    },
    {
      name: 'beds',
      label: 'Number of beds',
      type: 'number',
      required: true,
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
  ],
}
