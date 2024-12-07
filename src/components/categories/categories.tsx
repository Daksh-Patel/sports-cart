"use client"

import React from "react"
import { CategoriesItems } from "@/configs/categories-items"
import CategoriesCard from "./categories-card"
import CarouselCard from "../carousel/carousel-card"

const Categories = () => {
  return (
    <div className='mt-12'>
      <div className='container relative'>
        <h2 className='text-4xl font-bold'>Our Categories</h2>

        <div className='w-full my-8'>
          <CarouselCard>
            {CategoriesItems.map((cat) => (
              <CategoriesCard
                key={cat.categoryId}
                imageSrc={cat.image}
                title={cat.name}
                href='/'
              />
            ))}
          </CarouselCard>
        </div>
      </div>
    </div>
  )
}

export default Categories
