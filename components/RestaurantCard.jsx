import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
// import {LocationMarkerIcon} from 'react-native-heroicons/outline'
import location from '../assets/location.png'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

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
    const navigation=useNavigation();
  return (

    <TouchableOpacity
    onPress={()=>{
        navigation.navigate('Restaurant',{
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

        })
    }}
    className='bg-slate-100 ml-1 mr-3 shadow-xl'>
<Image
source={{
    uri: urlFor(imgUrl).url()
}}
className='h-36 w-64 rounded-sm bg-slate-500'
/>
<View className='px-3 pb-4'>
    <Text className='font-bold text-lg pt-2'>{title}</Text>
    <View className='flex-row items-center space-x-1'>
<StarIcon
color='#D70F64'
opacity={0.5}
size={22}
/>
<Text className='text-[#D70F64]'>{rating} </Text>
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