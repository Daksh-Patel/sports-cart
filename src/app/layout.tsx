import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header/header"
import SessionProvider from "../../provider/session-provider"
import { Raleway } from "next/font/google"
import { Toaster } from "@/tailwind-components/ui/toaster"

export const metadata: Metadata = {
  title: "Shopping Sports Item",
  description: "SportsCart: Play Hard, Shop Smart",
}

const ralewayFont = Raleway({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={ralewayFont.className}>
        <SessionProvider>
          <Header />
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
