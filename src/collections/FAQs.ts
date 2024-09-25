import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'questions',
  admin: {
    useAsTitle: 'question',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      label: 'Question',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        placeholder: 'How do I book a room?',
      },
    },
    {
      name: 'answer',
      label: 'Answer',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        placeholder:
          'You can book a room by clicking on the "Book now" button.',
      },
    },
  ],
}
