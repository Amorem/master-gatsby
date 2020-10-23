import {MdLocalPizza as icon} from 'react-icons/md'
 
export default {
    name: "pizza",
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
       {
            name: 'name',
            title: 'Pizza name',
            type: 'string',
            description: 'Name of the pizza'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100            }
        },
        {
            name: 'image',
            title: 'Pizza Image',
            type: 'image',
            description: 'Image of the pizza',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Pizza price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000).max(50000)
        },
    ]
}