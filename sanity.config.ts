import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {studioProjectId, studioTitle, studioDataset} from './environment'

export default defineConfig({
  name: 'Portfolio',
  title: studioTitle,

  projectId: studioProjectId,
  dataset: studioDataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
