import {defineField, defineType, ValidationContext} from 'sanity'
import {LinkIcon} from '@sanity/icons'
import slugify from '../../lib/slugify'

interface LinkTypeValidationContext extends ValidationContext {
  parent: {
    linkType?: 'internal' | 'external' | 'email' | 'phone'
    title?: string
  }
}

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Link Title',
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      title: 'Link Type',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
          {title: 'Email', value: 'email'},
          {title: 'Phone', value: 'phone'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'elementId',
      type: 'slug',
      title: 'Element ID',
      description: "Use 'Generate' button to generate slug from title",
      options: {
        source: (_, options) => (options.parent as {title: string}).title,
        slugify: (input) => slugify(input),
      },
      hidden: ({parent}) => !parent || parent.linkType !== 'internal',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'external'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'external' && !field) {
            return 'A URL is required for external links.'
          }
          return true
        }).uri({allowRelative: true}),
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email',
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'email'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'email' && !field) {
            return 'An email address is required for email links.'
          }
          return true
        }),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'phone'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'phone' && !field) {
            return 'A phone number is required for phone links.'
          }
          return true
        }),
    }),
  ],
})
