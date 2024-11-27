import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/tailwind-components/ui/avatar"
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
} from "lucide-react"
import Logo from "../logo"
import MenuLink from "./menu-link"

const MobileHeader = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' className='block md:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-black text-white p-0 w-[280px]'>
        <SheetHeader>
          <SheetTitle className='text-lg font-bold p-5 w-full text-left'>
            <Logo className='text-md lg:text-lg' />
          </SheetTitle>

          <div className='w-full flex items-center text-white text-xl px-4 pb-4'>
            <Avatar className='mr-3'>
              <AvatarImage src='' alt='@shadcn' />
              <AvatarFallback className='bg-white text-black'>
                DP
              </AvatarFallback>
            </Avatar>
            Daksh Patel
          </div>

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

          <div className='flex items-center text-lg text-white p-3 md:p-4 hover:bg-white hover:text-black cursor-pointer'>
            <LogOutIcon className='mr-3' />
            Sign Out
          </div>

          <Separator className='my-5 bg-white opacity-20' />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileHeader
