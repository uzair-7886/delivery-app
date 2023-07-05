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
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket,removeFromBasket } = basketSlice.actions

export const selectBasketItems=state=>state.basket.items

export default basketSlice.reducer