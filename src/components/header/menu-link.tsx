import Link from "next/link"
import { ReactNode } from "react"

interface MenuLinkType {
  href: string
  children: ReactNode
  title: string
}
const MenuLink = (props: MenuLinkType) => {
  const { children, href, title } = props

  return (
    <Link
      href={href}
      className='flex relative items-center text-lg text-white p-3 md:p-4 hover:bg-white hover:text-black'
    >
      {children}
      {title}
    </Link>
  )
}

export default MenuLink
