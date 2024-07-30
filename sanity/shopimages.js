import { defineField, defineType } from 'sanity';

export const shopimages = defineType({
  name: 'shopImages', // Typically in lowercase with no spaces
  title: 'Shop Images',
  type: 'document',
  fields: [
    defineField({
      name: 'index',
      type: 'number',
      title: 'Index',
      validation: rule => rule.required(),
      placeholder: 'Enter the image index',
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: rule => rule.required(),
    }),
  ],
});
