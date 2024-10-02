import type { GlobalConfig } from 'payload'

export const ExperiencesPage: GlobalConfig = {
  slug: 'experiencesPage',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'headerBig',
          label: 'Big Header',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Welcom to Limni',
          },
        },
        {
          name: 'headerSmall',
          label: 'Small Header',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Explore the experiences',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            placeholder: 'Extra services',
          },
        },
      ],
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        description: 'Small text on top of the page',
        placeholder: 'We offer a wide range of experiences...',
      },
    },
    {
      name: 'headerBelow',
      type: 'text',
      required: true,
      localized: true,
      defaultValue:
        'Live the experience in the middle of the sea and nature of Limni',
      admin: {
        placeholder:
          'Live the experience in the middle of the sea and nature of Limni',
      },
    },
    {
      name: 'imageBig',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageSmall',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
