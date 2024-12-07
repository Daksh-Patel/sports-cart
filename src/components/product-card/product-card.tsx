"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/tailwind-components/ui/card"
import Image, { StaticImageData } from "next/image"
import { Button } from "@/tailwind-components/ui/button"
import { Heart, ShoppingBag, Star } from "lucide-react"
import { ProductsType } from "@/configs/type"

interface ProductCardProps {
  productImage: StaticImageData
  companyName: string
  productRating: number
  productTitle: string
  discountPrice: number
  price: number
  discount: number
  product: ProductsType
  isWishListProduct: boolean
  isVisibleAddToCartButton: boolean
  handleAddToCartProduct: (product: ProductsType) => void
  handleWishListProduct: (product: ProductsType, productId?: number) => void
  productId?: number
}

const ProductCard = (props: ProductCardProps) => {
  const {
    price,
    productImage,
    productRating,
    productTitle,
    discount,
    discountPrice,
    companyName,
    handleAddToCartProduct,
    isVisibleAddToCartButton,
    isWishListProduct,
    product,
    handleWishListProduct,
    productId,
  } = props

  return (
    <Card className='bg-transparent boxShadow border-0 group/item text-white keen-slider__slide relative'>
      <CardHeader>
        <div className='p-4 bg-[#ebecf0] rounded-xl overflow-hidden'>
          <Image
            src={productImage}
            alt={productTitle}
            className='w-full ease-in-out duration-300 max-h-[200px] object-contain group-hover/item:scale-110'
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between'>
          <span className='text-gray-400 text-sm'>{companyName}</span>
          <p className='flex items-center text-sm'>
            <Star className='mr-2' fill='#e3cf0c' stroke='#e3cf0c' />{" "}
            {productRating}
          </p>
        </div>

        <h3 className='font-bold capitalize text-lg'>{productTitle}</h3>

        <p className='text-xl font-bold mt-2'>
          {discountPrice}₹{" "}
          <del className='text-gray-400 text-sm mx-2'>{price}₹</del>{" "}
          <span className='text-sm text-green-400'>{discount}% off</span>
        </p>
      </CardContent>
      <CardFooter className='justify-end'>
        {isVisibleAddToCartButton && (
          <Button
            variant='outline'
            className='bg-transparent text-white ring-[#38393B] ring-inset ring-2 rounded-md hover:bg-white hover:text-black font-semibold'
            onClick={() => handleAddToCartProduct(product)}
          >
            <ShoppingBag />
            Add To Cart
          </Button>
        )}
      </CardFooter>

      <Button
        className='w-8 h-8 bg-black flex items-center justify-center rounded-full absolute top-[30px] right-[30px] z-30 cursor-pointer'
        onClick={() => handleWishListProduct(product, productId)}
        disabled={isWishListProduct}
      >
        <Heart
          fill={isWishListProduct ? "red" : "transparent"}
          stroke={isWishListProduct ? "red" : "white"}
        />
      </Button>
    </Card>
  )
}

export default ProductCard
