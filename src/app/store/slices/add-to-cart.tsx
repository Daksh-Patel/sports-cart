import { ProductsType } from "@/configs/type"
import { createSlice } from "@reduxjs/toolkit"

const addToCart = createSlice({
  name: "addToCart",
  initialState: [] as ProductsType[],
  reducers: {
    addToCartProduct: (state, action) => {
      state.push(action.payload)
    },
    removeToCartProduct: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export default addToCart.reducer

export const { addToCartProduct, removeToCartProduct } = addToCart.actions
