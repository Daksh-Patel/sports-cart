"use client"

import React from "react"
import Logo from "./logo"
import MenuList from "./menu-list"

const Header = () => {
  return (
    <div className='p-5 shadow-lg shadow-gray-500/30'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Logo />

          <MenuList />
        </div>
      </div>
    </div>
  )
}

export default Header
