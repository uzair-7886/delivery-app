export default {
    name: 'restaurant',
    type: 'document',
      title: 'Restaurant',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant Name',
        validation:(Rule)=>Rule.required()
      },
      {
        name:'short_description',
        type:'string',
        title:'short descriptio of restaurant',
        validation:(Rule)=>Rule.max(200)
      },
      {
        name:'image',
        type:'image',
        title:'Restaurant Image',
      },
      {
        name:'lat',
        type:'number',
        title:'Latitude',
      },
      {
        name:'long',
        type:'number',
        title:'Longitude',
      },
      {
        name:'address',
        type:'string',
        title:'Address',
        validation:(Rule)=>Rule.required()
      },
      {
        name:'rating',
        type:'number',
        title:'Rating betweeen 1-5',
        validation:(Rule)=>Rule.required()
        .min(1)
        .max(5)
        .error("Enter valid number between 1-5")
      },
      {
        name:'type',
        title:'Category',
        type:'reference',
        to:[{type:'category'}]
      },
      {
        name:'dishes',
        type:'array',
        title:'Dishes',
        of:[{type:'reference',to:[{type:'dish'}]}]
      }
    ]
  }