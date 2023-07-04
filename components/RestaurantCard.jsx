import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
// import {LocationMarkerIcon} from 'react-native-heroicons/outline'
import location from '../assets/location.png'

export default function RestaurantCard({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) {
  return (
    <TouchableOpacity className='bg-white '>
<Image
source={{
    uri:imgUrl
}}
className='h-36 w-64 rounded-sm bg-slate-500'
/>
<View className='px-3 pb-4'>
    <Text className='font-bold text-lg pt-2'>{title}</Text>
    <View className='flex-row items-center space-x-1'>
<StarIcon
color='#00CCBB'
opacity={0.5}
size={22}
/>
<Text className='text-[#00CCBB]'>{rating} </Text>
<Text className='text-xs text-gray-500'>. {genre}</Text>
    </View>

    <View className='flex-row items-center space-x-1'>
        {/* <Text className='text-xs text-gray-500'>{address}</Text> */}
        {/* <LocationMarkerIcon color='gray'/> */}
        <Image
        source={location}
        className='w-5 h-5'
        />
        <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
    </View>
</View>
    </TouchableOpacity>
  )
}