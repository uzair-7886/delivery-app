import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function CategoryCard({imgurl,title}) {
  return (
    <TouchableOpacity >
        <Image
        source={{
            uri:imgurl
        }}
        className='w-20 h-20 mr-2 bg-black rounded'
        />
        <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}