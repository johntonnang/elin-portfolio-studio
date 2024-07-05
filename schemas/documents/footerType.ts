import {defineField, defineType} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Footer Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.min(1).error('A footer must have at least one link.'),
    }),
  ],
})
