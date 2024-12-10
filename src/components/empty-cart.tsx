"use client"

import Image from "next/image"
import EmptyImage from "../assets/images/empty_cart.png"

interface EmptyCartProps {
  title: string
}

const EmptyCart = (props: EmptyCartProps) => {
  const { title } = props

  return (
    <div className='max-w-[500px] mx-auto w-full text-center mt-5'>
      <Image src={EmptyImage} alt='empty' loading='lazy' />

      <h2 className='text-2xl font-bold'>{title}</h2>
    </div>
  )
}

export default EmptyCart
