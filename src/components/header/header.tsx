"use client"

import React from "react"
import Logo from "../logo"
import MenuList from "./menu-list"
import MobileHeader from "./mobile-header"

const Header = () => {
  return (
    <div className='py-5 md:px-2 shadow-lg shadow-gray-500/30'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Logo />

          <MenuList />

          <MobileHeader />
        </div>
      </div>
    </div>
  )
}

export default Header
