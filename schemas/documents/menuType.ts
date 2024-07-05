import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Menu Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.min(1).error('A menu must have at least one link.'),
    }),
  ],
})
