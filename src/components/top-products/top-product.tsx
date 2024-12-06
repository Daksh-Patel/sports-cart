"use client"

import ProductCard from "../product-card/product-card"

const TopProducts = () => {
  return (
    <div className='mt-12'>
      <div className='container'>
        <h2 className='text-4xl font-bold'>Top Products</h2>

        <div className='grid grid-cols-4 gap-6 my-8'>
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default TopProducts
