// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'
import path from 'node:path'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Rooms } from './collections/Rooms'
import { Experiences } from './collections/Experiences'
import { FAQs } from './collections/FAQs'

// Globals
import { HomePage } from './globals/Home'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [HomePage],
  collections: [Users, Media, Rooms, Experiences, FAQs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Greek',
        code: 'el',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [
    // storage-adapter-placeholder
  ],
})
