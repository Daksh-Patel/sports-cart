import { StaticImageData } from "next/image"

export type ProductsType = {
  id: number
  name: string
  type: string
  price: number
  rating: number
  image: StaticImageData
  popular: boolean
  discount: number
  discountPrice: number
  company: string
}

export type CategoriesItemsType = {
  categoryId: number
  name: string
  image: StaticImageData
  products: ProductsType[]
}

export type AddToCartType = {
  addToCart: ProductsType[]
  addToWishList: ProductsType[]
}
