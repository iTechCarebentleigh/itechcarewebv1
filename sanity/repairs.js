import { defineType, defineField } from 'sanity';
import { repairCategory } from './repaircategories'; // Correct import

export const repairs = defineType({
  name: 'repairs',
  title: 'Repairs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Repair Page Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
    }),
    defineField({
      name: 'coverImage',
      type: 'image', // Field for cover page
      title: 'Cover Image',
      options: {
        hotspot: true, // Enables image cropping feature
      },
      validation: (rule) => rule.required().error('Cover image is required'),
    }),
    defineField({
      name: 'metaTags',
      type: 'array',
      title: 'Meta Tags',
      of: [{ type: 'string' }],
      description: 'Add relevant SEO meta tags.',
    }),
    defineField({
      name: 'repairs',
      type: 'array',
      title: 'Repair Categories',
      of: [{ type: 'repairCategory' }], // Reference repairCategory schema
      validation: (rule) => rule.required().error('Category is required')
    }),
  ],
});
