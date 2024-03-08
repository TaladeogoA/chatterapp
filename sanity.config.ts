import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'chatter',

  projectId: 'x9n5g34c',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
