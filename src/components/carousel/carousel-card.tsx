"use client"

import { useKeenSlider } from "keen-slider/react"
import {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  TouchEvent,
  useState,
} from "react"
import "keen-slider/keen-slider.min.css"
import CarouselArrow from "./carousel-arrow"

interface CarouselCardProps {
  children: ReactNode
}

const CarouselCard = (props: CarouselCardProps) => {
  const { children } = props

  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <div>
      <div ref={sliderRef} className='keen-slider mt-[80px] sm:mt-0 '>
        {children}
      </div>

      {loaded && instanceRef.current && (
        <>
          <CarouselArrow
            left
            handleArrowClick={(e: MouseEvent | TouchEvent | KeyboardEvent) => {
              e.stopPropagation()
              instanceRef.current?.prev()
            }}
            isDisabled={currentSlide === 0}
          />

          <CarouselArrow
            handleArrowClick={(e: MouseEvent | TouchEvent | KeyboardEvent) => {
              e.stopPropagation()
              instanceRef.current?.next()
            }}
            isDisabled={
              currentSlide ===
              instanceRef.current.track.details?.slides.length - 1
            }
          />
        </>
      )}
    </div>
  )
}

export default CarouselCard
