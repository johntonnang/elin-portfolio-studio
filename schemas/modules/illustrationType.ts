import {defineField, defineType} from 'sanity'

export const illustrationType = defineType({
  name: 'illustration',
  title: 'Illustration',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      type: 'string',
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
  ],
})
