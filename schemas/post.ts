import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'user'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brief',
      title: 'Brief',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isEditorsPick',
      title: "Is Editor's Pick",
      type: 'boolean',
    }),
    defineField({
      name: 'viewCount',
      title: 'View Count',
      type: 'number',
    }),
    defineField({
      name: 'likesCount',
      title: 'Likes Count',
      type: 'number',
    }),
    defineField({
      name: 'sharesCount',
      title: 'Shares Count',
      type: 'number',
    }),
    defineField({
      name: 'relevanceScore',
      title: 'Relevance Score',
      type: 'number',
    }),
  ],
})
