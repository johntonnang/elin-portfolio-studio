import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'object',
  fields: [
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'string',
      title: 'Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
