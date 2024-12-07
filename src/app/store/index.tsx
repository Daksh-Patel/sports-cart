import { configureStore } from "@reduxjs/toolkit"
import addToCart from "./slices/add-to-cart"
import addToWishList from "./slices/add-to-wishlist"

const store = configureStore({
  reducer: {
    addToCart: addToCart,
    addToWishList: addToWishList,
  },
})

export default store
