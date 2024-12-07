"use client"

import { CategoriesItems } from "@/configs/categories-items"
import ProductCard from "../product-card/product-card"
import CarouselCard from "../carousel/carousel-card"

const TopProducts = () => {
  return (
    <div className='mt-12'>
      <div className='container relative'>
        <h2 className='text-4xl font-bold'>Top Products</h2>

        <div className='w-full my-8'>
          <CarouselCard>
            {CategoriesItems.map((cat) =>
              cat.products.map(
                (item) =>
                  item.popular && (
                    <ProductCard
                      key={item.id}
                      price={item.price}
                      productImage={item.image}
                      productRating={item.rating}
                      productTitle={item.name}
                      companyName={item.company}
                      discount={item.discount}
                      discountPrice={item.discountPrice}
                    />
                  ),
              ),
            )}
          </CarouselCard>
        </div>
      </div>
    </div>
  )
}

export default TopProducts
