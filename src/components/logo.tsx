"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

interface LogoType {
  className?: string
}

const Logo = (props: LogoType) => {
  const { className } = props

  return (
    <Link href='/' className='cursor-pointer'>
      <p
        className={cn(
          "text-2xl lg:text-4xl font-extrabold text-white",
          className,
        )}
      >
        SportsCart
      </p>
    </Link>
  )
}

export default Logo
