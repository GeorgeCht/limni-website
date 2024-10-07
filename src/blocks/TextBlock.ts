import type { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'TextBlock',
  fields: [
    {
      type: 'text',
      name: 'header',
      required: true,
      localized: true,
    },
    {
      type: 'textarea',
      name: 'paragraph',
      required: true,
      localized: true,
    },
  ],
}
