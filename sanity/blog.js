import { list } from 'postcss'
import {defineField, defineType,defineArrayMember} from 'sanity'

export const blog = defineType(
  {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields:[
        defineField({
        name: 'name',
        type: 'string',
        title:'Name',
        validation: rule => rule.required(),
        placeholder:'Enter the product name'
        }),
        defineField({
          name: 'image',
          type: 'image',
          validation: rule => rule.required()

          
        }),
        defineField({
          name: 'description',
          type: 'array',
          of:[
            defineArrayMember({
              type:'block'
            })
          ],
          // title:'Description',
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