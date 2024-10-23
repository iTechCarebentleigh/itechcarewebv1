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
          description: (
            <div>
              <div style={{ color: 'orange',display:'flex',alignItems:'start',gap:'8px',borderRadius:'6px',padding:'12px',backgroundColor:'rgb(255 243 222)' }}>
                <svg style={{marginTop:'4x'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
  </svg>
  
  <span style={{marginLeft:'4px'}}>
    Note: Only enter two values (top/bottom & left/right), e.g. top:10 and left:10 or bottom:10 and right:10. <strong>Leave the unwanted fields empty</strong>
    
  </span>            
  </div>
  <img src=""></img>
            </div>
        ),          fields: [
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
