"use client"

import { CategoriesItems } from "@/configs/categories-items"
import ProductCard from "../product-card/product-card"
import CarouselCard from "../carousel/carousel-card"
import { AddToCartType, ProductsType } from "@/configs/type"
import { useDispatch, useSelector } from "react-redux"
import { addToCartProduct } from "@/app/store/slices/add-to-cart"
import { addToWishListProduct } from "@/app/store/slices/add-to-wishlist"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

const TopProducts = () => {
  const dispatch = useDispatch()

  const { data: userDetails } = useSession()

  const { toast } = useToast()

  const addedCartProducts = useSelector((state: AddToCartType) => {
    return state.addToCart
  })

  const addedWishListProduct = useSelector((state: AddToCartType) => {
    return state.addToWishList
  })

  const addedCartProductsId = addedCartProducts.map((product) => product.id)
  const addedWishListProductsId = addedWishListProduct.map(
    (product) => product.id,
  )

  const handleAddToCartProduct = (product: ProductsType) => {
    if (userDetails === null) {
      toast({
        description: "Please login to add product to cart.",
        variant: "destructive",
      })
    } else {
      dispatch(addToCartProduct(product))
    }
  }

  const handleWishListProduct = (product: ProductsType) => {
    if (userDetails === null) {
      toast({
        description: "Please login to add product to wishlist.",
        variant: "destructive",
      })
    } else {
      dispatch(addToWishListProduct(product))
    }
  }

  return (
    <div className='mt-12'>
      <div className='container relative'>
        <h2 className='text-4xl font-bold'>Top Products</h2>

        <div className='w-full my-8'>
          <CarouselCard>
            {CategoriesItems.map((cat) =>
              cat.products.map(
                (item) =>
                  item.popular && (
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
                      productId={item.id}
                      isVisibleAddToCartButton={
                        !addedCartProductsId.includes(item.id)
                      }
                      isWishListProduct={addedWishListProductsId.includes(
                        item.id,
                      )}
                      handleWishListProduct={handleWishListProduct}
                    />
                  ),
              ),
            )}
          </CarouselCard>
        </div>
      </div>
    </div>
  )
}

export default TopProducts
