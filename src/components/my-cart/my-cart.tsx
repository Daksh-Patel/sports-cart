"use client"

// import { AddToCartType } from "@/configs/type"
// import { useSelector } from "react-redux"
// import EmptyCart from "../empty-cart"
import MyCartCard from "./my-cart-card"

const MyCart = () => {
  //   const addedCartProducts = useSelector((state: AddToCartType) => {
  //     return state.addToCart
  //   })
  return (
    <div className='container'>
      {/* {addedCartProducts.length === 0 && (
        <EmptyCart title='Oops! Your cart has nothing in it.' />
      )} */}

      <div className='my-10'>
        <MyCartCard />
      </div>
    </div>
  )
}

export default MyCart
