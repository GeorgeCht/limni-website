import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        placeholder: "Let's get in touch",
      },
    },
    {
      name: 'paragraph',
      label: 'Paragraph',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        description: 'Small text below title',
        placeholder: 'Get in touch with us...',
      },
    },
    {
      name: 'information',
      label: 'Contact Information',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'phoneNumber',
              label: 'Phone number',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                description: 'Include country code in phone number',
                placeholder: '0030 690 000 0000',
              },
            },
            {
              name: 'email',
              label: 'Email',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                description: 'Email address',
                placeholder: 'info@limni-hotel.com',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'location',
      label: 'Hotel Location',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'address1',
              label: 'Address Line 1',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                placeholder: 'Posidonos 24, Limni Center',
              },
            },
            {
              name: 'address2',
              label: 'Address Line 2',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '25%',
                placeholder: 'Southwestern Evoia',
              },
            },
          ],
        },
        {
          name: 'mapsUrl',
          label: 'Google Maps URL',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            description: 'Google Maps URL',
            placeholder: 'https://www.google.com/maps/...',
          },
        },
      ],
    },
    {
      name: 'socialMedia',
      label: 'Social Media',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
              unique: true,
              admin: {
                description: 'Social media label displayed',
                placeholder: 'Facebook',
              },
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                description: 'URL for the social media',
                placeholder: 'https://www.facebook.com/limni-hotel',
              },
            },
          ],
        },
      ],
    },
  ],
}
