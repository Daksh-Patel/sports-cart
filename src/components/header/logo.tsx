"use client"

import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/'>
      <h1 className='text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500  text-transparent bg-clip-text'>
        SportsCart
      </h1>
    </Link>
  )
}

export default Logo
