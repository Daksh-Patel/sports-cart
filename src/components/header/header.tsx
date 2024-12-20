"use client"

import React from "react"
import Logo from "../logo"
import MenuList from "./menu-list"
import MobileHeader from "./mobile-header"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathName = usePathname()

  const isHeader = pathName === "/login"

  return (
    <header className={`${isHeader ? "hidden" : "block"}`}>
      <div className='py-5 md:px-2 shadow-lg shadow-gray-500/20'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Logo />

            <MenuList />

            <MobileHeader />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
