import { CallToActionBlock } from '@/blocks/CallToAction'
import type { GlobalConfig } from 'payload'

export const Shared: GlobalConfig = {
  slug: 'shared',
  fields: [
    {
      name: 'header',
      label: 'Header',
      type: 'group',
      fields: [
        {
          name: 'mainButton',
          label: 'Main button',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'labelLg',
                  label: 'Call to action text label',
                  type: 'text',
                  required: true,
                  localized: true,
                  admin: {
                    description: 'Call to action text label for large screens',
                    placeholder: 'Book your room',
                  },
                },
                {
                  name: 'labelSm',
                  label: 'Call to action text label',
                  type: 'text',
                  required: true,
                  localized: true,
                  admin: {
                    description: 'Call to action text label for mobile screens',
                    placeholder: 'Book now',
                  },
                },
                {
                  name: 'url',
                  label: 'Call to action URL',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'URL for the call to action',
                    placeholder: '/rooms',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'roomsCta',
              label: 'Rooms Call to Action',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  defaultValue: 'Find your room',
                  admin: {
                    description: 'Display title',
                    placeholder: 'Find your room',
                  },
                },
                {
                  name: 'label',
                  label: 'Call to action text label',
                  type: 'text',
                  required: true,
                  localized: true,
                  defaultValue: 'View all rooms',
                  admin: {
                    description: 'Call to action text label',
                    placeholder: 'View all rooms',
                  },
                },
                {
                  name: 'url',
                  label: 'Call to action URL',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'URL for the call to action',
                    placeholder: '/rooms',
                  },
                },
              ],
            },
            {
              name: 'bookingCta',
              label: 'Fast Booking Call to Action',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  defaultValue: 'Fast booking',
                  admin: {
                    description: 'Display title',
                    placeholder: 'Fast booking',
                  },
                },
                {
                  name: 'label',
                  label: 'Call to action text label',
                  type: 'text',
                  required: true,
                  localized: true,
                  defaultValue: 'Book an appartment',
                  admin: {
                    description: 'Call to action text label',
                    placeholder: 'Book an appartment',
                  },
                },
                {
                  name: 'url',
                  label: 'Call to action URL',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'URL for the call to action',
                    placeholder: '/rooms',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      label: 'Footer',
      type: 'group',
      fields: [
        {
          name: 'newsletter',
          label: 'Newsletter',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'header',
                  label: 'Newsletter header',
                  type: 'text',
                  required: true,
                  localized: true,
                  admin: {
                    placeholder: 'Get offer updates straight to your inbox!',
                  },
                },
                {
                  name: 'inputPlaceholder',
                  label: 'Newsletter input placeholder',
                  type: 'text',
                  required: true,
                  localized: true,
                  admin: {
                    placeholder: 'Enter your email',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'listedLinks',
          label: 'Listed URLs',
          type: 'group',
          fields: [
            {
              name: 'links',
              label: 'Links',
              type: 'blocks',
              minRows: 1,
              maxRows: 6,
              blocks: [
                CallToActionBlock({
                  label: {
                    placeholder: 'Find a room',
                  },
                  url: {
                    placeholder: '/rooms',
                  },
                }),
              ],
            },
          ],
        },
      ],
    },
  ],
}
