import { defineType, defineField } from 'sanity';

export const repairItem = defineType({
  name: 'repairItem',
  title: 'Repair Item',
  type: 'object',
  fields: [
    defineField({
      name: 'repairItemTitle', // Unique name to avoid conflicts
      type: 'string',
      title: 'Repair Item Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'A short description for SEO purposes.',
    }),
    defineField({
      name: 'metaTags',
      type: 'array',
      title: 'Meta Tags',
      of: [{ type: 'string' }],
      description: 'Add relevant SEO meta tags.',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc, { parent }) => parent && parent.repairItemTitle,
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero', // Hero section
      type: 'object',
      title: 'Hero Section',
      validation: (rule) =>
        rule
          .required(),
      fields: [
        defineField({
          name: 'heroTitle',
          type: 'string',
          title: 'Hero Title',
          description: 'The main title displayed in the hero section.',
          validation: (rule) =>
            rule
              .required()
        }),
        defineField({
          name: 'heroDescription',
          type: 'text',
          title: 'Hero Description',
          description: 'The supporting text for the hero section.',
          validation: (rule) =>
            rule
              .required()
        }),
      ],
    }),
    defineField({
      name: 'icon', // Icon field
      type: 'object',
      title: 'Icon',
      fields: [
        defineField({
          name: 'svg',
          type: 'text',
          title: 'Icon (SVG)',
          description: 'Paste the SVG HTML element here.',
          validation: (rule) =>
            rule
              .required()
              .min(10, 'SVG must contain at least 10 characters')
             
        }),
        defineField({
          name: 'position', // Position object
          type: 'object',
          title: 'Icon Position',
          fields: [
            defineField({
              name: 'top',
              type: 'number',
              title: 'Top',
              description: 'Distance from the top in %.',
            }),
            defineField({
              name: 'left',
              type: 'number',
              title: 'Left',
              description: 'Distance from the left in %.',
            }),
            defineField({
              name: 'right',
              type: 'number',
              title: 'Right',
              description: 'Distance from the right in %.',
            }),
            defineField({
              name: 'bottom',
              type: 'number',
              title: 'Bottom',
              description: 'Distance from the bottom in %.',
            }),
          ],
        }),
      ],
    }),
    
    
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule
          .required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'A brief description of the image for accessibility.',
          validation: (rule) =>
            rule
              .required()
        }),
      ],
    })
  ],
});
