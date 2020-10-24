import {MdPerson as icon} from 'react-icons/md'
 
export default {
    name: "person",
    title: 'Slicesmasters',
    type: 'document',
    icon,
    fields: [
       {
            name: 'name',
            title: 'name',
            type: 'string',
            
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Tell a bit more about this person'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ],
}