import { Avatar, AvatarImage } from "@/tailwind-components/ui/avatar"
import { Button } from "@/tailwind-components/ui/button"
import { Separator } from "@/tailwind-components/ui/separator"
import {
  Sheet,
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

const MobileHeader = () => {
  const { data: userDetails } = useSession()

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

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
      <SheetContent className='bg-black text-white p-0 w-[280px]'>
        <SheetHeader>
          <SheetTitle className='text-lg font-bold p-5 w-full text-left'>
            <Logo className='text-md lg:text-lg' />
          </SheetTitle>

          {userDetails !== null ? (
            <div className='w-full flex items-center text-white text-xl px-4 pb-4'>
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

          <MenuLink title='My Cart' href='/'>
            <ShoppingCart className='mr-3' />
          </MenuLink>

          <Separator className='my-5 bg-white opacity-20' />

          <MenuLink title='My Wishlist' href='/'>
            <HeartIcon className='mr-3' />
          </MenuLink>

          <Separator className='my-5 bg-white opacity-20' />

          <MenuLink title='My Order' href='/'>
            <ShoppingBagIcon className='mr-3' />
          </MenuLink>

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
