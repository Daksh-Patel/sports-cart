"use client"

import Image from "next/image"
import CartImage from "../../assets/images/bat.png"

const MyCartCard = () => {
  return (
    <div className='boxShadow p-5 flex space-x-4 rounded-2xl'>
      <div className='p-4 bg-[#ebecf0] max-w-[150px] max-h-[150px] rounded-xl overflow-hidden'>
        <Image
          src={CartImage}
          alt=''
          loading='lazy'
          className='w-full ease-in-out duration-300 max-w-[120px] max-h-[120px] object-contain group-hover/item:scale-110'
        />
      </div>

      <div>
        <span className='text-sm text-gray-300 pb-2'>Company Name</span>
        <h2 className='text-2xl font-bold'>Product Title</h2>
      </div>
    </div>
  )
}

export default MyCartCard
