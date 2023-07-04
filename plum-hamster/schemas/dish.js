export default {
    name: 'dish',
    type: 'document',
      title: 'Dishes',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of dish'
      },
      {
        name:'image',
        type:'image',
        title:'Dish Image',
      },
      {
        name:'price',
        type:'number',
        title:'Price',
      },
      {
        name:'short_description',
        type:'string',
        title:'Short Description',
        validation:(Rule)=>Rule.required()
      }
    ]
  }