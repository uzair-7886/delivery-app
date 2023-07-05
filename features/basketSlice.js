import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   value: 0,
items:[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items=[...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {

        const newBasket=[...state.items]
        const index=state.items.findIndex(basketItem=>basketItem.id===action.payload.id)
        if(index>=0){
            newBasket.splice(index,1)
            state.items=newBasket
        }else{
            console.warn(`Cant remove product (id: ${action.payload.id}) as its not in basket`)
        }
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket,removeFromBasket } = basketSlice.actions

export const selectBasketItems=state=>state.basket.items

export const selectBasketItemsWithId=(state,id)=>{

    // return state.basket.items.find(item=>item.id===id)
    return state.basket.items.filter(item=>item.id===id)
}

export const selectTotalPrice=(state)=>{
    return state.basket.items.reduce((total,item)=>total+item.price,0)
}

export default basketSlice.reducer