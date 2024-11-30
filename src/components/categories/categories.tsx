"use client"

import React from "react"
import { CategoriesItems } from "@/configs/categories-items"
import CategoriesCard from "./categories-card"

const Categories = () => {
  return (
    <div className='mt-12'>
      <div className='container'>
        <h2 className='text-4xl font-bold'>Our Categories</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6 my-10'>
          {CategoriesItems.map((cat) => (
            <CategoriesCard
              key={cat.id}
              imageSrc={cat.image}
              title={cat.name}
              href='/'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
