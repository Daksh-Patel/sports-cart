import MyWishList from "@/components/my-wishlist/my-wishlist"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Wishlist",
}

const MyWishListPage = () => {
  return <MyWishList />
}

export default MyWishListPage
