import {defineField, defineType} from 'sanity'

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'object',
  fields: [
    defineField({
      name: 'school',
      type: 'string',
      title: 'School',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'degree',
      type: 'string',
      title: 'Degree',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'string',
      title: 'Date',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
