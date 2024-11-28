"use client"

import { ReactNode } from "react"
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

interface SessionProviderProps {
  children: ReactNode
}

const SessionProvider = (props: SessionProviderProps) => {
  const { children } = props
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}

export default SessionProvider
