"use client"

import { Button } from "@/tailwind-components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook, FaApple } from "react-icons/fa"
import { Separator } from "@/tailwind-components/ui/separator"
import { signIn } from "next-auth/react"

const Login = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" })
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full p-5 max-w-[600px] mx-auto rounded-md boxShadow'>
        <h1 className='text-2xl font-semibold w-full text-center pb-2'>
          Welcome Back!
        </h1>

        <p className='text-center'>Sign In Your Way</p>

        <Separator className='my-5 bg-gray-600' />

        <div className='grid grid-cols-3 gap-4'>
          <Button
            className='border border-[#38393B] rounded-md bg-transparent'
            variant='outline'
            onClick={handleGoogleSignIn}
          >
            <FcGoogle /> Google
          </Button>

          <Button
            className='border border-[#38393B] rounded-md bg-transparent'
            variant='outline'
          >
            <FaFacebook /> FaceBook
          </Button>

          <Button
            className='border border-[#38393B] rounded-md bg-transparent'
            variant='outline'
          >
            <FaApple /> Apple
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
