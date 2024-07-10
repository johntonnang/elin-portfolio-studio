import {HiOutlineDesktopComputer, HiDocument, HiOutlineStar} from 'react-icons/hi'
import {TbColumns} from 'react-icons/tb'
import slugify from '../../lib/slugify'
import {defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Is Start Page',
      name: 'isStartPage',
      type: 'boolean',
      description: 'Mark this page as the start page',
      validation: (Rule) =>
        Rule.custom((isStartPage, {document}) => {
          if (isStartPage && document?.slug) {
            return 'Cannot mark as start page if slug is already defined'
          }
          return true
        }),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: "Use 'Generate' button to generate slug from title of page",
      options: {
        source: 'title',
        slugify: (input) => slugify(input),
      },
      validation: (Rule) =>
        Rule.custom(async (slug, {document}) => {
          if (document?.title !== 'Start' && document?.title !== '404 - Not Found' && !slug) {
            return 'Slug is required'
          }
          return true
        }),
      hidden: ({document}) => {
        return document?.title === 'Start' || document?.title === '404 - Not Found'
      },
    },
    {
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [
        {type: 'hero', icon: HiOutlineDesktopComputer},
        {type: 'caseWhiteBg', icon: HiOutlineStar},
        {type: 'caseOrangeBg', icon: HiOutlineStar},
        {type: 'resume', icon: HiDocument},
        {type: 'twoColumnTextImage', icon: TbColumns},
        {type: 'caseHero', icon: HiOutlineDesktopComputer},
        {type: 'caseDescriptionRight', icon: TbColumns},
        {type: 'caseDescriptionLeft', icon: TbColumns},
      ],
    },
  ],
})
