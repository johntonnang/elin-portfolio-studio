import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      type: 'array',
      title: 'Experience',
      of: [{type: 'experience'}],
      validation: (Rule) => Rule.min(1).error('At least one experience entry is required.'),
    }),
    defineField({
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [{type: 'education'}],
      validation: (Rule) => Rule.min(1).error('At least one education entry is required.'),
    }),
    defineField({
      name: 'achievements',
      type: 'array',
      title: 'Achievements',
      of: [{type: 'achievements'}],
      validation: (Rule) => Rule.min(1).error('At least one achievement entry is required.'),
    }),
    defineField({
      name: 'resumeFile',
      type: 'file',
      title: 'Resume File',
      description: 'Upload your resume file',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
