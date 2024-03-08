import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayImage',
      title: 'Display Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'following',
      title: 'Following',
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
    }),
    defineField({
      name: 'followers',
      title: 'Followers',
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
  ],
})
