import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header/header"
import SessionProvider from "../../provider/session-provider"

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
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
