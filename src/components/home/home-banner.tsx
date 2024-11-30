"use client"

import { useState } from "react"
import Image from "next/image"
import Banner1 from "../../assets/images/banner1.jpg"
import Banner2 from "../../assets/images/banner2.jpg"
import Banner3 from "../../assets/images/banner3.jpg"
import Banner4 from "../../assets/images/banner4.jpg"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/tailwind-components/ui/button"
import { ShoppingBag } from "lucide-react"
import TextAnimation from "../animation/text-animation"
import BlurAnimation from "../animation/blur-animation"
import { motion } from "framer-motion"

const bannerImages = [Banner1, Banner2, Banner3, Banner4]

const animation = { duration: 5000, easing: (t: number) => t }

const HomeBanner = () => {
  const [opacities, setOpacities] = useState<number[]>([])

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: bannerImages.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
    created(s) {
      s.moveToIdx(1, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation)
    },
  })

  return (
    <div className='relative'>
      <div
        ref={sliderRef}
        className='relative after:absolute after:content-[""] after:top-0 after:w-full after:bg-[#2222229e] h-[600px] after:bottom-0 after:right-0 after:left-0'
      >
        {bannerImages.map((src, idx) => (
          <div
            key={idx}
            className='fader__slide'
            style={{ opacity: opacities[idx] }}
          >
            <Image
              src={src}
              alt='banner_1'
              className='w-full min-h-[600px] max-h-[600px] object-cover'
            />
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%]'>
        <div className='container'>
          <h1 className='flex flex-wrap w-full justify-center items-center space-x-[2px] md:space-x-1'>
            <TextAnimation text='Sports Cart' />
          </h1>

          <h2 className='mt-2 flex flex-wrap w-full justify-center items-center space-x-[2px] md:space-x-1'>
            <TextAnimation text='Play Hard, Shop Smart' />
          </h2>

          <BlurAnimation
            text='Sports Cart is your go-to online store for all things sports. Find
            top-quality gear, apparel, and accessories for every sport. Shop now
            and elevate your game with the best products and prices!'
          />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              className='border border-white rounded-md bg-transparent mt-5'
              variant='outline'
            >
              Shop Now <ShoppingBag />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
