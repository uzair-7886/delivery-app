import { View, Text,SafeAreaView,Image,TextInput,ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from 'react-native-heroicons/outline'
import search from '../assets/search.png'
import adjust from '../assets/control.png'
import Categories from '../components/Categories';

export default function Home() {

    const navigation=useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            // headerTitle: "HomeScreenIsShitt",
            headerShown:false,
        })
    },[])

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* creating header */}
            <View className="flex-row mt-6 p-2 items-center mx-3 space-x-2">
                <Image
                source={{
                    uri:"https://links.papareact.com/wru"
                }}
                className='w-10 h-10 bg-gray-300 p-5  rounded-full'
                />
                <View className='flex-1'>
                <Text className='font-bold text-sm text-gray-500'>Deliver Now!</Text>
               
                <Text className='font-bold text-xl flex flex-row '>Current Location
                <ChevronDownIcon size={20} color='#00CCBB' />
                </Text>
                </View>

                <UserIcon size={30} color='#00CCBB'  />
            </View>
           <View className='flex-row items-center justify-between mx-5 pb-2 ' >
            <View className=' flex-row items-center space-x-2 bg-gray-200 rounded-md py-2 px-3 w-[80vw] '>
                <Image source={search} className='w-4 h-4'/>
                <TextInput
                placeholder='Search Items'
                keyboardType='default'
                />
            </View>
            {/* <UserIcon size={30} color='#00CCBB' /> */}
            <Image source={adjust} className='w-7 h-7 '/>
           </View>

           <ScrollView>
            {/* categories */}
            <Categories/>
            {/* featured rows */}
           </ScrollView>
        </SafeAreaView>
    );
}
