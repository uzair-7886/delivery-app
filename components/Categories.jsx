import { ScrollView, Text } from 'react-native'
import {React,useState,useEffect} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'

export default function Categories() {

  const [categories,setCategories]=useState([])

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type=="category"]{
      ...,       
    }
    `).then(data=>setCategories(data))
  },[])

  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingVertical:10
        }}
    >
      {/* <Text>Categories</Text> */}
      {
        categories.map((category)=>{
          return(
            <CategoryCard
            key={category._id}
            imgurl={urlFor(category.image).url()}
            title={category.name}
            />
          )
        })
      }
      
    </ScrollView>
  )
}