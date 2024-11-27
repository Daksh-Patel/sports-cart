"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

interface LogoType {
  className?: string
}

const Logo = (props: LogoType) => {
  const { className } = props

  return (
    <Link href='/'>
      <h1
        className={cn(
          "text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500  text-transparent bg-clip-text",
          className,
        )}
      >
        SportsCart
      </h1>
    </Link>
  )
}

export default Logo
