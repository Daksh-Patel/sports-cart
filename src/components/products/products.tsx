"use client"

import React from "react"
import ProductCard from "./product-card"
import { ProductItems } from "@/configs/products"

const Products = () => {
  return (
    <div className='mt-12'>
      <div className='container'>
        <h2 className='text-4xl font-bold'>Our Products</h2>

        <div className='grid grid-cols-4 gap-6 my-10'>
          {ProductItems.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.image}
              title={product.name}
              href='/'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
