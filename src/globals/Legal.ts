import { TextBlock } from '@/blocks/TextBlock'

import type { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacyPolicy',
  fields: [
    {
      name: 'textBlocks',
      type: 'blocks',
      label: 'Textblocks',
      minRows: 1,
      required: true,
      localized: true,
      blocks: [TextBlock],
    },
  ],
}

export const TermsOfService: GlobalConfig = {
  slug: 'termsOfService',
  fields: [
    {
      name: 'textBlocks',
      type: 'blocks',
      label: 'Textblocks',
      minRows: 1,
      required: true,
      localized: true,
      blocks: [TextBlock],
    },
  ],
}

export const ResidencyPolicy: GlobalConfig = {
  slug: 'residencyPolicy',
  fields: [
    {
      name: 'textBlocks',
      type: 'blocks',
      label: 'Textblocks',
      minRows: 1,
      required: true,
      localized: true,
      blocks: [TextBlock],
    },
  ],
}
