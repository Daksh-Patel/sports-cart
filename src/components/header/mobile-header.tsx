import { Avatar, AvatarImage } from "@/tailwind-components/ui/avatar"
import { Button } from "@/tailwind-components/ui/button"
import { Separator } from "@/tailwind-components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/tailwind-components/ui/sheet"
import {
  HeartIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCart,
  User,
} from "lucide-react"
import Logo from "../logo"
import MenuLink from "./menu-link"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Loading from "./loading"
import { useSelector } from "react-redux"
import { AddToCartType } from "@/configs/type"

const MobileHeader = () => {
  const { data: userDetails } = useSession()

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const addedCartProducts = useSelector((state: AddToCartType) => {
    return state.addToCart
  })

  const addedWishListProduct = useSelector((state: AddToCartType) => {
    return state.addToWishList
  })

  const router = useRouter()

  const handleSignOutUser = () => {
    signOut()
  }

  const handleNavigateLoginPage = () => {
    router.push("/login")
    setIsOpenMenu(false)
  }

  const handleOpenMenubar = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const handleCloseSheet = () => {
    setIsOpenMenu(false)
  }

  return (
    <Sheet onOpenChange={handleOpenMenubar} open={isOpenMenu}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='block md:hidden'
          onClick={handleOpenMenubar}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-black text-white p-0 w-[280px] border border-black'>
        <SheetHeader>
          <SheetTitle className='text-lg font-bold p-5 w-full text-left'>
            <Logo className='text-md lg:text-lg' />
          </SheetTitle>

          {userDetails !== null ? (
            <div className='w-full flex items-center text-white text-xl px-4 pb-4 capitalize'>
              {userDetails?.user?.name ? (
                <>
                  <Avatar className='mr-3'>
                    <AvatarImage
                      src={userDetails?.user?.image ?? ""}
                      alt={userDetails?.user?.name ?? "avatar"}
                    />
                  </Avatar>
                  {userDetails?.user?.name ?? ""}
                </>
              ) : (
                <Loading />
              )}
            </div>
          ) : (
            <div
              className='flex items-center text-lg text-white p-3 md:p-4 hover:bg-white hover:text-black cursor-pointer'
              onClick={handleNavigateLoginPage}
            >
              <User className='mr-3' />
              Sign In
            </div>
          )}

          <Separator className='my-5 bg-white opacity-20' />

          <SheetClose onClick={handleCloseSheet}>
            <MenuLink title='My Cart' href='/'>
              <ShoppingCart className='mr-3' />

              <span className='absolute top-[10px] left-[24px] w-4 h-4 rounded-full bg-pink-400 flex items-center justify-center p-2 text-xs'>
                {addedCartProducts.length}
              </span>
            </MenuLink>
          </SheetClose>

          <Separator className='my-5 bg-white opacity-20' />

          <SheetClose onClick={handleCloseSheet}>
            <MenuLink title='My Wishlist' href='/my-wishlist'>
              <HeartIcon className='mr-3' />
              <span className='absolute top-[12px] left-[24px] w-4 h-4 rounded-full bg-pink-400 flex items-center justify-center p-2 text-xs'>
                {addedWishListProduct.length}
              </span>
            </MenuLink>
          </SheetClose>

          <Separator className='my-5 bg-white opacity-20' />

          <SheetClose onClick={handleCloseSheet}>
            <MenuLink title='My Order' href='/'>
              <ShoppingBagIcon className='mr-3' />
            </MenuLink>
          </SheetClose>

          <Separator className='my-5 bg-white opacity-20' />

          {userDetails !== null && (
            <>
              <div
                className='flex items-center text-lg text-white p-3 md:p-4 hover:bg-white hover:text-black cursor-pointer'
                onClick={handleSignOutUser}
              >
                <LogOutIcon className='mr-3' />
                Sign Out
              </div>

              <Separator className='my-5 bg-white opacity-20' />
            </>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileHeader
