import type { Metadata } from "next"
import "./globals.css"
import MainLayout from "./main-layout"

export const metadata: Metadata = {
  title: "Shopping Sports Item",
  description: "SportsCart: Play Hard, Shop Smart",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='w-full'>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
