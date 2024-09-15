import type { GlobalConfig } from 'payload'

export const TextGlobals: GlobalConfig = {
  slug: 'text-contents',
  fields: [
    {
      name: 'mainHeader',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}
