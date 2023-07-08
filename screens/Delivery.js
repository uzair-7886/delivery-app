import { View, Text,SafeAreaView,TouchableOpacity,StatusBar,Image } from 'react-native'
import {React,useEffect,useRef} from 'react'
import { useNavigation} from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
// import {MapView,Marker} from 'react-native-maps'
import MapView from 'react-native-maps';
import { PhoneIcon } from 'react-native-heroicons/solid'
import Lottie from 'lottie-react-native';


const Delivery = () => {
    const animation = useRef<Lottie>(null)
    const navigation=useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const restaurant=useSelector(selectRestaurant)


    // var { width, height } = Dimensions.get('window')
    
  return (
    <View className='bg-[#D70F64] flex-1'>
         <StatusBar backgroundColor={'#D70F64'} barStyle={'default'} translucent={false} /> 
    <SafeAreaView className='z-50 '>
        <View className='flex-row justify-between items-center p-5'>
            
<TouchableOpacity
onPress={()=>{
    navigation.navigate("Home")
}}
>
<XMarkIcon
        size={30}
        color='white'
        />
</TouchableOpacity>
        
      <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white z-50 mx-5 my-2 rounded-md p-6 shadow-md'>
            <View className='flex-row justify-between'>

            <View >
                <Text className='text-lg text-gray-500 font-bold'>
                    Estimated Arrival
                </Text>
                <Text className='text-4xl font-bold'>
                     45-50 minutes
                </Text>
            </View>
                <Image
                source={{
                    uri:"https://links.papareact.com/fls"
                }}
                className='h-20 w-20'
                />
            </View>
            <Progress.Bar
            size={20}
            color='#D70F64'
            indeterminate={true}
            />
            <Text className='mt-3 text-gray-500'>
                Your order is being prepared by {restaurant.title}
            </Text>
        </View>
        </SafeAreaView>
        {/* <Text>hello</Text> */}
        {/* <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
        >
        </MapView> */}
        <View className='flex-row justify-center items-center p-5'>

        <Lottie
        className='w-80 mt-7'
        source={require("../assets/lottie-map.json")}
        autoPlay
        loop
        speed={0.5}
        // ref={animation}
        // loop={false}
        />
        </View>
        <SafeAreaView className='bg-white flex-row items-center justify-between p-4 h-28  w-full absolute bottom-0 rounded-t-3xl'>
            <View className='flex-row items-center space-x-4'>
        <Image
                source={{
                    uri:"https://links.papareact.com/wru"
                }}
                className='h-12 w-12 bg-gray-300  rounded-full ml-5'
                />
            <View>
                <Text className='text-lg font-bold'>Uzair Khan</Text>
                <Text className='text-gray-400 '>Your Rider</Text>
            </View>
            </View>
            <View className='mr-5'>
                <PhoneIcon
                size={30}
                color='#D70F64'
                />
            </View>
        </SafeAreaView>
    
    </View>
  )
}

export default Delivery