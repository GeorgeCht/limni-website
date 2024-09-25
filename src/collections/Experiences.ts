import { CallToActionBlock } from '@/blocks/CallToAction'
import { SelectedExperiencesBlock } from '@/blocks/SelectedExperiences'
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
    {
      name: 'midSection',
      type: 'group',
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
      name: 'breakSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Break section title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            placeholder: 'Our guests favorite',
          },
        },
        {
          name: 'paragraph',
          label: 'Break section paragraph',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'cta',
          type: 'blocks',
          label: 'Break Section Link',
          minRows: 1,
          maxRows: 1,
          required: true,
          blocks: [
            CallToActionBlock({
              label: {
                placeholder: 'Contact us',
              },
              url: {
                placeholder: '/contact',
              },
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'smallImage',
              label: 'Small left image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'bigImage',
              label: 'Big right image',
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
    slugField('name'),
  ],
}
