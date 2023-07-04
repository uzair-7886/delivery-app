export default {
    name: 'category',
    type: 'document',
      title: 'Menu Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Category Name'
      },
      {
        name:'image',
        type:'image',
        title:'Category Image',
      }
    ]
  }