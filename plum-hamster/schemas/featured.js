export default {
    name: 'featured',
    type: 'document',
      title: 'Featured',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Featured Category Name',
        validation:(Rule)=>Rule.required()
      },
      {
        name:'short_description',
        type:'string',
        title:'short descriptio of featured category',
        validation:(Rule)=>Rule.max(200)
      },
      {
        name:'restaurants',
        type:'array',
        title:'Featured restaurants',
        of:[{type:'reference',to:{type:'restaurant'}}]
      }
    ]
  }