import { Button } from "@/tailwind-components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { KeyboardEvent, MouseEvent, TouchEvent } from "react"

interface CarouselArrowProps {
  isDisabled: boolean
  left?: boolean
  handleArrowClick: (e: MouseEvent | TouchEvent | KeyboardEvent) => void
}

const CarouselArrow = (props: CarouselArrowProps) => {
  const { isDisabled, left, handleArrowClick } = props

  return (
    <div className='absolute top-[70px] sm:top-0 right-[20px] md:right-[35px]'>
      {left && (
        <Button
          variant='outline'
          onClick={handleArrowClick}
          disabled={isDisabled}
          className='bg-transparent rounded-full w-6 relative right-[50px]'
        >
          <ChevronLeft />
        </Button>
      )}

      {!left && (
        <Button
          variant='outline'
          disabled={isDisabled}
          onClick={handleArrowClick}
          className='bg-transparent rounded-full w-6'
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  )
}

export default CarouselArrow
