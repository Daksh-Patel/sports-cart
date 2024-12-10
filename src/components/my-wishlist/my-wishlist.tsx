"use client"

import { useDispatch, useSelector } from "react-redux"
import { AddToCartType, ProductsType } from "@/configs/type"
import EmptyCart from "../empty-cart"
import ProductCard from "../product-card/product-card"
import { addToCartProduct } from "@/app/store/slices/add-to-cart"
import { removeToWishListProduct } from "@/app/store/slices/add-to-wishlist"
import { useToast } from "@/hooks/use-toast"

const MyWishList = () => {
  const addedWishListProduct = useSelector((state: AddToCartType) => {
    return state.addToWishList
  })

  const dispatch = useDispatch()

  const { toast } = useToast()

  const addedCartProducts = useSelector((state: AddToCartType) => {
    return state.addToCart
  })

  const addedCartProductsId = addedCartProducts.map((product) => product.id)
  const addedWishListProductsId = addedWishListProduct.map(
    (product) => product.id,
  )

  const handleAddToCartProduct = (product: ProductsType) => {
    dispatch(addToCartProduct(product))
  }

  const handleWishListProduct = (product: ProductsType, productId: number) => {
    console.log(product)
    dispatch(removeToWishListProduct(productId))

    toast({
      description: "Your product is remove from the wishlist.",
      type: "background",
      duration: 1000,
    })
  }

  return (
    <div className='container'>
      {addedWishListProduct.length === 0 && (
        <EmptyCart title='Oops! Your wishlist has nothing in it.' />
      )}

      {addedWishListProduct.length > 0 && (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
          {addedWishListProduct.map((item, index: number) => (
            <ProductCard
              key={item.id}
              price={item.price}
              productImage={item.image}
              productRating={item.rating}
              productTitle={item.name}
              companyName={item.company}
              discount={item.discount}
              discountPrice={item.discountPrice}
              handleAddToCartProduct={handleAddToCartProduct}
              product={item}
              productId={index}
              isVisibleAddToCartButton={!addedCartProductsId.includes(item.id)}
              isWishListProduct={addedWishListProductsId.includes(item.id)}
              handleWishListProduct={handleWishListProduct}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyWishList
