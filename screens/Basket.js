import { SafeAreaView, Text,View,TouchableHighlight,Image,TouchableOpacity,ScrollView,StatusBar } from 'react-native'
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectTotalPrice } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
// import { selectTotalPrice } from '../features/basketSlice'

const Basket = () => {
const navigation=useNavigation()
  const restaurant=useSelector(selectRestaurant)
  const items=useSelector(selectBasketItems)
  const dispatch=useDispatch()
  const [groupedItemsInBasket,setGroupedItemsInBasket]=useState([])
  const total=useSelector(selectTotalPrice)

  useMemo(()=>{
    const groupedItems=items.reduce((results,item)=>{
      (results[item.id]=results[item.id]||[]).push(item);
      return results
    },{})
    setGroupedItemsInBasket(groupedItems)
  },[items])

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })
  return (
    <SafeAreaView className='flex-1 bg-white '>
      <StatusBar backgroundColor='white' barStyle={'dark-content'} translucent={false} /> 
      {/* <Text>Basket</Text> */}
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#D70F64] shadow-sm'>
          <View>
            <Text className='text-lg font-bold text-center pb-1'>Basket</Text>
            <Text className='text-[#D70F64] text-center'>{restaurant.title}</Text>
          </View>
          <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          }}
          className='rounded-full bg-gray-100 absolute top-5 right-5'
          >
            {/* <Text>touch</Text> */}
            <XCircleIcon className size={50} color='#D70F64' />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center  space-x-4 py-3 bg-white my-5 shadow px-4'>
        <Image
                source={{
                    uri:"https://links.papareact.com/wru"
                }}
                className='w-7 h-7 bg-gray-300 p-5  rounded-full'
                />
                <Text className='text-lg text-gray-500 flex-1'>
                  Delivery in 45-50 minutes
                </Text>
                <Text className='text-xs text-[#D70F64]'>
                  Change location
                </Text>
        </View>
        <ScrollView >
                {
                  Object.entries(groupedItemsInBasket).map(([key,items],index)=>{
                    return(
                    <View key={key} className='flex-row items-center px-4 space-x-2 py-2 bg-white my-1 mx-2' >
                      <Text className='text-[#D70F64] '>{items.length}x </Text>
                      <Text className='flex-1'>{items[0].name}</Text>
                      <Text className='text-gray-500 text-sm'>PKR {items[0].price}</Text>
                      <Image
                      source={{
                        uri:urlFor(items[0].image).url()
                      }}
                      className='h-12 w-12 rounded-full'
                      />  
                      {/* <TouchableOpacity
                      onPress={()=>{
                        dispatch(removeFromBasket({id:key}))
                      }}
                      className='text-xs text-[#D70F64]'>Remove </TouchableOpacity> */}

                      <TouchableOpacity
                       onPress={()=>{
                        dispatch(removeFromBasket({id:key}))
                      }}
                      >
                        <Text className='text-sm text-white bg-[#D70F64] px-2 py-1 rounded-md'>
                          Remove
                        </Text>
                      </TouchableOpacity>
                      </View>
                    )
                  })
                  // items.map((item)=>)
                }
        </ScrollView>

        <View className='p-5 bg-white  mt-5 space-y-5'>
          {/* <Text>hello</Text> */}
          <View className='flex-row justify-between'>
            <Text className='text-gray-500'>Subtotal</Text>
            <Text className='text-gray-500'>PKR {total}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-500'>Delivery Fee</Text>
            <Text className='text-gray-500'>PKR 150</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='font-extrabold'>Order total</Text>
            <Text className='font-extrabold'>PKR {total+150}</Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Order")}
          className='bg-[#D70F64] rounded-lg p-4'
          >
            <Text className='text-white text-lg text-center font-bold'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Basket