import type { CollectionConfig } from 'payload'

export const Content: CollectionConfig = {
  slug: 'content',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'homepage_title',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
  upload: true,
}
