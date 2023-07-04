import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({title,description,featuredCategory}) {
  return (
    <View>
      {/* <Text>FeaturedRow</Text> */}
      <View className='mt-4 flex-row items-center justify-between px-5'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#00CCBB"/> 
      </View>
      <Text className='px-5 text-xs text-gray-500'>{description}</Text>
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15
    }}
    className='pt-4'
    >
        <RestaurantCard
        id='123'
        imgUrl='https://links.papareact.com/wru'
        title='KFC'
        rating='4.5'
        genre='Fast Food'
        address='Gulgasht colony'
        short_description='finger licking goodness'
        dishes={[]}
        long={20}
        lat={5}
        />

    </ScrollView>
    </View>
  )
}