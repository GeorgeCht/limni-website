import type { Block } from 'payload'

export const SelectedExperiencesBlock: Block = {
  slug: 'SelectedExperiences',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'header',
          label: 'Header',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: 'Experience a deluxe stay',
          admin: {
            placeholder: 'Experience a deluxe stay',
          },
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: 'Boutique experiences',
          admin: {
            placeholder: 'Boutique experiences',
          },
        },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        placeholder: 'We offer a wide range of experiences...',
      },
    },
    {
      name: 'paragraph',
      label: 'Bottom paragraph',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        placeholder: 'We offer a wide range of experiences...',
      },
    },
    {
      name: 'experiences',
      type: 'array',
      label: 'Selected experiences',
      maxRows: 5,
      labels: {
        singular: 'Selected experience',
        plural: 'Selected experiences',
      },
      fields: [
        {
          name: 'experience',
          type: 'relationship',
          relationTo: 'experiences',
          label: 'Experience',
          required: true,
        },
        {
          name: 'video',
          type: 'upload',
          label: 'On hover video',
          relationTo: 'media',
        },
      ],
    },
  ],
}
