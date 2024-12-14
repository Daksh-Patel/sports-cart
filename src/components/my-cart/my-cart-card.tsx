"use client"

import Image, { StaticImageData } from "next/image"
import { Star, Trash2 } from "lucide-react"
import { Button } from "@/tailwind-components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/tailwind-components/ui/tooltip"

interface MyCartCardProps {
  productImage: StaticImageData
  companyName: string
  productRating: number
  productTitle: string
  discountPrice: number
  price: number
  discount: number
  handleRemoveToCartProduct: (productId: number) => void
  productId: number
}

const MyCartCard = (props: MyCartCardProps) => {
  const {
    productImage,
    productRating,
    productTitle,
    companyName,
    discount,
    discountPrice,
    price,
    handleRemoveToCartProduct,
    productId,
  } = props

  return (
    <div className='boxShadow p-5 flex space-x-5 rounded-2xl relative'>
      <div className='p-4 bg-[#ebecf0] max-w-[150px] max-h-[150px] rounded-xl overflow-hidden'>
        <Image
          src={productImage}
          alt={productTitle}
          loading='lazy'
          className='w-full ease-in-out duration-300 max-w-[120px] max-h-[120px] object-contain group-hover/item:scale-110'
        />
      </div>

      <div className='w-full flex items-start justify-between'>
        <div>
          <span className='text-sm text-gray-300 pb-2'>{companyName}</span>
          <h2 className='text-2xl font-bold'>{productTitle}</h2>
          <p className='flex items-center mt-2 text-lg'>
            <Star className='mr-2' fill='#e3cf0c' stroke='#e3cf0c' />{" "}
            {productRating}
          </p>
        </div>

        <div className='flex flex-col items-end'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className='w-8 h-8 bg-black flex items-center justify-center rounded-full z-30 cursor-pointer'
                  onClick={() => handleRemoveToCartProduct(productId)}
                >
                  <Trash2 />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Remove to cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p>
            {" "}
            <del className='text-gray-400 text-base font-bold mr-2'>
              {price}₹
            </del>{" "}
            <span className='text-sm font-bold text-green-400'>
              {discount}% off
            </span>
          </p>

          <p className='text-xl font-bold mt-2'>Price: {discountPrice}₹</p>
        </div>
      </div>
    </div>
  )
}

export default MyCartCard
