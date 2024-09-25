import type { Block } from 'payload'

interface Options extends Omit<Block, 'slug' | 'fields'> {
  label?:
    | {
        placeholder?: string
        description?: string
      }
    | undefined
  url?:
    | {
        placeholder?: string
        description?: string
      }
    | undefined
}

export const CallToActionBlock = ({ label, url, ...rest }: Options): Block => {
  return {
    slug: 'CallToAction',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: true,
            localized: true,
            admin: {
              description: label?.description || 'Call to action text',
              placeholder: label?.placeholder || '',
            },
          },
          {
            name: 'url',
            label: 'URL',
            type: 'text',
            required: true,
            admin: {
              description: url?.description || 'URL for the call to action',
              placeholder: url?.placeholder || '',
            },
          },
        ],
      },
    ],
    ...rest,
  }
}
