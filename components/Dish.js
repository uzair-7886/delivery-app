import { View, Text, TouchableOpacity, Image } from 'react-native'
import { React, useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { addToBasket, selectBasketItemsWithId,removeFromBasket } from '../features/basketSlice'
import { useSelector,useDispatch } from 'react-redux'

const Dish = ({
    id, name, description, price, image
}) => {

    const dispatch = useDispatch()


    const items=useSelector(state=>selectBasketItemsWithId(state,id))
    const addItemsToBasket=()=>{
        const dish={
            id, name, description, price, image
        }
        dispatch(addToBasket(dish))
        // console.log('sjlsjld')
    }
    const removeItemsFromBasket=()=>{

        if(!items.length>0)return;
        dispatch(removeFromBasket({id}))
    }

    const [isPressed, setIsPressed] = useState(false)
    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 ${isPressed&& "border-none"}`}>
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400 mb-1'>{description}</Text>
                        <Text className='text-gray-400 mb-1'>PKR {price}</Text>
                    </View>
                    <View>
                        <Image
                            // style={{
                            //     borderWidth:1,
                            //     borderColor:'gray'
                            // }}
                            className='bg-gray-300 h-20 w-20 '
                            source={
                                {
                                    uri: urlFor(image).url()
                                }
                            }
                        />
                    </View>
                </View>
                {
                    isPressed &&
                    <View>
                        {/* <Text>Pressed</Text> */}
                        <View className='flex-row items-center space-x-2 pb-3'>
                            <TouchableOpacity
                            onPress={removeItemsFromBasket}
                            >
                                <MinusCircleIcon
                                    color='#00CCBB'
                                    size={40}
                                />   
                            </TouchableOpacity>
                                <Text>{items.length}</Text>
                                <TouchableOpacity
                                onPress={addItemsToBasket}
                                >
                                <PlusCircleIcon
                                    color='#00CCBB'
                                    size={40}
                                />
                                
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </TouchableOpacity>
        </>
    )
}

export default Dish