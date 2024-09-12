import type { GlobalConfig } from 'payload'

export const TextGlobals: GlobalConfig = {
  slug: 'text-contents',
  fields: [
    {
      name: 'main-header',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}
