"use client"

import { ReactNode } from "react"
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import store from "@/app/store"

interface SessionProviderProps {
  children: ReactNode
}

const SessionProvider = (props: SessionProviderProps) => {
  const { children } = props
  return (
    <NextAuthSessionProvider>
      <Provider store={store}>{children}</Provider>
    </NextAuthSessionProvider>
  )
}

export default SessionProvider
