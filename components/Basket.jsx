import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectTotalPrice } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { ShoppingCartIcon } from 'react-native-heroicons/solid'

const Basket = () => {

    const items=useSelector(selectBasketItems);
    const navigation=useNavigation();
    const total=useSelector(selectTotalPrice)

    if(items.length===0)return null
  return (
    <View className='absolute bottom-10  z-50 w-full'>
      {/* <Text>{total}</Text> */}
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Basket')
      }}
      className='bg-[#d70f62fb] mx-5 p-4 rounded-lg flex-row items-center space-x-1'>
        <View className='flex-row items-center'>
<ShoppingCartIcon
size={20}
color='white'
/>
        <Text className='text-white text-lg font-extrabold  py-1 px-2 rounded'>{items.length}</Text>
        </View>
        <Text className='text-white font-extrabold flex-1 text-lg text-center'>View Basket</Text>
        <Text className='text-lg font-extrabold text-white'>PKR {total}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Basket