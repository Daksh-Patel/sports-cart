"use client"

import Header from "@/components/header/header"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}
const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  const pathName = usePathname()

  return (
    <div className='w-full'>
      {pathName !== "/auth/login" && <Header />}
      {children}
    </div>
  )
}

export default MainLayout
