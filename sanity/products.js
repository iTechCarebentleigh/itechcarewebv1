import { list } from 'postcss'
import {defineField, defineType,defineArrayMember} from 'sanity'

export const product = defineType(
  {
    name: 'Product',
    title: 'Products Available',
    type: 'document',
    fields:[
        defineField({
        name: 'name',
        type: 'string',
        title:'Name',
        validation: rule => rule.required(),
        placeholder:'Enter the product name'
        })
        ,
    // defineField({
    //   name: 'color',
    //   type: 'color',
    //   title: 'Color',
    //   description: 'Select a color for the product',
    //   validation: rule => rule.required()
    // })
    // ,
        defineField({
          name: 'image',
          type: 'image',
          validation: rule => rule.required()

          
        }),
        defineField({
          name: 'description',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'block'
            }),
            defineArrayMember({
              type: 'image',
              options: {
                hotspot: true // Optional: Enables hotspot and crop tools for images
              }
            })
          ],
          validation: rule => rule.required()
        }),
        defineField({
          name: 'slug',
          type: 'slug',
          title:'Slug',
          description:'Assign the url for the product',
          validation: rule => rule.required(),
          options:{
            source:'name'
          }
        }),
        defineField({
          name: 'condition',
          type: 'string',
          title:'Condition',
          description:'Assign the condition of the product',
          validation: rule => rule.required()
  ,
          options:{
              list:[
                  {title:'Brand New',value:'brand new'},
                  {title:'Used',value:'used'},
                  {title:'Like New',value:'like new'}


              ]
          }
        }),
        defineField({
          name: 'instock',
          type: 'boolean',
          title:'In Stock?',
          validation: rule => rule.required()

        })
    ],
  },
  
)