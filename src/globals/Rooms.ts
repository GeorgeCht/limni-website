import { CallToActionBlock } from '@/blocks/CallToAction'
import { SelectedExperiencesBlock } from '@/blocks/SelectedExperiences'
import type { GlobalConfig } from 'payload'

export const RoomsPage: GlobalConfig = {
  slug: 'roomsPage',
  fields: [
    {
      type: 'group',
      name: 'intro',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Find your perfect room',
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
                placeholder: 'Request a call',
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
      type: 'group',
      name: 'titles',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'superiorRooms',
              type: 'text',
              required: true,
              localized: true,
              defaultValue: 'Superior Rooms',
              admin: {
                placeholder: 'Superior rooms',
              },
            },
            {
              name: 'standardRooms',
              type: 'text',
              required: true,
              localized: true,
              defaultValue: 'Standard Rooms',
              admin: {
                placeholder: 'Standard rooms',
              },
            },
            {
              name: 'deluxeRooms',
              type: 'text',
              required: true,
              localized: true,
              defaultValue: 'Deluxe Rooms',
              admin: {
                placeholder: 'Deluxe rooms',
              },
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
