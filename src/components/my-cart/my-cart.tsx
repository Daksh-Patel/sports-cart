"use client"

import { AddToCartType } from "@/configs/type"
import { useDispatch, useSelector } from "react-redux"
import EmptyCart from "../empty-cart"
import MyCartCard from "./my-cart-card"
import { removeToCartProduct } from "@/app/store/slices/add-to-cart"
import { useToast } from "@/hooks/use-toast"

const MyCart = () => {
  const dispatch = useDispatch()

  const { toast } = useToast()

  const addedCartProducts = useSelector((state: AddToCartType) => {
    return state.addToCart
  })

  const handleRemoveToCartProduct = (productId: number) => {
    dispatch(removeToCartProduct(productId))

    toast({
      description: "Your product is remove from the cart.",
      type: "background",
      duration: 1000,
    })
  }
  return (
    <div className='container'>
      {addedCartProducts.length === 0 && (
        <EmptyCart title='Oops! Your cart has nothing in it.' />
      )}

      <div className='my-10 grid grid-cols-2 gap-6'>
        {addedCartProducts.map((product, index) => (
          <MyCartCard
            key={product.id}
            price={product.price}
            productImage={product.image}
            productTitle={product.name}
            productRating={product.rating}
            companyName={product.company}
            discount={product.discount}
            discountPrice={product.discountPrice}
            handleRemoveToCartProduct={handleRemoveToCartProduct}
            productId={index}
          />
        ))}
      </div>
    </div>
  )
}

export default MyCart
