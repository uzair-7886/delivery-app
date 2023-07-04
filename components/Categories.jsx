import { ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
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
      <CategoryCard imgurl="https://links.papareact.com/wru" title="testing 1"/>
      <CategoryCard imgurl="https://links.papareact.com/wru" title="testing 2"/>
      <CategoryCard imgurl="https://links.papareact.com/wru" title="testing 3"/>
      <CategoryCard imgurl="https://links.papareact.com/wru" title="testing 4"/>
      <CategoryCard imgurl="https://links.papareact.com/wru" title="testing 5"/>
    </ScrollView>
  )
}