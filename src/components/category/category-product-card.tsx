"use client"

import { CategoriesItems } from "@/configs/categories-items"
import {
  AddToCartType,
  CategoriesItemsType,
  ProductsType,
} from "@/configs/type"
import ProductCard from "../product-card/product-card"
import { useToast } from "@/hooks/use-toast"
import { useDispatch, useSelector } from "react-redux"
import { useSession } from "next-auth/react"
import { addToWishListProduct } from "@/app/store/slices/add-to-wishlist"
import { addToCartProduct } from "@/app/store/slices/add-to-cart"

interface CategoryProductProps {
  categoryId: string | undefined
}
const CategoryProduct = (props: CategoryProductProps) => {
  const { categoryId } = props

  const filterCategoryProduct: CategoriesItemsType = CategoriesItems.filter(
    (cat) => cat.categoryId === Number(categoryId),
  )[0]

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

      toast({
        description: "Your product is now in the cart.",
        type: "background",
        duration: 1000,
      })
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

      toast({
        description: "Your product is now in the wishlist.",
        type: "background",
        duration: 1000,
      })
    }
  }

  return (
    <div className='container'>
      <div className='my-10'>
        <h1 className='text-4xl font-extrabold'>
          {filterCategoryProduct.name}
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
          {filterCategoryProduct.products.map((item) => (
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
              isVisibleAddToCartButton={!addedCartProductsId.includes(item.id)}
              isWishListProduct={addedWishListProductsId.includes(item.id)}
              handleWishListProduct={handleWishListProduct}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryProduct
