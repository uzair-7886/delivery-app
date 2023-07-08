import { View, Text } from 'react-native'
import {React,useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import { urlFor } from '../sanity'

export default function FeaturedRow({title,description,featuredCategory,restaurants}) {
  

  return (
    <View>
      {/* <Text>FeaturedRow</Text> */}
      <View className='mt-4 flex-row items-center justify-between px-5'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#D70F64"/> 
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
        {/* <RestaurantCard
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
        /> */}
        {
          restaurants.map((restaurant)=>{
            return(
              <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
              />
            )
          })
        }

    </ScrollView>
    </View>
  )
}