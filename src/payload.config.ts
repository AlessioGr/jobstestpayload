// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users.js'
import { Media } from './collections/Media.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      afterDashboard: ['@/components/Button.js'],
    },
  },
  jobs: {
    tasks: [
      {
        slug: 'createPost',
        inputSchema: [
          {
            name: 'title',
            type: 'text',
          },
        ],
        handler: async ({ input, req }) => {
          await req.payload.create({
            collection: 'post',
            data: {
              title: input.title,
            },
          })
          return {
            output: {},
          }
        },
      },
    ],
    workflows: [
      {
        slug: 'test',
        handler: async ({ req }) => {},
      },
    ],
  },
  collections: [
    Users,
    Media,
    {
      slug: 'post',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
