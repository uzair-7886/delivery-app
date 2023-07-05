import { ScrollView, Text,Image,View,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import location from '../assets/location.png'
import { ChevronRightIcon,StarIcon, } from 'react-native-heroicons/solid';
import {QuestionMarkCircleIcon} from 'react-native-heroicons/outline'
import Dish from '../components/Dish';
import Basket from '../components/Basket';

export default function Restaurant() {

const {
    params:{
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
    }
}=useRoute();

const navigation=useNavigation()

useLayoutEffect(()=>{
navigation.setOptions({
    headerShown:false
})
},[])

  return (
    <>
    <Basket/>
    <ScrollView className=''>
      {/* <Text>{title}</Text> */}
<View className='relative'>
      <Image
      source={{
        uri:urlFor(imgUrl).url()
      }}
      className='w-full h-56 bg-gray-300 p-4'
      />
      <TouchableOpacity className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
      onPress={()=>{
        navigation.goBack()
      }}
      >
        <ArrowLeftIcon size={22} color="#00CCBB"/>
      </TouchableOpacity>
    </View>
    <View className='bg-white'>
        <View className='px-4 pt-4'>
        <Text className='text-3xl font-bold'>{title}</Text>
        <View className='flex-row space-x-1 my-1 items-center'>
        <StarIcon
color='#00CCBB'
opacity={0.5}
size={22}
/>
<Text className='text-[#00CCBB]'>{rating}</Text>
<Text className='text-xs text-gray-500'>. {genre}</Text>
<Image
        source={location}
        className='w-5 h-5'
        />
        <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
        <Text className='text-gray-400 mt-2 pb-4'>{short_description}</Text>
        </View>
        <TouchableOpacity className='flex-row space-x-2 p-4 border-y border-gray-300 items-center'>
            <QuestionMarkCircleIcon color='gray' size={20} opacity={0.6}/>
            <Text className='pl-2 text-md flex-1 font-bold'>Have a food allergy?</Text>
            <ChevronRightIcon color='#00CCBB' />
        </TouchableOpacity>
    </View>
    <View className='pb-30'>
        <Text className='px-4 pt-6 mb-3 font-bold text-2xl'>Menu</Text>
    </View>
    {
        dishes.map((dish,index)=>{
            return(
                <Dish
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
                />
            )
        })
    }
    </ScrollView>
    </>
  )
}