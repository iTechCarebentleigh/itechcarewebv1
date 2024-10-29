// schemas/repairCategory.js
import { defineType, defineField } from 'sanity';
import { repairItem } from './repairItem';

export const repairCategory = defineType({
  name: 'repairCategory',
  title: 'Repair Category',
  type: 'object',
  fields: [
    defineField({
      name: 'categoryName',
      type: 'string',
      title: 'Category Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'templateImage',
      type: 'image',
      title: 'Template Image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'A brief description of the image for accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'repairs',
      type: 'array',
      title: 'Repairs',
      of: [{ type: 'repairItem' }],
      validation: (rule) => rule.required().error('Repair is required'),
    }),
  ],
});
