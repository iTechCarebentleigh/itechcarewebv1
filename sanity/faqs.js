import { defineField, defineType } from 'sanity';

export const faqs = defineType({
  name: 'faqs', // Typically in lowercase with no spaces
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: rule => rule.required(),
      placeholder: 'Enter the FAQ question',
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
      validation: rule => rule.required(),
      placeholder: 'Enter the FAQ answer',
    }),
  
  ],
});
