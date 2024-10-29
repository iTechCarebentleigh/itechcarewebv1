// schemas/templateImage.js
import { defineField } from 'sanity';

export const templateImage = defineField({
  name: 'templateImage',
  type: 'image',
  title: 'Template Image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'A brief description of the image for accessibility.',
    }),
  ],
});
