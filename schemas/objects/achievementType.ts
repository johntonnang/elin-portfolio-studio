import {defineField, defineType} from 'sanity'

export const achievementType = defineType({
  name: 'achievements',
  title: 'Achievements',
  type: 'object',
  fields: [
    defineField({
      name: 'achievement',
      type: 'string',
      title: 'Achievement',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'from',
      type: 'string',
      title: 'From',
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
