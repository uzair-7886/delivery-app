import { View, Text,SafeAreaView,StatusBar } from 'react-native'
import React, { useEffect,useRef } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import order from '../assets/order.gif'
import * as Progress from 'react-native-progress'
import Lottie from 'lottie-react-native';
// import {Progress}

const Order = () => {
    const animation = useRef<Lottie>(null)
    const navigation=useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },4000)
    },[])
  return (
    <SafeAreaView
     className='bg-white flex-1 justify-center items-center'>
        <StatusBar backgroundColor='white' barStyle={'dark-content'} translucent={false} /> 
      {/* <Text>Order</Text> */}
      {/* <Animatable.Image
      source={order}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      /> */}
      <View>

      
      <Lottie
        className='w-96 mt-7'
        source={require("../assets/delivery.json")}
        autoPlay
        loop
        speed={0.5}
        // ref={animation}
        // loop={false}
        />
        </View>
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg text-[#D70F64] font-extrabold text-center my-10"
      >
        Waiting for restaurant to accept your order...
      </Animatable.Text>
      <Progress.Circle
      size={60}
      color='#D70F64'
      indeterminate={true}
      />
    </SafeAreaView>
  )
}

export default Order