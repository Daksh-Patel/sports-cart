import { ProductsType } from "@/configs/type"
import { createSlice } from "@reduxjs/toolkit"

const addToWishList = createSlice({
  name: "addToWishList",
  initialState: [] as ProductsType[],
  reducers: {
    addToWishListProduct: (state, action) => {
      state.push(action.payload)
    },
    removeToWishListProduct: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export default addToWishList.reducer

export const { addToWishListProduct, removeToWishListProduct } =
  addToWishList.actions
