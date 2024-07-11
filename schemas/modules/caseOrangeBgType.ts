import {defineField, defineType} from 'sanity'

export const caseOrangeBgType = defineType({
  name: 'caseOrangeBg',
  title: 'Case with orange background',
  type: 'object',
  fields: [
    defineField({
      name: 'wip',
      type: 'boolean',
      title: 'Work in progress',
      description: 'If the case is under progress, check this box',
    }),
    defineField({
      name: 'caseNumber',
      type: 'string',
      title: 'Case number',
    }),
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preamble',
      type: 'string',
      title: 'Preamble',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
  ],
})
