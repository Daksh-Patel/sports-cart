import MyCart from "@/components/my-cart/my-cart"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Cart",
}

const MyCartPage = () => {
  return <MyCart />
}

export default MyCartPage
